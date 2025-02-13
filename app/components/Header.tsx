'use client'; // Add this directive at the top

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo (My Next.js Blog) */}
        <Link href="/" className="text-3xl font-bold cursor-pointer mb-2 sm:mb-0">
          My Next.js Blog
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-4">
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
};

export default Header;
