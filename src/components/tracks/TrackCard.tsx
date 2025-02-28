"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../utils/Modal";

interface TrackCardProps {
  name: string;
  img: string;
  chair: string;
  topics: string[];
}

const TrackCard = ({ name, img, chair, topics }: TrackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-11/12 lg:w-[28%] h-auto bg-gradient-to-br from-[#ff95b6] to-[#ff7c98] rounded-2xl flex flex-col items-center p-6 shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">

        {/* Heading */}
        <h3 className="text-[#110e0e] text-xl font-bold font-['Avenir LT Std'] tracking-wide mb-4 text-center">
          {name}
        </h3>

        {/* Image */}
        <div className="w-24 h-24 bg-white rounded-xl shadow-md border-2 border-gray-200 flex items-center justify-center p-2 mb-4">
          <Image
            alt={`Track image for ${name}`}
            height={100}
            width={100}
            src={img}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Learn More Button */}
        <button
          className="bg-gradient-to-r from-white to-gray-100 text-black text-base font-bold tracking-wide px-5 py-2 
             rounded-lg transition-all duration-300 ease-in-out shadow-md 
             hover:from-[#ff95b6] hover:to-[#ff7c98] hover:text-white 
             hover:scale-105 hover:shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Learn More
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        chair={chair}
        topics={topics}
      />
    </>
  );
};

export default TrackCard;
