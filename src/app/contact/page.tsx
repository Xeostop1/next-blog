'use client'

import { useRef } from 'react';

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