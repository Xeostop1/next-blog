import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-8 mt-1">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold">
            Hello welcome
          </Link>
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
