import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-between relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:w-full lg:justify-between">
          {/* Logo Section */}
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <Image src="/logo.jpeg" alt="WREC Logo" width={128} height={128} className="mb-2" />
            </div>
            {/* Conference Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold">
                WREC&apos;<span className="lg:text-pink-500 text-white">25</span>
              </h2>
              <p className="text-lg font-semibold mt-2">
                Women Researchers in Electronics and Computing
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 lg:mt-0 relative">
            {/* Dark Pink Blob */}
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600%] h-[600%] -z-10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF69B4"
                d="M47.5,-51.1C59.8,-36.6,67.2,-18.3,66.1,-1.1C65,16.1,55.4,32.2,43.1,44.8C30.8,57.4,15.4,66.6,-1.9,68.5C-19.2,70.4,-38.3,65,-51.8,52.5C-65.3,39.9,-73.1,20,-72.7,0.5C-72.2,-19,-63.4,-37.9,-49.9,-52.4C-36.4,-66.8,-18.2,-76.8,0,-76.8C18.3,-76.8,36.6,-66.8,47.5,-51.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <div className="text-center lg:text-right relative z-10">
              <h3 className="text-lg font-bold mb-2">Address:</h3>
              <p className="text-gray-700">
                Dr B R Ambedkar National Institute of Technology
                <br />
                G.T. Road, Amritsar Bypass, Jalandhar
                <br />
                Punjab, India - 144008
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> wrec@nitj.ac.in
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end mt-6 space-x-4 relative z-10">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-700 hover:text-pink-500"
              >
                <Image src="/Instagram.png" alt="Instagram" width={32} height={32} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-700 hover:text-pink-500"
              >
                <Image src="/Twitter.png" alt="Twitter" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Sponsors Section */}
        <div className="mt-12 w-full">
          {/* <h3 className="text-xl font-bold text-center mb-6">Our Sponsors</h3> */}
          <div className="flex flex-wrap justify-end gap-8 lg:gap-16">
            <div className="sponsor-item flex flex-col items-center">
              <div className="relative w-32 h-32 mb-2">
                <Image 
                  src="/canara.png" 
                  alt="Sponsor 1" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-lg shadow-sm"
                />
              </div>
              {/* <p className="font-medium text-gray-700">Tech Innovations</p> */}
            </div>
            
            <div className="sponsor-item flex flex-col items-center">
              <div className="relative w-32 h-32 mb-2">
                <Image 
                  src="/Agmatel.png" 
                  alt="Sponsor 2" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-lg shadow-sm"
                />
              </div>
              {/* <p className="font-medium text-gray-700">Digital Solutions</p> */}
            </div>
            
            <div className="sponsor-item flex flex-col items-center">
              <div className="relative w-32 h-32 mb-2">
                <Image 
                  src="/Silicon.png" 
                  alt="Sponsor 3" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-lg shadow-sm"
                />
              </div>
              {/* <p className="font-medium text-gray-700">Next Computing</p> */}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-gray-600 text-sm w-full">
          © {new Date().getFullYear()} WREC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;