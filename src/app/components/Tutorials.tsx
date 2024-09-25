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
          className="absolute inset-0 flex items-center justify-center bg-pink-200 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-pink-800 space-x-4">
            <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaTwitter className="inline-block text-2xl" />
            </a>
            <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaLinkedin className="inline-block text-2xl" />
            </a>
            <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
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

const Tutorials: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: "Dr. Sarah Johnson",
      qualification: "Ph.D. in Computer Science, MIT",
      bio: "Dr. Johnson is a renowned expert in AI and machine learning, with over 15 years of experience in developing cutting-edge algorithms for autonomous systems.",
      imageUrl: "/images/sarah-johnson.jpg",
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      website: "https://sarahjohnson.com"
    },
    {
      name: "Prof. Michael Chen",
      qualification: "Professor of Robotics, Stanford University",
      bio: "Prof. Chen's groundbreaking work in human-robot interaction has revolutionized the field of collaborative robotics, earning him numerous accolades.",
      imageUrl: "/images/michael-chen.jpg",
      twitter: "https://twitter.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
      website: "https://michaelchen.edu"
    },
    {
      name: "Emma Rodriguez",
      qualification: "CTO, FutureTech Industries",
      bio: "Emma is a visionary tech leader, driving innovation in IoT and smart city technologies. Her work has been instrumental in shaping sustainable urban environments.",
      imageUrl: "/images/emma-rodriguez.jpg",
      twitter: "https://twitter.com/emmarodriguez",
      linkedin: "https://linkedin.com/in/emmarodriguez",
      website: "https://emmarodriguez.io"
    }
  ];

  return (
    <section id='tutorials' className="bg-gradient-to-br from-pink-100 to-pink-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-pink-800 mb-12">
          Our <span className="text-pink-600">Keynote Speakers</span>
        </h2>
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
    </section>
  );
};

export default Tutorials;