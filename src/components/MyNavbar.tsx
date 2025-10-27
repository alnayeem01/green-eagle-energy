'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-2  left-5 shadow-2xl right-5 z-50 bg-gray-100  border-b border-white/20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold text-green-600 tracking-tight font-sans">
          Green Eagle Energy
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><Link href="/#home" className="hover:text-green-700 transition">Home</Link></li>
          <li><Link href="/#Services" className="hover:text-green-700 transition">Services</Link></li>
          <li><Link href="/#howItWorks" className="hover:text-green-700 transition">How it Works?</Link></li>
          <li><Link href="/#FAQ" className="hover:text-green-700 transition">FAQ</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden   border-t border-white/20">
          <ul className="flex flex-col space-y-4 p-4 text-black font-medium">
            <li><Link href="/#home" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</Link></li>
            <li><Link href="/#Services" onClick={() => setIsOpen(false)} className="hover:text-green-600">Services</Link></li>
            <li><Link href="/#howItWorks" onClick={() => setIsOpen(false)} className="hover:text-green-600">How it Works?</Link></li>
            <li><Link href="/#FAQ" onClick={() => setIsOpen(false)} className="hover:text-green-600">FAQ</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
