
import { ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import '../app/globals.css';
//ssr: false: 서버 사이드 렌더링 비활성화
// LoginButton 컴포넌트는 클라이언트 측에서만 로드
// 초기 서버 렌더링에 포함되지 않음
//https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading
// LoginButton: 주로 클라이언트 측 기능 
// SSR 비활성화 이점: 클라이언트에서만 필요한 컴포넌트, 서버 리소스 절약



const LoginButton = dynamic(() => import('../components/Login'), { ssr: false });

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
      </head>
      <body className="flex flex-col items-center pt-16 pb-16 bg-black text-white min-h-screen">
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white bg-opacity-10 p-4 backdrop-blur-lg shadow-md rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-xl m-0">My Blog</h1>
          <nav className="flex gap-4">
            <Link href="/" className="text-white no-underline p-2 rounded transition-colors hover:bg-gray-800">Home</Link>
            <Link href="/about" className="text-white no-underline p-2 rounded transition-colors hover:bg-gray-800">About</Link>
            <Link href="/projects" className="text-white no-underline p-2 rounded transition-colors hover:bg-gray-800">Projects</Link>
            <Link href="/contact" className="text-white no-underline p-2 rounded transition-colors hover:bg-gray-800">Contact</Link>
          </nav>
        </header>
        <main className="flex-1 w-full flex flex-col items-center pt-20">
          <div className="max-w-2xl w-full px-4">
            {children}
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center bg-white bg-opacity-10 p-4 backdrop-blur-lg shadow-md rounded-tl-3xl rounded-tr-3xl">
          <LoginButton /> {/* 동적 컴포넌트로 로드된 LoginButton */}
          <h1 className="text-xl m-0"></h1>
          <nav className="flex gap-4">
            <h1 className="text-xl m-0">
              <Link href="/contact" className="text-white no-underline p-2 rounded transition-colors">Contact</Link>
            </h1>
          </nav>
        </footer>
      </body>
    </html>
  );
}



//동적 컴포넌트 로딩:
// dynamic 함수로 LoginButton 컴포넌트 동적 로드
// 초기 페이지 로드 때 포함되지 않음
// 필요 시 클라이언트에서 로드 // 장점: 초기 로드 시간 번들 크기 감소
//허허허허 나는 잘 체감하지 못하겠네