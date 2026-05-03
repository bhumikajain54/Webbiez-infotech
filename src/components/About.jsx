import React from 'react';
import { FaDesktop } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-white overflow-hidden">
      {/* Top Line */}
      <div className="max-w-7xl mx-auto h-px bg-green-500 mb-16 sm:mb-24"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-16 sm:mb-24">
          <span className="text-[#1E8975]">Who</span> <span className="text-black">We Are?</span>
        </h2>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Logo Card */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 w-full max-w-xl mx-auto">
            <div className="relative w-full aspect-square flex flex-col justify-center items-center">
              {/* Visual Elements Container */}
              <div className="relative mb-8">
                <FaDesktop className="text-8xl sm:text-9xl text-[#1E8975]" />
                {/* Dark Green Circle with W */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#07191B] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-white">W</span>
                  </div>
                </div>
              </div>
              
              {/* Company Name */}
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07191B]">Webbiez infotech</h3>
                <p className="text-[#1E8975] text-lg sm:text-xl font-medium mt-2">Innovating the Innovation</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-serif text-center lg:text-left">
              Webbiez Infotech is a forward-thinking IT solutions company that builds modern, user-friendly, and creative digital platforms. We specialize in ReactJS websites, intuitive UI/UX designs, graphic design, mobile applications, and public relations strategies that help businesses stand out. With a blend of creativity and technology, we deliver solutions that not only look great but also perform flawlessly.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto h-px bg-green-500 mt-16 sm:mt-24"></div>
    </section>
  );
};

export default About;
