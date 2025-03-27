"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "ABOUT", id: "about" },
  { label: "AUTHOR GUIDELINES", id: "authorguidelines" },
  { label: "KEYNOTE SPEAKERS", id: "keynotespeakers" },
  { label: "TRACKS", id: "tracks" },
  { label: "SCHEDULE", id: "schedule" },
  { label: "COMMITTEE", id: "committee" },
  { label: "CONTACT", id: "contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav 
      id="navbar"
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section - Visible on both mobile and desktop */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo.jpeg" 
            alt="Logo" 
            width={46} 
            height={46} 
            className="rounded-full"
          />
          <div className="flex items-center space-x-2">
            <Image 
              src="/springer.png" 
              alt="Springer" 
              width={140} 
              height={40} 
              className="hidden md:block"
            />
            <div className="flex items-center">
              <span className="text-lg md:text-xl font-bold text-gray-800">WREC&apos;</span>
              <span className="text-lg md:text-xl font-bold text-pink-500">25</span>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`
          fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:transform-none md:block md:bg-transparent
          flex flex-col
        `}>
          {/* Mobile Header with Logo and Close Button */}
          <div className="md:hidden flex justify-between items-center p-4 border-b">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.jpeg" 
                alt="Logo" 
                width={46} 
                height={46} 
                className="rounded-full"
              />
              <div className="flex items-center space-x-2">
                <Image 
                  src="/springer.png" 
                  alt="Springer" 
                  width={140} 
                  height={40} 
                />
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">WREC&apos;</span>
                  <span className="text-lg font-bold text-pink-500">25</span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-col items-center justify-center space-y-6 mt-8 md:mt-0 md:space-y-0 md:flex-row md:space-x-4 h-full">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="text-center w-full md:w-auto">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    text-gray-700 hover:text-pink-500 
                    font-medium text-lg md:text-base 
                    transition-colors duration-300 
                    relative group w-full md:w-auto
                    py-2 md:py-1
                  "
                >
                  <span className="relative">
                    {item.label}
                    <span className="
                      absolute bottom-0 left-0 w-full h-0.5 
                      bg-pink-500 scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-300 origin-left
                    "></span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;