// src/app/actions/contact.ts
import { ContactFormData } from '../../types/contactFormTypes';
import nodemailer from 'nodemailer';

export async function sendMailAction(formData: ContactFormData) {
  const { name, email, message } = formData;

  // Nodemailer 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    return { success: false, message: 'Failed to send email' };
  }
}
