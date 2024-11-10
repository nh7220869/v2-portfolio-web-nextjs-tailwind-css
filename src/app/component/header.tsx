"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  if (!isMounted) return null;

  return (
    <header className="lg:flex p-4 lg:p-0 shadow-md md:block mt-5 bg-[#507687]">
      <div className="flex justify-center lg:justify-start items-center w-full lg:w-auto p-4">
        <Image
          src="/NOOR US SEHER.png"
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto lg:ml-16 rounded-full border-2 border-black"
        />
        <h1 className="font-bold text-3xl font-mono decoration-wavy text-center ml-10">
          Noor us seher
        </h1>
        <button
          onClick={toggleMenu}
          className=" dark:text-white focus:outline-none lg:hidden ml-auto text-yellow-50"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 transition-all duration-300 ease-in-out">
          <ul className="space-y-2 text-center text-sm">
            <li><Link href="/" className="block  dark:text-white py-2 hover:text-[#384B70] hover:bg-[#AEE4FF]">Home</Link></li>
            <li><Link href="/project" className="block  dark:text-white py-2 hover:bg-[#AEE4FF] hover:text-[#384B70]">Project</Link></li>
            <li><Link href="/about" className="block  dark:text-white py-2 hover:bg-[#AEE4FF] hover:text-[#384B70]">About</Link></li>
            <li><Link href="/contact" className="block  dark:text-white py-2 hover:bg-[#AEE4FF] hover:text-[#384B70]">Contact</Link></li>
          </ul>
        </div>
      )}

      {/* Desktop menu */}
      <nav className="hidden lg:flex lg:items-center ml-28 lg:space-x-6 text-white">
        <Link href="/" className="block hover:bg-[#AEE4FF]  dark:text-white px-2 py-1 hover:text-[#384B70]">Home</Link>
        <Link href="/about" className="block hover:bg-[#AEE4FF] dark:text-white px-2 py-1 hover:text-[#384B70]">About</Link>
        <Link href="/project" className="block hover:bg-[#AEE4FF] dark:text-white px-2 py-1 hover:text-[#384B70]">Project</Link>
        <Link href="/contact" className="block hover:bg-[#AEE4FF] dark:text-white px-2 py-1 hover:text-[#384B70]">Contact</Link>
      </nav>
    </header>
  );
}
