'use client'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-2  left-5 right-5 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold text-green-600 tracking-tight font-sans">
          Green Eagle Energy
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-green-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-300 transition">About</a></li>
          <li><a href="#projects" className="hover:text-green-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-300 transition">Contact</a></li>
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
        <div className="md:hidden backdrop-blur-lg bg-white/10 border-t border-white/20">
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
