import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Nodemailer 전송 설정
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, //.env.local 사용
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // 발신자 이메일
    to: "11requiem27@gmail.com",
    replyTo: email, // 사용자의 이메일을 답장 주소로 설정
    subject: `홈페이지 문의사항 ${name}`,
    text: `이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "이메일이 성공적으로 전송되었습니다." }, { status: 200 });
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    return NextResponse.json(
      { message: "이메일 전송에 실패했습니다.", error: error },
      { status: 500 }
    );
  }
}

// 리퀘스트와 리스폰스를 각자의 서비스로 만들기
// 리스폰스 받아서 다시 보여주는 것도 클라이언트 -> {res:ok} 성공
// 배너로 만들기(사용자에게 보여주는 정보 usestate) :클라
// error 핸드링 하기  여기는 서버

//모든 서버 종료 killall node
