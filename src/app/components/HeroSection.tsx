import React from "react";
import Image from "next/image";
import Marquee from "./Marquee";

const HeroSection = () => {
  return (
    <div 
      id="hero"
      className="bg-pink-50 min-h-full flex flex-col items-center justify-center relative overflow-hidden pt-20 md:pt-24 pb-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 z-10 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="animate-fade-in-up">
            <div className="mb-4">
              <span className="bg-pink-200 rounded-md text-sm md:text-base font-bold px-3 py-2 inline-block mb-4">
                3rd International Conference
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Women Researchers in
              <br />
              Electronics and Computing
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 mb-6">
              on sustainable development goals
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-500 mb-2 text-base">Presented by</p>
              <p className="text-gray-800 text-sm sm:text-base">
                Department of Electronics and Communication Engineering and
                Department of Computer Science and Engineering
              </p>
              <p className="text-gray-800 text-sm sm:text-base mt-2">
                Dr B R Ambedkar National Institute of Technology, Jalandhar,
                Punjab, India
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-4">
            <a 
                href="https://www.nitj.ac.in/events_registration/ic_wrec_2025/login" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <button className="bg-gray-800 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md transition-transform hover:scale-105 active:scale-95">
                Register
              </button>
              </a>
              {/* <a 
                href="https://cmt3.research.microsoft.com/WREC2025/Submission/Index" 
                target="_blank" 
                rel="noopener noreferrer"
              > */}
                <button className="bg-white text-sm sm:text-base text-gray-800 px-4 sm:px-6 py-2 rounded-md border border-gray-800 transition-transform hover:scale-105 active:scale-95">
                  Submissions Closed !!
                </button>
              {/* </a> */}
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-1/2 max-w-md space-y-4">
          {/* Date Card */}
          <div className="bg-white shadow-lg rounded-lg px-4 py-5 border border-gray-100">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Conference Date
              </h3>
              <div className="text-xl sm:text-2xl font-bold text-pink-600">
                18 - 20 April, 2025
              </div>
            </div>
          </div>
          
          {/* Springer Card */}
          <div className="bg-[#F4F8FC] rounded-xl shadow-lg p-5 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#0D47A1] mb-4">
              Proceedings Publication
            </h1>
            <div className="flex justify-center mb-4">
              <Image
                src="/LNEE.jpg"
                alt="Proceedings Publication"
                width={185}
                height={130}
                priority
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            <p className="text-base sm:text-lg font-bold text-[#D32F2F]">
              <span className="text-[#423d3d]">
                SCOPUS Indexed Springer Book Series,
              </span>
              <br />
              &quot;Lecture Notes in Electrical Engineering&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Background Circuit Element */}
      <CircuitBackground />

      {/* Marquee at the bottom */}
      <div className="relative bottom-0 left-0 w-full z-20 mt-5 mb-0">
        <Marquee />
      </div>
    </div>
  );
};

const CircuitBackground = () => {
  return (
    <svg
      className="absolute top-0 right-0 h-full w-1/2 text-gray-200 opacity-20 animate-spin-slow hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path
        d="M0 0 L100 0 L100 100 L0 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {[...Array(10)].map((_, i) => (
        <path
          key={i}
          d={`M${10 * i} 0 L${10 * i} 100`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="animate-draw-line"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <path
          key={i + 10}
          d={`M0 ${10 * i} L100 ${10 * i}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="animate-draw-line"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  );
};

export default HeroSection;