import Link from 'next/link';

export default function header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Hello my world</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="text-black hover:text-primary">Home</Link>
          <Link href="/projects" className="text-black hover:text-primary">Projects</Link>
          <Link href="/contact" className="text-black hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
