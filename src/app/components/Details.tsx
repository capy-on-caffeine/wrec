"use client";

import Link from "next/link";
import React from "react";

const Details = () => {
  const data = {
    lastDate: "20 February, 2025",
    initiationDaccept: "25 March, 2025",
    coursesReady: "31 March, 2025",
    lastAndReg: "8 April, 2025",
    conf: "18-20 April, 2025",
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="details"
      className="w-full min-h-screen bg-white flex flex-col justify-start items-center"
    >
      <h1 className="text-3xl w-full text-center lg:text-4xl mt-20 mb-10">
        DETAILS ABOUT THE CONFERENCE
      </h1>
      <div className="w-5/6 h-3/5 flex justify-center items-start flex-wrap gap-10">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
          <h2 className="text-center w-full text-xl font-bold">
            Fee for the conference
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Students:</h3>
            <p className="text-gray-700">Rs. 3000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Students from NIT Jalandhar:
            </h3>
            <p className="text-gray-700">Rs. 3000</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Faculty:</h3>
            <p className="text-gray-700">Rs. 4000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Faculty from NIT Jalandhar:
            </h3>
            <p className="text-gray-700">Rs. 4000</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Industry Experts:
            </h3>
            <p className="text-gray-700">Rs. 5000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Foreign authors
            </h3>
            <p className="text-gray-700">USD 100</p>
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
          <h2 className="text-center w-full text-xl font-bold">
            Important dates
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Last date for paper submission
            </h3>
            <p className="text-gray-700">{data.lastDate}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Intimation of acceptance
            </h3>
            <p className="text-gray-700">{data.initiationDaccept}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Camera ready & registration
            </h3>
            <p className="text-gray-700">{data.coursesReady}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Last date of registration
            </h3>
            <p className="text-gray-700">{data.lastAndReg}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Date of Conference
            </h3>
            <p className="text-gray-700">{data.conf}</p>
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto mt-10 flex flex-col gap-4">
          <h2 className="text-center w-full text-xl font-bold">
            Submission guidelines
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Submission Platform
            </h3>
            <p className="text-gray-700">
              All submissions must be made via our official submission platform.
              A placeholder for the submission link is provided below:
              <br />
              <a href="#" className="text-blue-500 cursor-pointer">
                Submit Your Paper Here
              </a>
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Author Guidelines
            </h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>
                Submissions should strictly follow the WREC 2024 Paper Template
                (available for download{" "}
                <a
                  href="#"
                  className="cursor-pointer text-blue-500 hover:text-blue-600"
                >
                  here
                </a>
                ).
              </li>
              <li>
                Papers must be written in English and should not exceed 8 pages,
                including references, figures, and appendices.
              </li>
              <li>
                All submissions will undergo a double-blind peer review process.
                Ensure that authors' identities are anonymized in the
                manuscript.
              </li>
            </ol>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Categories</h3>
            <p className="text-gray-700">
              We accept submissions under the tracks given in the
              <span
                className="relative group py-2 px-1 transition-all duration-300 ease-in-out cursor-pointer text-blue-500 hover:text-blue-600"
                onClick={() => scrollToSection("tracks")}
              >
                tracks section.
              </span>
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Originality</h3>
            <p className="text-gray-700">
              Papers must be original and unpublished. Simultaneous submissions
              to other conferences or journals are strictly prohibited. Authors
              may submit additional files (e.g., datasets, code) alongside the
              paper, if relevant.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Formatting</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Accepted formats: PDF</li>
              <li>Font: Times New Roman, 10pt</li>
              <li>References: IEEE style</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
