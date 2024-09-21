import Link from 'next/link';

export default function footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Store. All rights reserved.</p>
          <nav className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </footer>
    );
  }
  