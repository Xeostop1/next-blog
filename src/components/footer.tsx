import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              If you want to work with me,
              <br /> please send me an e-mail
            </h3>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:underline">
                  QNA (chatbot)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm">&copy; 2024 hanaSeo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
