import React, { FC } from 'react';
import Image from 'next/image';

const Announcements: FC = () => {
  return (
    <div className="w-[90%] max-w-full mx-auto my-2 bg-[#F4F8FC] rounded-xl shadow-lg p-4 text-center font-sans">
      <div className="mt-6 flex flex-col items-center justify-center">
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
  );
};

export default Announcements;
