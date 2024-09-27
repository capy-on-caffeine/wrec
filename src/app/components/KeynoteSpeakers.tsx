'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

interface Speaker {
  name: string;
  qualification: string;
  bio: string;
  imageUrl: string;
  twitter: string;
  linkedin: string;
  website: string;
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
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-pink-800 space-x-4">
            <a
              href={speaker.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass(speaker.twitter)}
            >
              <FaTwitter className="inline-block text-2xl" />
            </a>
            <a
              href={speaker.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass(speaker.linkedin)}
            >
              <FaLinkedin className="inline-block text-2xl" />
            </a>
            <a
              href={speaker.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass(speaker.website)}
            >
              <FaGlobe className="inline-block text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-pink-800">{speaker.name}</h3>
        <p className="text-sm text-pink-600 mb-4">{speaker.qualification}</p>
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

const KeynoteSpeakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: "Dr. Nilmini Wickramasinghe",
      qualification: "Professor & Deputy Director, Iverson Health Innovation Research Institute, Swinburne University of Technology, Australia",
      bio: "Dr. Nilmini is a prominent researcher in healthcare innovation, particularly in digital health and its implementation in improving patient outcomes.",
      imageUrl: "/images/people/nilmini.jpg",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/nilmini-wickramasinghe-13834ab2/",
      website: ""
    },
    {
      name: "Dr. Gayatri Mehta",
      qualification: "Professor, Electrical Engineering Department, University of North Texas, USA",
      bio: "Dr. Mehta's research is focused on low-power VLSI design, EDA tools, and FPGA-based systems. She is recognized for her significant contributions to electronics and computer engineering.",
      imageUrl: "/images/people/gayatri.jpg",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/gayatri-mehta-64aa7411/",
      website: "https://engineering.unt.edu/electrical-engineering/faculty/gayatri-mehta"
    },
    {
      name: "Dr. Sri Devi Ravana",
      qualification: "Associate Professor, University of Malaya, Kuala Lumpur",
      bio: "Dr. Ravana is an expert in information retrieval systems and data mining. Her work has greatly influenced how large-scale data is processed and retrieved.",
      imageUrl: "/images/people/sridevi.jpeg",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/sdravana/",
      website: "https://umexpert.um.edu.my/sri-devi"
    }
  ];

  return (
    <section id='keynotespeakers' className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-12">
          Keynote Speakers
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

export default KeynoteSpeakers;
