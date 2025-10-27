'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-2  left-5 right-5 z-50 bg-green-300  border-b border-white/20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold text-green-600 tracking-tight font-sans">
          Green Eagle Energy
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link href="/#home" className="hover:text-black transition">Home</Link></li>
          <li><Link href="/#Services" className="hover:text-black transition">Services</Link></li>
          <li><Link href="/#howItWorks" className="hover:text-black transition">How it Works?</Link></li>
          <li><Link href="/#FAQ" className="hover:text-black transition">FAQ</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden  bg-white/10 border-t border-white/20">
          <ul className="flex flex-col space-y-4 p-4 text-white font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-green-300">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-green-300">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-green-300">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-green-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
