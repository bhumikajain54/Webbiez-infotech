import React from 'react';
import ProjectsSlider from './ProjectsSlider';

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title and Description */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#07191B] mb-6">
            Projects We've <span className="text-[#1E8975]">Worked on</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
            We’ve worked on diverse projects ranging from responsive websites to complex business
            portals. Our solutions integrate ReactJS, PHP, Node.js, Flutter, Figma, and modern UI
            tools to ensure scalability, design precision, and high performance.
          </p>
        </div>

        {/* Main Project Display and Slider */}
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default Projects;
