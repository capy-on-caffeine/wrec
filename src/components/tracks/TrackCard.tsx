import Image from "next/image";
import React from "react";

interface TrackCardProps {
  name: string;
  img: string;
}

const TrackCard = ({ name, img }: TrackCardProps) => {
  return (
    <div className="relative w-5/12 h-2/5 bg-[#ff95b6] rounded-2xl flex items-center justify-between p-6 shadow-lg box-border">
      <div className="flex flex-col justify-center">
        <h3 className="text-[#110e0e] text-xl font-semibold font-['Avenir LT Std'] tracking-wide mb-4">
          {name}
        </h3>
        <button className="bg-white text-black text-base font-medium font-['Avenir LT Std'] tracking-wider px-4 py-2 rounded-md hover:bg-gray-200 transition w-max">
          Learn more
        </button>
      </div>
      
      <div className="p-10 bg-white rounded-xl shadow-md">
        <Image alt={`Track image for ${name}`} height={100} width={100} src={img} className="object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default TrackCard;
