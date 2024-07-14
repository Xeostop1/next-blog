'use client';

import { useState } from 'react'; 

const ContactForm = () => {
  // 상태 선언
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [status, setStatus] = useState(''); 

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    // API 요청 보내기
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }), // 폼 데이터 JSON 형식으로 변환
    });

    const result = await response.json(); // 응답 결과 JSON으로 파싱

    if (response.status === 200) {
      setStatus('Email sent successfully'); // 이메일 전송 성공 메시지
    } else {
      setStatus(`Failed to send email: ${result.message}`); // 이메일 전송 실패 메시지
    }
  };

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Contact Us</h1> {/* 폼 제목 */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}    //useState 사용
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
        {status && <p className="mt-4">{status}</p>} {/* 상태 메시지 표시 */}
      </form>
    </div>
  );
};

export default ContactForm;
