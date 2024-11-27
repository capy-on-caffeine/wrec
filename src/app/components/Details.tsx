import React from "react";

const Details = () => {
  const data = {
    lastDate: "20 Feb, 2025",
    initiationDaccept: "25 Mar, 2025",
    coursesReady: "31 Mar, 2025",
    lastAndReg: "8 Apr, 2025",
  };

  return (
    <div
      id="tracks"
      className="w-full min-h-screen bg-white flex flex-col justify-start items-center"
    >
      <h1 className="text-3xl w-full text-center lg:text-4xl mt-20 mb-10">DETAILS ABOUT THE CONFERENCE</h1>
      <div className="w-5/6 h-3/5 flex justify-center items-start flex-wrap gap-10">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
            <h2 className="text-center w-full text-xl font-bold">Fee for the conference</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">External Students:</h3>
            <p className="text-gray-700">Rs. 3000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">Internal Faculty</h3>
            <p className="text-gray-700">Rs. 4000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">External Faculty</h3>
            <p className="text-gray-700">Rs. 5000 + GST</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Foreign authors
            </h3>
            <p className="text-gray-700">$100</p>
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10 flex flex-col gap-4">
        <h2 className="text-center w-full text-xl font-bold">Important dates</h2>
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
              Camera ready/registration
            </h3>
            <p className="text-gray-700">{data.coursesReady}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium text-pink-500">
              Last date of registration
            </h3>
            <p className="text-gray-700">{data.lastAndReg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
