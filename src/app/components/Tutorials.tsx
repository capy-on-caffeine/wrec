'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

interface Speaker {
  name: string;
  bio: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIconClass = (link: string) =>
    link ? "text-pink-600" : "text-gray-400 pointer-events-none";

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={speaker.imageUrl}
          alt={speaker.name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 filter hover:brightness-75"
        />

      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-pink-800">{speaker.name}</h3>
        {/* <p className="text-sm text-pink-600 mb-4">{speaker.qualification}</p> */}
        <p className="text-pink-700 mb-4">{speaker.bio}</p>
        <motion.button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Tutorials: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: "Topic 1",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae non ridiculus congue nibh convallis urna taciti senectus curae. Mollis phasellus consectetur nulla nullam blandit senectus.",
      imageUrl: "/images/placeholder.png"
    },
    {
      name: "Topic 2",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae non ridiculus congue nibh convallis urna taciti senectus curae. Mollis phasellus consectetur nulla nullam blandit senectus.",
      imageUrl: "/images/placeholder.png"
    },
    {
      name: "Topic 3",
      bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curae non ridiculus congue nibh convallis urna taciti senectus curae. Mollis phasellus consectetur nulla nullam blandit senectus.",
      imageUrl: "/images/placeholder.png"
    },
  ];

  return (
    <section id='tutorials' className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-12">
          Tutorials
        </h2>
        <div className='w-4/5 flex justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
