"use client"
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";

interface TrackCardProps {
  name: string;
  img: string;
}

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  name: string
}

const Modal = ({ isOpen, onClose, name } : ModalProps) => {
  if (!isOpen) return null;

  const topics = [
    "Signal Processing Algorithms and Architecture",
    "Pattern Recognition and Object Tracking",
    "Biomedical Signal and Image Processing",
    "Design and Implementation of Signal Processing",
    "Signal Processing for Communication and Networking",
    "Soft Computing and its Applications to Signal Processing",
    "Signal processing for Smart Systems",
    "Human-Computer Interface",
    "Signal Processing for Cyber Security",
    "Signal Processing for Big Data",
    "Internet of things and RFID",
    "Digital and Multirate Signal Processing",
    "Audio/Speech and Language Processing",
    "Machine Learning and Deep Learning for Signal Processing"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{name} - Topics</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-gray-700">{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TrackCard = ({ name, img }: TrackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-5/12 h-2/5 bg-[#ff95b6] rounded-2xl flex items-center justify-between p-6 shadow-lg box-border z-0">
        <div className="flex flex-col justify-center">
          <h3 className="text-[#110e0e] text-xl font-semibold font-['Avenir LT Std'] tracking-wide mb-4">
            {name}
          </h3>
          <button 
            className="bg-white text-black text-base font-medium font-['Avenir LT Std'] tracking-wider px-4 py-2 rounded-md hover:bg-gray-200 transition w-max"
            onClick={() => setIsModalOpen(true)}
          >
            Learn more
          </button>
        </div>
        
        <div className="p-10 bg-white rounded-xl shadow-md">
          <Image alt={`Track image for ${name}`} height={100} width={100} src={img} className="object-cover rounded-lg" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} name={name} />
    </>
  );
};

export default TrackCard;