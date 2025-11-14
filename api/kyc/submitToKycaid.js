export const submitToKycaid = async ({ name, dob, email, phone }) => {
    console.log('[submitToKycaid] Starting KYC submission', {
        email,
        phone: phone ? `${phone.substring(0, 3)}***` : null,
        hasName: !!name,
        hasDob: !!dob,
    });

    const apiKey = process.env.NEXT_PUBLIC_KYCAID_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_KYCAID_BASE_URL || "https://api.kycaid.com";

    if (!apiKey) {
        console.error('[submitToKycaid] Missing API key');
        throw new Error("KYCAID API key is missing. Add NEXT_PUBLIC_KYCAID_API_KEY to your environment.");
    }

    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || null;

    const payload = {
        type: "person",
        email,
        phone,
        person: {
            first_name: firstName || name,
            last_name: lastName,
            dob,
        },
        metadata: {
            source: "terms-verification-form",
        },
    };

    console.log('[submitToKycaid] Prepared payload', {
        type: payload.type,
        email: payload.email,
        firstName: payload.person.first_name,
        lastName: payload.person.last_name ? '***' : null,
        hasDob: !!payload.person.dob,
        source: payload.metadata.source,
    });

    try {
        console.log('[submitToKycaid] Sending request to KYCAID API', {
            url: `${baseUrl}/applicants`,
            method: 'POST',
        });

        const response = await fetch(`${baseUrl}/applicants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        console.log('[submitToKycaid] Received response', {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('[submitToKycaid] KYCAID API error', {
                status: response.status,
                statusText: response.statusText,
                errorBody,
            });
            throw new Error(errorBody || "KYCAID request failed");
        }

        const result = await response.json();
        console.log('[submitToKycaid] Successfully submitted to KYCAID', {
            applicantId: result?.applicant_id || result?.id || 'unknown',
        });

        return result;
    } catch (error) {
        console.error('[submitToKycaid] Error during submission', {
            message: error.message,
            stack: error.stack,
        });
        throw error;
    }
};

