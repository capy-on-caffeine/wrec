import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-4 ml-4 lg:ml-20 z-10 flex flex-col lg:flex-row gap-8 items-center my-2">
        <div className="flex-grow">
          <div className="animate-fade-in-up">
            <h2 className="text-gray-800 mb-4">
              <span className="bg-pink-200 rounded-md text-lg font-bold px-3 py-2 mb-2">
                3rd International Conference
              </span>
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
              Women Researchers in
              <br />
              Electronics and Computing
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 mb-6">
              on sustainable development goals
            </h2>
            <div>
              <p className="text-gray-500 mb-2">Presented by</p>
              <p className="text-gray-800">
                Department of Electronics and Communication Engineering and
                Department of Computer Science and Engineering
              </p>
            </div>
            <p className="text-gray-800 mb-8">
              Dr B R Ambedkar National Institute of Technology, Jalandhar,
              Punjab, India
            </p>
            <div className="flex justify-start space-x-4">
              <button className="bg-gray-800 text-white text-lg px-6 py-2 rounded-md transition-transform hover:scale-105 active:scale-95">
                Register
              </button>
              <a href="https://cmt3.research.microsoft.com/WREC2025/Submission/Index" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-lg text-gray-800 px-6 py-2 rounded-md border border-gray-800 transition-transform hover:scale-105 active:scale-95">
                  Submit Here
                </button>
              </a>

            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-100 lg:w-96 mx-auto lg:ml-10 flex flex-col gap-4 items-center">
          {/* Date Card */}
          <div className="bg-white shadow-lg rounded-lg px-6 lg:py-12 py-6 border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Conference Date
              </h3>
              <div className="text-2xl font-bold text-pink-600">
                18 - 20 April, 2025
              </div>
            </div>
          </div>
          {/* springer card */}
          <div className="w-[90%] max-w-full mx-auto my-2 bg-[#F4F8FC] rounded-xl shadow-lg p-4 text-center font-sans">
            <div className="mt-4 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-[#0D47A1] mb-3 text-center">
                Proceedings Publication
              </h1>
              <Image
                src="/LNEE.jpg"
                alt="Proceedings Publication"
                width={200}
                height={150}
                priority
                className="w-[60%] max-w-[200px] rounded-lg shadow-md"
              />
              <p className="text-lg font-bold text-[#D32F2F] mt-3 text-center">
                SCOPUS Indexed Springer Book Series, &quot;Lecture Notes in Electrical Engineering&quot;
              </p>
            </div>
          </div>
          {/* springer card */}
        </div>
      </div>

      {/* Background elements */}
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
      className="absolute top-0 right-0 h-full w-1/2 text-gray-200 opacity-20 animate-spin-slow"
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
