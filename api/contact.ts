import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as Brevo from '@getbrevo/brevo';

const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
    throw new Error('BREVO_API_KEY is not defined');
}

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, subject, message } = request.body;

        if (!name || !email || !message) {
            return response.status(400).json({ error: 'Missing required fields' });
        }

        const sendSmtpEmail = new Brevo.SendSmtpEmail();

        sendSmtpEmail.subject = `New Inquiry: ${subject || 'General Inquiry'}`;
        sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;
        sendSmtpEmail.sender = { name: "Office Choice Solutions Website", email: "no-reply@officechoicesolutions.co.ke" };
        sendSmtpEmail.to = [{ email: "info@officechoicesolutions.co.ke", name: "Office Choice Solutions" }];
        sendSmtpEmail.replyTo = { email: email, name: name };

        await apiInstance.sendTransacEmail(sendSmtpEmail);

        return response.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return response.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
