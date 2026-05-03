import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E8975] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          {/* Company Info Column */}
          <div className="space-y-6">
            {/* Logo with Company Name */}
            <div className="flex items-center gap-4 mb-6">
              {/* Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                {/* Hexagonal Network - Top Right */}
                <div className="absolute -top-1 -right-2 z-10">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 border border-white transform rotate-45 bg-transparent opacity-60"></div>
                    <div className="w-2 h-2 border border-white transform rotate-45 bg-transparent opacity-80"></div>
                  </div>
                  <div className="flex gap-0.5 mt-0.5">
                    <div className="w-2 h-2 border border-white transform rotate-45 bg-transparent opacity-40"></div>
                    <div className="w-2 h-2 border border-white transform rotate-45 bg-transparent opacity-70"></div>
                    <div className="w-2 h-2 border border-white transform rotate-45 bg-transparent opacity-90"></div>
                  </div>
                </div>
                
                {/* Circuit Elements - Left Side */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 z-10">
                  <div className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></div>
                  <div className="w-2 h-px bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></div>
                  <div className="w-2 h-px bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></div>
                </div>
                
                {/* Computer Monitor - Outline Style */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-12 sm:w-16 sm:h-14 border-2 border-white rounded flex items-center justify-center relative bg-transparent">
                    {/* W inside circular background */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1E8975] rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-white">W</span>
                </div>
                  </div>
                </div>
              </div>
              
              {/* Company Name and Tagline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">Webbiez infotech</h3>
                <p className="text-sm sm:text-base text-white/90">Innovating the Innovation</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg">
              Webbiez Infotech – Crafting digital experiences with creativity and technology. Let's build the future, one innovation at a time.
            </p>
          </div>

          {/* Pages Column */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">Pages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">Home</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">About us</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">Services</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">Projects</a></li>
            </ul>
          </div>

          {/* Queries Column */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">Queries</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">Testimonials</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">FAQs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg block">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">Social Media</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaWhatsapp className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Privacy Policy */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm sm:text-base">
              WebbiezInfotech @2025, all rights reserved
            </p>
            <a href="#" className="text-white/90 hover:text-white transition duration-300 text-sm sm:text-base">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
