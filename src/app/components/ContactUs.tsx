"use client";  // Add this line at the top

import React, { useState } from 'react';

const ContactUs = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null); // manage success/error message

  // Handle form submission (You can integrate with an actual backend)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mock submission handling
    if (name && email && message) {
      console.log('Form Data:', { name, email, message });
      setFormStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div id='contact' className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/Frame 21.png"  // Update with your image paths
              alt="Contact Image 1"
              className="rounded-lg w-2/3 h-full"
            />
            <img
              src="/Frame 22.png"
              alt="Contact Image 2"
              className="rounded-lg w-2/3 h-full"
            />
            <img
              src="/Frame 19.png"
              alt="Contact Image 3"
              className="rounded-lg w-2/3 h-full "
            />
            <img
              src="/Frame 20.png"
              alt="Contact Image 4"
              className="rounded-lg w-2/3 h-full"
            />
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">CONTACT US</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-1/2 border border-gray-300 rounded-md py-2 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-1/2 border border-gray-300 rounded-md py-2 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md py-2 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 focus:outline-none"
              >
                Send it to us
              </button>
            </form>

            {/* Form Status Messages */}
            {formStatus === 'success' && (
              <p className="text-green-500 mt-4">Your message has been sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 mt-4">Please fill in all fields before submitting.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
