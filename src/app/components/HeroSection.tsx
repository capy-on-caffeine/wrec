import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-pink-50 h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-gray-600 mb-2">
            <span className="bg-pink-200 rounded-md px-2 py-1">
              2nd International Conference
            </span>
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Women Researchers in<br />Electronics and Computing
          </h1>
          <p className="text-gray-600 mb-6">Presented by</p>
          <p className="text-gray-800 mb-2">
            Department of Electronics and Communication Engineering
          </p>
          <p className="text-gray-800 mb-8">
            Dr BR Ambedkar National Institute of Technology, Jalandhar, Punjab, India
          </p>
          <div className="flex justify-start space-x-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md transition-transform hover:scale-105 active:scale-95">
              Register
            </button>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md border border-gray-800 transition-transform hover:scale-105 active:scale-95">
              Sponsored By
            </button>
          </div>
        </div>
      </div>
      {/* Move the background image to the right side */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/Group.png')` }}
      />
      <CircuitBackground />
    </div>
  );
};

const CircuitBackground = () => {
  return (
    <svg
      className="absolute top-0 right-0 h-full w-1/2 text-gray-200 opacity-20"
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
