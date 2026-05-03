import React, { useState } from 'react';

const FAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What services does Webbiez Infotech provide?",
      answer: "We provide web development, mobile app development, UI/UX design, SEO, branding, e-commerce solutions, and PR services."
    },
    {
      id: 1,
      question: "Do you work with startups as well as established businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to established enterprises. We tailor our solutions to meet your specific needs and budget."
    },
    {
      id: 2,
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      id: 3,
      question: "Can you help us rank better on Google?",
      answer: "Absolutely! We offer comprehensive SEO services including keyword research, on-page optimization, content strategy, and technical SEO to improve your search rankings."
    },
    {
      id: 4,
      question: "What industries do you serve?",
      answer: "We serve diverse industries including healthcare, e-commerce, education, real estate, hospitality, finance, and technology sectors."
    },
    {
      id: 5,
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide comprehensive maintenance and support packages including updates, security patches, performance monitoring, and technical assistance."
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1E8975] text-center mb-12 sm:mb-16">
          FAQs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-[#E8F5F3] rounded-lg overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center hover:bg-[#D4ECE8] transition duration-300"
                >
                  <div className="flex items-start gap-2 sm:gap-3 flex-1">
                    <span className="text-gray-800 font-medium text-base sm:text-lg flex-shrink-0">
                      Que{index + 1}.
                    </span>
                    <span className="text-gray-800 font-normal text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-gray-800 text-2xl sm:text-3xl font-light ml-4 flex-shrink-0">
                    {expandedFAQ === faq.id ? '−' : '+'}
                  </div>
                </button>

                {/* Answer */}
                {expandedFAQ === faq.id && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="bg-white rounded-lg p-4 sm:p-5">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - 3D Illustration */}
          <div className="hidden lg:flex justify-center items-center w-full lg:w-auto lg:flex-shrink-0">
            <div className="relative w-80 h-80">
              {/* Question Mark - Large */}
              <div className="absolute top-8 right-8 z-20">
                <div className="w-24 h-24 flex items-center justify-center">
                  <span className="text-[#5FCCB4] text-8xl font-bold">?</span>
                </div>
                  </div>

              {/* Character sitting on beanbag */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                {/* Beanbag */}
                <div className="relative">
                  <div className="w-48 h-32 bg-[#5FCCB4] rounded-[50%] relative"></div>
                  
                  {/* Person */}
                  <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {/* Head */}
                    <div className="w-16 h-16 bg-[#FFB59A] rounded-full mb-2 relative">
                      {/* Hair */}
                      <div className="absolute -top-2 -left-1 w-18 h-12 bg-[#D4755E] rounded-t-full"></div>
                      {/* Eyes */}
                      <div className="absolute top-6 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-6 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                      {/* Mouth */}
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Body with laptop */}
                    <div className="relative">
                      {/* Torso */}
                      <div className="w-20 h-24 bg-gray-700 rounded-2xl relative">
                      {/* Laptop */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-400 rounded-sm border-2 border-gray-500">
                          <div className="w-full h-2 bg-gray-300 rounded-t-sm"></div>
                    </div>
                      </div>
                      
                    {/* Arms */}
                      <div className="absolute top-2 -left-6 w-4 h-16 bg-[#FFB59A] rounded-full transform rotate-12"></div>
                      <div className="absolute top-2 -right-6 w-4 h-16 bg-[#FFB59A] rounded-full transform -rotate-12"></div>
                      
                      {/* Legs */}
                      <div className="absolute -bottom-8 left-2 w-5 h-12 bg-gray-800 rounded-lg"></div>
                      <div className="absolute -bottom-8 right-2 w-5 h-12 bg-gray-800 rounded-lg"></div>
                      
                      {/* Shoes */}
                      <div className="absolute -bottom-8 left-0 w-8 h-4 bg-red-500 rounded-full"></div>
                      <div className="absolute -bottom-8 right-0 w-8 h-4 bg-red-500 rounded-full"></div>
                      
                      {/* Coffee cup */}
                      <div className="absolute bottom-0 -right-12 w-6 h-8 bg-red-400 rounded-b-lg border-2 border-red-500">
                        <div className="absolute -top-1 left-0 w-full h-2 bg-red-500 rounded-t-lg"></div>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
