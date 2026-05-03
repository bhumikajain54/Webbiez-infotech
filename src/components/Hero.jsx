import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center px-3 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Main Content Block */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Main Teal Block */}
        <div className="bg-[#1E8975] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24 relative border-2 border-white shadow-2xl mb-20 sm:mb-0">
          {/* Company Name */}
          <div className="text-center py-6 sm:py-8 md:py-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight tracking-tighter">
              WEBBIEZ
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight tracking-tighter">
              INFOTECH
            </h2>
          </div>

          {/* Left Social Media Bar - Visible on all screens */}
          <div className="absolute -left-2 sm:-left-3 md:-left-4 lg:-left-10 xl:-left-12 top-1/2 transform -translate-y-1/2 z-20">
            <div className="bg-[#07191B] rounded-full p-2 sm:p-3 lg:p-4 space-y-3 sm:space-y-4 lg:space-y-6 shadow-xl border border-white/10">
              <FaLinkedin className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white hover:text-[#1E8975] transition cursor-pointer" />
              <FaWhatsapp className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white hover:text-[#1E8975] transition cursor-pointer" />
              <FaEnvelope className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white hover:text-[#1E8975] transition cursor-pointer" />
              <FaInstagram className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white hover:text-[#1E8975] transition cursor-pointer" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#1E8975] rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold">W</span>
              </div>
            </div>
          </div>

          {/* Top Right Elements - Responsive */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-20 flex gap-2 sm:gap-3">
            {/* Search Bar - Hidden on smaller screens */}
            <div className="hidden md:flex bg-[#07191B] rounded-full px-3 md:px-4 lg:px-5 py-2 md:py-2.5 items-center gap-2 md:gap-3 border border-white/10 shadow-lg">
              <FaSearch className="text-white text-xs md:text-sm" />
              <span className="text-white text-xs md:text-sm font-medium">Search</span>
            </div>
            
            {/* Logo */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#07191B] rounded-full flex items-center justify-center border border-white/20 shadow-lg cursor-pointer">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">W</span>
            </div>
          </div>

          {/* Bottom Right Description Box - Responsive - Positioned below card on mobile */}
          <div className="static sm:absolute left-0 right-0 sm:left-auto sm:right-0 mt-6 sm:mt-0 sm:-bottom-8 sm:right-8 z-20 max-w-full sm:max-w-[280px] md:max-w-xs mx-auto sm:mx-0">
            <div className="bg-[#07191B] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-white underline decoration-[#1E8975] underline-offset-4 mb-2 sm:mb-3">
                Innovating the Innovation
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                At Webbiez Infotech, we don't just create technology—we create experiences. From powerful websites to stunning apps, our mission is to turn bold ideas into digital reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
