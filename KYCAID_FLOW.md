# KYCAID Integration Flow

## Overview
This document outlines the complete KYCAID verification flow for the application.

## Current Implementation Status

### ✅ Step 1: Create Applicant
- **Endpoint**: `POST /api/kyc`
- **Status**: ✅ Implemented
- **Fields**: name, dob, email, phone
- **Returns**: `applicant_id`

### ✅ Step 2: Create Verification
- **Endpoint**: `POST /api/kyc/verification`
- **Status**: ✅ Implemented
- **Body**: `{ applicant_id: string, form_id?: string }`
- **Returns**: `verification_id`, `form_url`

### ⏳ Step 3: Redirect User to Form
- **Status**: ⏳ Pending frontend implementation
- **Action**: Redirect user to `form_url` from Step 2

### ⏳ Step 4: Handle Webhook/Callback
- **Status**: ⏳ Pending implementation
- **Endpoint**: `POST /api/kyc/webhook` (to be created)
- **Purpose**: Receive verification status updates from KYCAID

### ⏳ Step 5: Check Verification Status
- **Status**: ⏳ Pending implementation
- **Endpoint**: `GET /api/kyc/verification/[id]` (to be created)
- **Purpose**: Poll or check verification status

## Recommended Flow for Your Use Case

Given your current 4 fields (name, dob, email, phone), here's the **best flow**:

### Option A: Basic Document + Liveness Verification (Recommended)
1. ✅ Create Applicant
2. ✅ Create Verification (with form_id configured in KYCAID dashboard)
3. Redirect user to KYCAID form URL
4. User completes:
   - Document upload (ID/Passport)
   - Liveness check (selfie/video)
5. KYCAID processes and sends webhook
6. Check verification status

### Option B: Minimal Flow (If you only need basic info)
1. ✅ Create Applicant
2. ✅ Create Verification
3. Redirect to form
4. User completes minimal verification
5. Handle results

## KYCAID APIs Overview

### 1. **Applicants** ✅
- Create, read, update applicant information
- **Current use**: Creating applicant with basic info

### 2. **Verifications** ✅
- Create verification for an applicant
- Link applicant to a verification form
- **Current use**: Creating verification after applicant creation

### 3. **Forms**
- Configure verification forms in KYCAID dashboard
- Set up verification steps (document, liveness, etc.)
- **Action needed**: Create a form in KYCAID dashboard and get `form_id`

### 4. **Documents** (Optional)
- Upload documents programmatically
- **Use case**: If you want to upload documents server-side instead of using KYCAID form

### 5. **Files** (Optional)
- Upload files (images, PDFs) for verification
- **Use case**: Supporting document uploads

### 6. **Addresses** (Optional)
- Add address information to applicant
- **Use case**: If you need to collect address separately

### 7. **Affiliated Persons** (Optional)
- Add related persons (beneficial owners, etc.)
- **Use case**: For business/entity verification

## Environment Variables Needed

```env
# Required
NEXT_PUBLIC_KYCAID_API_KEY=your_api_key_here
KYCAID_FORM_ID=your_form_id_from_dashboard

# Optional
NEXT_PUBLIC_KYCAID_BASE_URL=https://api.kycaid.com
KYCAID_AUTO_CREATE_VERIFICATION=false  # Set to 'true' to auto-create verification
KYCAID_CALLBACK_URL=https://yourdomain.com/api/kyc/webhook
```

## Next Steps to Complete Integration

1. **Create Verification Form in KYCAID Dashboard**
   - Go to KYCAID dashboard → Verification Forms
   - Create a new form
   - Configure verification steps (Document + Liveness recommended)
   - Copy the `form_id`

2. **Update Frontend to Handle Verification Flow**
   ```javascript
   // After successful applicant creation:
   const applicantResponse = await fetch('/api/kyc', { ... });
   const { applicant_id } = applicantResponse.data;
   
   // Create verification
   const verificationResponse = await fetch('/api/kyc/verification', {
     method: 'POST',
     body: JSON.stringify({ applicant_id })
   });
   const { form_url } = verificationResponse.data;
   
   // Redirect user to KYCAID form
   window.location.href = form_url;
   ```

3. **Create Webhook Handler** (Optional but recommended)
   - Create `/api/kyc/webhook/route.js`
   - Handle verification status updates from KYCAID
   - Update your database with verification status

4. **Add Status Check Endpoint** (Optional)
   - Create `/api/kyc/verification/[id]/route.js`
   - Allow checking verification status programmatically

## API Response Examples

### Create Applicant Response
```json
{
  "success": true,
  "data": {
    "applicant_id": "31ba6efa1a6d01469a189083b2edc5bda9fe",
    "type": "PERSON",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
}
```

### Create Verification Response
```json
{
  "success": true,
  "data": {
    "verification_id": "abc123...",
    "form_url": "https://kycaid.com/form/abc123...",
    "status": "pending"
  }
}
```

## Verification Status Values

- `pending` - Verification created, waiting for user
- `in_progress` - User is completing the form
- `approved` - Verification passed
- `rejected` - Verification failed
- `expired` - Verification expired

