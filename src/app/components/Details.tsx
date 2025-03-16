"use client";

import React from "react";

const Details = () => {
  // Define the data type explicitly
  const data = {
    lastDate: "25 March, 2025",
    initiationAccept: "31 March, 2025",
    coursesReady: "5th April, 2025",
    lastAndReg: "8 April, 2025",
    conf: "18-20 April, 2025",
  };

  // Smooth scrolling function
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div id="details" className="w-full min-h-screen bg-white flex flex-col justify-start items-center">
      <h1 className="text-3xl w-full text-center lg:text-4xl mt-20 mb-10">
        DETAILS ABOUT THE CONFERENCE
      </h1>

      <div className="w-5/6 h-3/5 flex justify-center items-start flex-wrap gap-10">
        {/* Fee Details Section */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
          <h2 className="text-center w-full text-xl font-bold">Fee for the conference</h2>
          {[
            { title: "Students", price: "Rs. 3000 + GST" },
            { title: "Students from NIT Jalandhar", price: "Rs. 3000" },
            { title: "Faculty", price: "Rs. 4000 + GST" },
            { title: "Faculty from NIT Jalandhar", price: "Rs. 4000" },
            { title: "Industry Experts", price: "Rs. 5000 + GST" },
            { title: "Foreign authors", price: "USD 150" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-medium text-pink-500">{item.title}:</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Important Dates Section */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
          <h2 className="text-center w-full text-xl font-bold">Important dates</h2>
          {[
            { title: "Last date for paper submission", date: data.lastDate },
            { title: "Intimation of acceptance", date: data.initiationAccept },
            { title: "Camera ready & registration", date: data.coursesReady },
            { title: "Last date of registration", date: data.lastAndReg },
            { title: "Date of Conference", date: data.conf },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-medium text-pink-500">{item.title}</h3>
              <p className="text-gray-700">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;