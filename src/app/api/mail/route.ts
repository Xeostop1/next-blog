import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // SendGrid를 사용한 이메일 전송 설정
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // TLS 사용
    auth: {
      user: 'apikey', // SendGrid는 사용자 이름을 'apikey'로 사용합니다
      pass: process.env.SENDGRID_API_KEY, // SendGrid API 키
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL, // 발신자 이메일 (SendGrid에서 인증된 도메인이어야 함)
    to: process.env.TO_EMAIL, // 수신자 이메일 주소
    replyTo: email, // 사용자의 이메일을 답장 주소로 설정
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}