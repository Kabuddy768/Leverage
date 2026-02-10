import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const missingVars = requiredEnvVars.filter(v => !process.env[v]);
    if (missingVars.length > 0) {
        console.error(`Missing environment variables: ${missingVars.join(', ')}`);
        return response.status(500).json({ error: 'Server configuration error: Missing environment variables' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const { name, email, phone, subject, message } = request.body;

        if (!name || !email || !message) {
            return response.status(400).json({ error: 'Missing required fields' });
        }

        const mailOptions = {
            from: `"Office Choice Solutions Website" <${process.env.SMTP_USER}>`,
            to: "info@officechoicesolutions.co.ke",
            replyTo: email,
            subject: `New Inquiry: ${subject || 'General Inquiry'}`,
            html: `
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
      `,
        };

        await transporter.sendMail(mailOptions);

        return response.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return response.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
