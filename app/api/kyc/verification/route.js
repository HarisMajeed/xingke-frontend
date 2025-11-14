import { NextResponse } from 'next/server';

/**
 * Get a form URL for an applicant
 * This endpoint retrieves a one-time URL to a KYCAID verification form
 * 
 * POST /api/kyc/verification
 * Body: { 
 *   applicant_id: string, 
 *   form_id?: string,
 *   external_applicant_id?: string,
 *   redirect_url?: string
 * }
 */
export async function POST(request) {
  try {
    const payload = await request.json().catch(() => null);
    
    if (!payload || !payload.applicant_id) {
      return NextResponse.json(
        { error: 'applicant_id is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_KYCAID_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_KYCAID_BASE_URL || "https://api.kycaid.com";

    if (!apiKey) {
      console.error('[KYC Verification] Missing API key');
      return NextResponse.json(
        { error: 'KYC service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Step 1: Always fetch available forms using GET /forms (only needs API key)
    console.log('[KYC Verification] Fetching available forms from dashboard');
    
    let formId = payload.form_id || process.env.KYCAID_FORM_ID;
    
    try {
      const formsResponse = await fetch(`${baseUrl}/forms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      });

      if (!formsResponse.ok) {
        const errorText = await formsResponse.text();
        console.error('[KYC Verification] Failed to fetch forms', {
          status: formsResponse.status,
          error: errorText,
        });
        return NextResponse.json(
          { error: 'Unable to fetch available forms. Please contact support.' },
          { status: formsResponse.status }
        );
      }

      const formsResult = await formsResponse.json();
      // Handle different response formats
      const forms = Array.isArray(formsResult) 
        ? formsResult 
        : (formsResult?.forms || formsResult?.data || []);

      if (forms.length === 0) {
        console.error('[KYC Verification] No forms available in dashboard');
        return NextResponse.json(
          { error: 'No verification forms are available. Please create a form in the KYCAID dashboard.' },
          { status: 404 }
        );
      }

      // Extract form IDs from the forms array
      const availableFormIds = forms.map(form => form.form_id || form.id).filter(Boolean);

      // If a form_id was provided, check if it exists in the available forms
      let formIdsToTry = [];
      if (formId) {
        const formExists = availableFormIds.includes(formId);
        
        if (!formExists) {
          console.warn('[KYC Verification] Provided form_id not found, will try all available forms', {
            provided_form_id: formId,
            available_forms: availableFormIds,
          });
          formIdsToTry = availableFormIds;
        } else {
          // Try provided form first, then others if it fails
          formIdsToTry = [formId, ...availableFormIds.filter(id => id !== formId)];
        }
      } else {
        // No form_id provided, try all forms in order
        formIdsToTry = availableFormIds;
      }

      console.log('[KYC Verification] Forms to try', {
        form_ids: formIdsToTry,
        total_forms: forms.length,
      });

      // Step 2: Prepare request payload for getting form URL
      const formUrlPayload = {
        applicant_id: payload.applicant_id,
      };

      // Add optional fields if provided
      if (payload.external_applicant_id) {
        formUrlPayload.external_applicant_id = payload.external_applicant_id;
      }

      if (payload.redirect_url) {
        formUrlPayload.redirect_url = payload.redirect_url;
      } else if (process.env.KYCAID_REDIRECT_URL) {
        formUrlPayload.redirect_url = process.env.KYCAID_REDIRECT_URL;
      }

      // Step 3: Try each form until we find one compatible with the applicant
      let lastError = null;
      for (let i = 0; i < formIdsToTry.length; i++) {
        const currentFormId = formIdsToTry[i];
        
        console.log('[KYC Verification] Trying form', {
          form_id: currentFormId,
          attempt: i + 1,
          total: formIdsToTry.length,
          applicant_id: payload.applicant_id,
        });

        try {
          const response = await fetch(`${baseUrl}/forms/${currentFormId}/urls`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            body: JSON.stringify(formUrlPayload),
          });

          if (response.ok) {
            const result = await response.json();
            console.log('[KYC Verification] Successfully retrieved form URL', {
              form_id: currentFormId,
              verificationId: result?.verificaiton_id || result?.verification_id || 'unknown',
              formUrl: result?.form_url,
              formToken: result?.form_token ? 'present' : 'missing',
            });

            return NextResponse.json({ 
              success: true, 
              data: {
                verification_id: result?.verificaiton_id || result?.verification_id,
                form_url: result?.form_url,
                form_token: result?.form_token,
                form_id: result?.form_id || currentFormId,
                verification_attempts_left: result?.verification_attempts_left,
              }
            });
          }

          // If not OK, check if it's a compatibility error (409)
          let errorBody = await response.text();
          let errorMessage = 'Failed to get form URL';
          let isCompatibilityError = false;
          
          try {
            const errorJson = JSON.parse(errorBody);
            if (errorJson.errors && Array.isArray(errorJson.errors) && errorJson.errors.length > 0) {
              const validationErrors = errorJson.errors.map(err => {
                if (err.message) {
                  return err.parameter ? `${err.parameter}: ${err.message}` : err.message;
                }
                return err.parameter ? `${err.parameter} is invalid` : 'Validation error';
              }).join(', ');
              errorMessage = validationErrors;
              
              // Check if this is a compatibility error
              isCompatibilityError = response.status === 409 || 
                errorJson.errors.some(err => 
                  err.message && err.message.toLowerCase().includes('not compatible')
                );
            } else if (errorJson.message) {
              errorMessage = errorJson.message;
              isCompatibilityError = response.status === 409;
            } else if (errorJson.type) {
              errorMessage = `Error: ${errorJson.type}`;
              isCompatibilityError = response.status === 409;
            }
          } catch (parseError) {
            if (errorBody && !errorBody.includes('<!doctype')) {
              errorMessage = errorBody;
            }
          }

          lastError = {
            status: response.status,
            message: errorMessage,
            form_id: currentFormId,
          };

          // If it's a compatibility error and we have more forms to try, continue
          if (isCompatibilityError && i < formIdsToTry.length - 1) {
            console.warn('[KYC Verification] Form not compatible, trying next form', {
              form_id: currentFormId,
              error: errorMessage,
              remaining_forms: formIdsToTry.length - i - 1,
            });
            continue;
          }

          // If it's not a compatibility error or it's the last form, return the error
          console.error('[KYC Verification] KYCAID API error', {
            status: response.status,
            statusText: response.statusText,
            errorBody,
            errorMessage,
            form_id: currentFormId,
          });

          return NextResponse.json(
            { error: errorMessage },
            { status: response.status }
          );
        } catch (fetchError) {
          console.error('[KYC Verification] Error fetching form URL', {
            form_id: currentFormId,
            message: fetchError.message,
          });
          lastError = {
            status: 500,
            message: fetchError.message,
            form_id: currentFormId,
          };
          
          // Continue to next form if available
          if (i < formIdsToTry.length - 1) {
            continue;
          }
        }
      }

      // If we've tried all forms and none worked
      console.error('[KYC Verification] No compatible forms found', {
        tried_forms: formIdsToTry,
        last_error: lastError,
      });

      return NextResponse.json(
        { 
          error: lastError?.message || 'No compatible verification forms found for this applicant. Please contact support.' 
        },
        { status: lastError?.status || 409 }
      );
    } catch (formsError) {
      console.error('[KYC Verification] Error fetching forms', {
        message: formsError.message,
      });
      return NextResponse.json(
        { error: 'Unable to fetch forms. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[KYC Verification] Error during form URL retrieval', {
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { error: 'Unable to retrieve form URL at this time. Please try again later.' },
      { status: 500 }
    );
  }
}

