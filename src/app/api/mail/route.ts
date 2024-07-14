import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// 계속 오류가 나는 이유 yarn add @types/nodemailer --dev -> 타입을 또 설치 헤야 한데

// POST 요청 처리 함수
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();  // 요청에서 이름, 이메일, 메시지 추출

  // 이메일 전송  Nodemailer 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail', // 이메일 서비스 제공자
    auth: {
      user: process.env.EMAIL_USER, // 환경 변수에서 이메일 사용자/ 비번 가져오기
      pass: process.env.EMAIL_PASS, 
    },
  });

  // 이메일 옵션 설정
  const mailOptions = {
    from: email, // 발신자 
    to: process.env.EMAIL_USER, // 수신자 
    subject: `Contact form submission from ${name}`, // 이메일 제목
    text: message, // 
  };

  try {
    // 이메일 전송 시도
    await transporter.sendMail(mailOptions);
    // 성공 시 응답 반환
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    // 실패 시 에러 메시지와 함께 응답 반환
    return NextResponse.json({ message: 'Sorry. Failed to send email Please try again', error: error.message }, { status: 500 });
  }
}
