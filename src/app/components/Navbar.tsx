'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">
            {`WREC'`}<span className='text-pink-500'>25</span>
          </span>
        </a>

        <button
          className="block md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`md:flex md:items-center md:justify-end md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {['KEYNOTE SPEAKERS', 'ABOUT US', 'DATES', 'TRACKS', 'COMMITTEE', 'SCHEDULE', 'FOR AUTHORS', 'CONTACT'].map((item, index) => (
              <li key={index}>
                <a 
                  href={`/#${item.toLowerCase().replace(' ', '')}`} 
                  className="relative group py-2 px-1 transition-all duration-300 ease-in-out hover:text-blue-500"
                >
                  <span className="relative z-10 transform group-hover:scale-110 inline-block transition-transform duration-300 ease-in-out">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;