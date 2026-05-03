import React, { useState } from 'react';

const ServiceCard = ({ title, description, icon, isExpanded, backgroundImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine text color based on background
  const isLightBackground = backgroundImage.includes('gray-300') || backgroundImage.includes('gray-400');
  const textColor = isLightBackground ? 'text-[#07191B]' : 'text-white';
  
  return (
    <div 
      className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
        isExpanded || isHovered 
          ? 'w-full sm:w-80 lg:w-96 h-64' 
          : 'w-16 h-64 sm:h-80'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${backgroundImage} rounded-2xl h-full border-2 border-white relative overflow-hidden`}>
        {/* Background Pattern/Image Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6">
          {isExpanded || isHovered ? (
            // Expanded State
            <div className={textColor}>
              <div className="text-3xl sm:text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
              <p className="text-base sm:text-lg leading-relaxed">{description}</p>
            </div>
          ) : (
            // Collapsed State
            <div className={`${textColor} h-full flex items-center justify-center`}>
              <div className="transform -rotate-90">
                <span className="text-sm sm:text-lg font-bold whitespace-nowrap">{title}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
