import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 shadow-md">
    <div className="flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold cursor-pointer">
        My Next.js Blog
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-lg hover:text-gray-400">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
