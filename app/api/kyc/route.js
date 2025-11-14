import { NextResponse } from 'next/server';

const formatPhoneNumber = (phone) => {
  if (!phone) return null;
  
  // Remove all non-digit characters (spaces, dashes, parentheses, plus signs, etc.)
  const digitsOnly = phone.replace(/\D/g, '');
  
  // If the number starts with a leading zero (like 0XXXXXXXXX), we might need to handle it
  // For now, just return the digits only - KYCAID expects E.164 format (country code + number)
  // Example: "441172345678" or "+44 117 234 5678" -> "441172345678"
  
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return null; // Invalid length for international phone number
  }
  
  return digitsOnly;
};

const validatePayload = (payload) => {
  if (!payload) {
    return 'Missing request body';
  }

  const { name, dob, email, phone } = payload;

  if (!name?.trim()) return 'Name is required';
  if (!email?.trim()) return 'Email is required';
  if (!phone?.trim()) return 'Phone number is required';
  if (!dob?.trim()) return 'Date of birth is required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Email is invalid';

  // Validate phone number format
  const formattedPhone = formatPhoneNumber(phone);
  if (!formattedPhone) {
    return 'Phone number is invalid. Please include country code (e.g., +1 234 567 8900)';
  }

  return null;
};

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => null);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_KYCAID_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_KYCAID_BASE_URL || "https://api.kycaid.com";

    if (!apiKey) {
      console.error('[KYC API] Missing API key');
      return NextResponse.json(
        { error: 'KYC service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const { name, dob, email, phone } = payload;
    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || null;

    // Format phone number to E.164 format (digits only with country code)
    const formattedPhone = formatPhoneNumber(phone);
    if (!formattedPhone) {
      return NextResponse.json(
        { error: 'Phone number is invalid. Please include country code (e.g., +1 234 567 8900)' },
        { status: 400 }
      );
    }

    // KYCAID API expects a flat payload structure with fields directly in the root
    const kycaidPayload = {
      type: "PERSON",
      first_name: firstName || name,
      last_name: lastName,
      dob,
      email,
      phone: formattedPhone,
    };

    console.log('[KYC API] Sending request to KYCAID', {
      url: `${baseUrl}/applicants`,
      email: email,
      phone: formattedPhone,
      hasName: !!name,
      hasDob: !!dob,
    });

    const response = await fetch(`${baseUrl}/applicants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey, // KYCAID expects just the API key, not "Bearer {key}"
      },
      body: JSON.stringify(kycaidPayload),
    });

    if (!response.ok) {
      let errorBody = await response.text();
      let errorMessage = 'Failed to submit KYC application';
      
      // Try to parse KYCAID error response
      try {
        const errorJson = JSON.parse(errorBody);
        if (errorJson.errors && Array.isArray(errorJson.errors) && errorJson.errors.length > 0) {
          // Extract validation errors
          const validationErrors = errorJson.errors.map(err => {
            if (err.message) {
              return err.parameter ? `${err.parameter}: ${err.message}` : err.message;
            }
            return err.parameter ? `${err.parameter} is invalid` : 'Validation error';
          }).join(', ');
          errorMessage = validationErrors;
        } else if (errorJson.message) {
          errorMessage = errorJson.message;
        } else if (typeof errorJson === 'string') {
          errorMessage = errorJson;
        }
      } catch (parseError) {
        // If it's not JSON, use the raw error body or a default message
        if (errorBody && !errorBody.includes('<!doctype')) {
          errorMessage = errorBody;
        }
      }
      
      console.error('[KYC API] KYCAID API error', {
        status: response.status,
        statusText: response.statusText,
        errorBody,
        errorMessage,
      });
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const result = await response.json();
    const applicantId = result?.applicant_id || result?.id;
    
    console.log('[KYC API] Successfully submitted to KYCAID', {
      applicantId: applicantId || 'unknown',
    });

    // Optionally create verification immediately after creating applicant
    // This can be done in a separate API call from the frontend if preferred
    const shouldCreateVerification = process.env.KYCAID_AUTO_CREATE_VERIFICATION === 'true';
    
    if (shouldCreateVerification && applicantId) {
      const formId = process.env.KYCAID_FORM_ID;
      if (formId) {
        try {
          const verificationResponse = await fetch(`${baseUrl}/verifications`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            body: JSON.stringify({
              applicant_id: applicantId,
              form_id: formId,
            }),
          });

          if (verificationResponse.ok) {
            const verificationResult = await verificationResponse.json();
            console.log('[KYC API] Auto-created verification', {
              verificationId: verificationResult?.verification_id || verificationResult?.id,
            });
            
            return NextResponse.json({ 
              success: true, 
              data: {
                ...result,
                verification_id: verificationResult?.verification_id || verificationResult?.id,
                form_url: verificationResult?.form_url || verificationResult?.url,
              }
            });
          }
        } catch (verificationError) {
          console.error('[KYC API] Failed to auto-create verification', verificationError);
          // Continue and return applicant data even if verification creation fails
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      data: {
        ...result,
        applicant_id: applicantId,
        // Note: Verification should be created separately via /api/kyc/verification
        // or set KYCAID_AUTO_CREATE_VERIFICATION=true in env
      }
    });
  } catch (error) {
    console.error('[KYC API] Error during submission', {
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { error: 'Unable to submit KYC application at this time. Please try again later.' },
      { status: 500 }
    );
  }
}

