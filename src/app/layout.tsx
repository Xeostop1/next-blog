import './globals.css'; // Tailwind CSS 글로벌 스타일 적용
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
      </head>
      <body className="bg-black text-white min-h-screen">
        <header className="fixed top-0 left-0 w-full z-50 flex justify-end items-center bg-white bg-opacity-10 p-4 backdrop-blur-lg shadow-md border-b border-opacity-20">
          <nav className="flex gap-4 mr-8">
            <Link href="/" className="text-white no-underline hover:underline">Home</Link>
            <Link href="/about" className="text-white no-underline hover:underline">About</Link>
            <Link href="/projects" className="text-white no-underline hover:underline">Projects</Link>
            <Link href="/contact" className="text-white no-underline hover:underline">Contact</Link>
          </nav>
        </header>
        <main className="pt-24 pb-16 mt-16">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center bg-white bg-opacity-10 p-4 backdrop-blur-lg shadow-md border-t border-opacity-20">
          <nav className="flex gap-4 ml-8">
            <Link href="/" className="text-white no-underline hover:underline">Home</Link>
            <Link href="/about" className="text-white no-underline hover:underline">About</Link>
            <Link href="/projects" className="text-white no-underline hover:underline">Projects</Link>
            <Link href="/contact" className="text-white no-underline hover:underline">Contact</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
