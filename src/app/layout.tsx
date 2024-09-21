import { ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import '../app/globals.css';
import Header from '../components/header'; 
import Footer from '../components/footer'; 

//함수에서 바로 사용할 수 있도록 변경
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
      </head>
      <body className="flex flex-col items-center pt-16 pb-16 bg-black text-white min-h-screen">
        <Header />
        <main className="flex-1 w-full flex flex-col items-center pt-20">
          <div className="max-w-2xl w-full px-4">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
