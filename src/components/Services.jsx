import React from 'react';
import { FaCode, FaPalette, FaChartLine, FaBullseye, FaShoppingCart, FaUsers } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-[#1E8975]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 lg:mb-20">Services We Offer</h2>
        
        {/* Services Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 overflow-hidden py-4">
          <ServiceCard 
            title="Web Development"
            description="Scalable, fast, and modern websites built with cutting-edge technologies."
            icon={<FaCode />}
            backgroundImage="bg-gradient-to-br from-[#07191B] to-[#0A2528]"
          />
          <ServiceCard 
            title="UI/UX Designing"
            description="Beautiful, intuitive user interfaces and experiences that users love."
            icon={<FaPalette />}
            backgroundImage="bg-gradient-to-br from-[#07191B] to-[#0A2528]"
          />
          <ServiceCard 
            title="SEO & Digital Marketing"
            description="Boost your online presence with strategic SEO and digital marketing solutions."
            icon={<FaChartLine />}
            backgroundImage="bg-gradient-to-br from-purple-800 to-purple-900"
          />
          <ServiceCard 
            title="Branding & Creativity"
            description="Create memorable brand identities that stand out in the market."
            icon={<FaBullseye />}
            backgroundImage="bg-gradient-to-br from-gray-300 to-gray-400"
          />
          <ServiceCard 
            title="E-Commerce & Business Portals"
            description="Powerful online stores and business portals that drive sales and growth."
            icon={<FaShoppingCart />}
            backgroundImage="bg-gradient-to-br from-[#07191B] to-[#0A2528]"
          />
          <ServiceCard 
            title="PR (Public Relations)"
            description="Strategic communication and public relations to build your brand reputation."
            icon={<FaUsers />}
            backgroundImage="bg-gradient-to-br from-[#07191B] to-purple-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
