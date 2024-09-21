import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Store</h1>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-black">Products</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
