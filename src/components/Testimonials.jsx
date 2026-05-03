import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      quote: "They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success",
      author: "Aarti Nathani",
      role: "UI/UX Designer, Software Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#1E8975]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center justify-between">
          {/* Left Side - Title and Main Quote */}
          <div className="flex-1 text-left max-w-2xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
              What Our Clients<br />
              Says
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              <p className="mb-3 sm:mb-4">
              "Our clients love the creativity, timely delivery, and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success."
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial Card with Navigation */}
          <div className="flex-shrink-0 relative flex items-center gap-4 sm:gap-5 md:gap-6 w-full lg:w-auto justify-center">
            {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E8975] transition duration-300 flex-shrink-0"
              >
              <FaChevronLeft className="text-base sm:text-lg md:text-xl" />
              </button>

              {/* Testimonial Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-2xl w-full max-w-sm sm:max-w-md">
              {/* Quote Icon */}
              <div className="text-5xl sm:text-6xl md:text-7xl text-[#1E8975] leading-none mb-3 sm:mb-4 font-serif">"</div>
              
              {/* Quote Text */}
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
              
              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6">
                <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">
                        {testimonials[currentTestimonial].author}
                      </h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E8975] transition duration-300 flex-shrink-0"
            >
              <FaChevronRight className="text-base sm:text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
