"use client";

import { useRef } from "react";

type SubmitFormFunction = (formData: FormData) => Promise<{ success: boolean; message: string }>;

interface ContactFormProps {
  submitForm: SubmitFormFunction;
}

export default function ContactForm({ submitForm }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={submitForm} ref={formRef} className="w-full max-w-md">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 h-32"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>
  );
}

// 리액트의 라이프사이클(생명주기) 에 대해서 찾아보기
// usestate -> 언제 랜더링되는 것들 useRef
// 엑시오스 사용 / 주스탠다드(프롭스 드릴링에 대한 꼬임방지) /리듀서 / 리코일
// 서버에서 먼저 불러오는 작업들을 생각해 보자
