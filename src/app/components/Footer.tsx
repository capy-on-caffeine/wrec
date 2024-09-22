import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Logo Section */}
          <div className="mb-4">
            <img src="/logo.jpeg" alt="WREC Logo" className="h-32 w-32 mb-2" />
          </div>
          {/* Conference Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">
              WREC'<span className="text-pink-500">25</span>
            </h2>
            <p className="text-lg font-semibold mt-2">Women Researchers in Electronics and Computing</p>
            <p className="text-gray-500 mt-1">Department of Electronics and Communication Engineering</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 relative">
          {/* Dark Pink Blob */}
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] -z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF69B4" // Changed to dark pink color
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
              Punjab, India - 144011
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Phone:</strong> +91 98886 04632
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> wrec@nitj.ac.in
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-end mt-6 space-x-4 relative z-10">
            <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-pink-500">
                <img src="/Instagram.png" alt="insta"></img>
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" aria-label="Twitter"  className="text-gray-700 hover:text-pink-500">
                <img src="/Twitter.png" alt="twitter"></img>
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;