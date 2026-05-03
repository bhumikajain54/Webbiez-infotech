import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E8975] text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start px-2 sm:px-4 md:px-0">
          {/* Left Side - Contact Form */}
          <div className="w-full">
            <div className="space-y-4 sm:space-y-5">
              {/* Name and Phone Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 bg-[#1E8975] text-white placeholder-white px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975]/50 text-sm sm:text-base md:text-lg font-medium"
                />
                
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 bg-[#1E8975] text-white placeholder-white px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975]/50 text-sm sm:text-base md:text-lg font-medium"
                />
              </div>
              
              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#1E8975] text-white placeholder-white px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975]/50 text-sm sm:text-base md:text-lg font-medium"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Message.."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-[#1E8975] text-white placeholder-white px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975]/50 resize-none text-sm sm:text-base md:text-lg font-medium"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-white border-2 border-[#1E8975] text-[#1E8975] px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold hover:bg-[#1E8975] hover:text-white transition duration-300 text-sm sm:text-base md:text-lg"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="w-full">
            <div className="space-y-4 sm:space-y-5">
              {/* Introductory Text */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold">
                  Have a project in mind? Let's create something amazing together
                </p>
              </div>

              {/* Phone Number */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-5 md:px-6 py-4 sm:py-4.5 md:py-5 rounded-full flex items-center gap-3 sm:gap-4">
                <FaPhone className="text-base sm:text-lg md:text-xl flex-shrink-0" />
                <span className="text-base sm:text-lg md:text-xl font-medium break-all">+91 9144716600</span>
              </div>

              {/* Email Address */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-5 md:px-6 py-4 sm:py-4.5 md:py-5 rounded-full flex items-center gap-3 sm:gap-4">
                <FaEnvelope className="text-base sm:text-lg md:text-xl flex-shrink-0" />
                <span className="text-base sm:text-lg md:text-xl font-medium break-all">wiinfo@gmail.com</span>
              </div>

              {/* Location */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-5 md:px-6 py-4 sm:py-4.5 md:py-5 rounded-full flex items-center gap-3 sm:gap-4">
                <FaMapMarkerAlt className="text-base sm:text-lg md:text-xl flex-shrink-0" />
                <span className="text-base sm:text-lg md:text-xl font-medium">Jabalpur, Madhya Pradesh.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
