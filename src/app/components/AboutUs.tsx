'use client'
import React from 'react';
import { motion } from 'framer-motion'; // Assuming you use framer-motion for animations

const AboutUs = () => {
  return (
    <div id='aboutus' className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-pink-500 underline">ABOUT</span> US
        </motion.h2>
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center mb-8">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/5 mb-8 lg:mb-0 lg:mr-16 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/Frame 15.png" // Update this path with the correct image URL
              alt="Woman in Science" 
              className="w-full h-auto rounded object-cover items-center" 
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-4 text-gray-700">
              Though women are underrepresented in engineering, the number has been growing consistently as more women are opting to pursue studies in this field. There is still a lot to be done to encourage this trend. We would like to dedicate this conference to promoting and encouraging women engineers and motivating young girls to follow their academic interests to a career in engineering.
            </p>
            <p className="mb-4 text-gray-700">
              To inspire women engineers, successful women pioneers in the fields of VLSI design, wireless sensor networks, communication, image/signal processing, machine learning, and emerging technologies have been identified globally and invited to present their work and address the participants in this women-oriented conference.
            </p>
            <p className="text-gray-700">
              All the keynote speakers, tutorial presenters, session chairs, and members of the organizing team are women.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
