import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const validatePayload = (payload) => {
  if (!payload) {
    return 'Missing request body';
  }

  const { name, email, phone, message } = payload;

  if (!name?.trim()) return 'Name is required';
  if (!email?.trim()) return 'Email is required';
  if (!phone?.trim()) return 'Phone number is required';
  if (!message?.trim()) return 'Message is required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Email is invalid';

  return null;
};

const getResendClient = () => {
  const { RESEND_API_KEY } = process.env;

  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is not configured');
  }

  return new Resend(RESEND_API_KEY);
};

const buildEmailPayload = ({ name, email, phone, message }) => {
  const {
    CONTACT_RECIPIENT,
    CONTACT_FROM_EMAIL = 'noreply@coincollection.it.com', // Default from email, should be your verified domain
    SITE_NAME = 'Contact Form',
  } = process.env;

  if (!CONTACT_RECIPIENT) {
    throw new Error('CONTACT_RECIPIENT environment variable is not configured');
  }

  // Escape HTML in user input to prevent XSS
  const escapeHtml = (text) => {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  // For HTML, convert line breaks to <br> tags and escape HTML
  const safeMessageHtml = escapeHtml(message).replace(/\n/g, '<br>');
  // For plain text, keep as is
  const safeMessageText = message;

  return {
    from: CONTACT_FROM_EMAIL,
    reply_to: email, // This allows replying directly to the user
    to: CONTACT_RECIPIENT,
    subject: `[${SITE_NAME}] New contact form submission from ${safeName}`,
    text: `You have received a new contact form submission:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${safeMessageText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #0f172a; max-width: 640px; margin: 0 auto; padding: 32px 20px; background: linear-gradient(135deg, #0f172a, #312e81, #6d28d9);">
  <div style="background: linear-gradient(120deg, #22d3ee, #6366f1, #ec4899); padding: 2px; border-radius: 22px; box-shadow: 0 20px 45px rgba(15,23,42,0.35);">
    <div style="background-color: #ffffff; border-radius: 20px; padding: 36px 32px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <p style="display: inline-block; padding: 6px 16px; border-radius: 999px; background: rgba(99,102,241,0.1); color: #4338ca; font-weight: 600; letter-spacing: 0.08em; font-size: 12px; text-transform: uppercase; margin: 0;">
          New Submission
        </p>
        <h2 style="margin: 16px 0 8px; font-size: 26px; color: #0f172a;">Contact Form Update</h2>
        <p style="margin: 0; color: #475569; font-size: 14px;">You just received a message from your website visitors.</p>
      </div>

      <div style="background: linear-gradient(120deg, rgba(59,130,246,0.1), rgba(14,165,233,0.08)); border: 1px solid rgba(99,102,241,0.25); border-radius: 16px; padding: 24px 24px 10px; margin-bottom: 28px;">
        <h3 style="margin: 0 0 14px; color: #1e1b4b; letter-spacing: 0.08em; font-size: 14px; text-transform: uppercase;">Contact Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 150px;">Full Name</td>
            <td style="padding: 10px 0; color: #0f172a;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Email Address</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${safeEmail}" style="color: #7c3aed; font-weight: 500; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569;">Phone Number</td>
            <td style="padding: 10px 0;">
              <a href="tel:${safePhone}" style="color: #0ea5e9; font-weight: 500; text-decoration: none;">${safePhone}</a>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-bottom: 28px;">
        <h3 style="margin: 0 0 12px; color: #1e1b4b; letter-spacing: 0.08em; font-size: 14px; text-transform: uppercase;">Message</h3>
        <div style="background: linear-gradient(120deg, rgba(236,72,153,0.08), rgba(244,114,182,0.12)); padding: 20px; border-radius: 16px; border: 1px solid rgba(236,72,153,0.25); color: #0f172a; word-break: break-word;">
${safeMessageHtml}
        </div>
      </div>

      <div style="text-align: center; font-size: 12px; color: #475569;">
        <p style="margin: 0;">This notification was generated automatically.</p>
        <p style="margin: 4px 0 0;">Need help? Reach your support inbox anytime.</p>
      </div>
    </div>
  </div>
</body>
</html>
`,
  };
};

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => null);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const resend = getResendClient();
    const emailPayload = buildEmailPayload(payload);

    const { error } = await resend.emails.send(emailPayload);

    if (error) {
      throw new Error(error.message || 'Failed to send email via Resend');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Unable to send message at this time.' },
      { status: 500 },
    );
  }
}


