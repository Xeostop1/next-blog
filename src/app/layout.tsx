import { ReactNode } from 'react';
import Link from 'next/link';
import '../app/globals.css';

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
        <main className="flex-1 w-full flex flex-col items-center pt-20 bg-black text-white">
          <div className="max-w-2xl w-full px-4">
            {children}
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center bg-white bg-opacity-10 p-4 backdrop-blur-lg shadow-md rounded-tl-2xl rounded-tr-2xl">
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
