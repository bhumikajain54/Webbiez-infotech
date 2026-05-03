import React, { useState } from 'react'; 
import { FaSearch, FaMapMarkerAlt, FaTag, FaChevronDown } from 'react-icons/fa'; 
import Aarti from '../assets/aarti-nathani-portfolio-hero.png';
const ProjectsSlider = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Portfolio - A UI/UX Designer",
      description: "A passionate web developer specializing in creating modern, responsive, and user-friendly websites. I combine creativity and functionality to deliver impactful digital experiences.",
      technologies: "React.js, Tailwind CSS & Node.js",
      type: "portfolio",
      previewBg: "from-gray-900 via-teal-900 to-gray-900"
    },
    {
      id: 1,
      title: "Financial Freedom Platform",
      description: "Unlock financial freedom with India's Best Mutual Fund Distributor. Book your personalised 1-to-1 session today.",
      technologies: "React.js, Node.js & MongoDB",
      type: "financial",
      previewBg: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Job Portal Platform", 
      description: "The Easiest Way To Get Your New Job. Connect with top employers and find your dream career.",
      technologies: "PHP, MySQL & Bootstrap",
      type: "job",
      previewBg: "from-cyan-50 to-cyan-100"
    },
    {
      id: 3,
      title: "Wholesale Partner Platform",
      description: "Your Trusted Wholesale Partner. Streamline your B2B operations with our comprehensive platform.",
      technologies: "Flutter, Firebase & Payment Gateway",
      type: "wholesale",
      previewBg: "from-blue-900 to-blue-950"
    }
  ];

  return (
    <section className="bg-white">
      <div className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">

      {/* Main Project Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Project Details Card - Left */}
            <div className="lg:col-span-5 z-50">
            <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1E8975] mb-6 font-serif">
              {projects[selectedProject].title}
            </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg sm:text-xl lg:text-2xl font-serif">
              {projects[selectedProject].description}
            </p>
            <div className="mb-8">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E8975] mb-2 font-serif">Technologies Used:</h4>
                  <p className="text-gray-700 text-lg sm:text-xl font-serif">
                    {projects[selectedProject].technologies}
              </p>
            </div>
            <div>
                <button className="border-2 border-[#1E8975] bg-white text-[#1E8975] py-3 px-8 rounded-lg font-semibold hover:bg-[#1E8975] hover:text-white transition duration-300 text-lg lg:text-xl font-serif">
              Visit Site
            </button>
            </div>
              </div>
          </div>

            {/* Project Preview - Right */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
                {projects[selectedProject].type === 'portfolio' ? (
                  <div className={`bg-gradient-to-br ${projects[selectedProject].previewBg} p-6 sm:p-8 h-96 sm:h-[500px] relative`}>
                  {/* Navbar */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-xl font-bold text-white border-b-2 border-white pb-1">Aarti Nathani</div>
                      <div className="hidden md:flex gap-4 sm:gap-6 items-center text-sm bg-gray-800/50 px-4 py-2 rounded-full">
                        <a href="#" className="bg-teal-500 px-4 py-2 rounded-full text-white font-medium">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white">About</a>
                        <a href="#" className="text-gray-300 hover:text-white">Services</a>
                        <a href="#" className="text-gray-300 hover:text-white">Projects</a>
                        <a href="#" className="text-gray-300 hover:text-white">Testimonials</a>
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                        <button className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-full text-white font-medium">
                        HIRE ME
                      </button>
                    </div>
                  </div>

                  {/* Hero Content */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
                      <div className="flex items-center justify-center gap-8 mb-4">
                        <h1 className="text-6xl sm:text-8xl font-bold text-white">UI</h1>
                        <div className="w-24 h-24 sm:w-32 sm:h-32 "></div>
                        <h1 className="text-6xl sm:text-8xl font-bold text-white">UX</h1>
                      </div>
                      <h2 className="text-4xl sm:text-6xl font-bold text-transparent" style={{ WebkitTextStroke: '2px #14b8a6' }}>
                      DESIGNER
                    </h2>
                  </div>

                    {/* Robot/Cyborg Figure Image */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
                      <img 
                        src={Aarti} 
                        alt="Robot/Cyborg Figure" 
                        className="w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[450px] object-contain object-bottom"
                      />
                    </div>

                    {/* Bottom CTA */}
                    <div className="absolute bottom-8 left-8">
                      <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-medium">
                      Get A Free Call
                    </button>
                    </div>
                    <div className="absolute bottom-8 right-8 text-right text-gray-300 text-sm max-w-xs">
                      2+ Years of Excellence in Web Development, UI/UX Design
                    </div>
                  </div>
                ) : projects[selectedProject].type === 'financial' ? (
                  <div className="bg-white h-96 sm:h-[500px] flex flex-col relative overflow-hidden">
                    {/* Subtle diagonal pattern background */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)'
                    }}></div>
                    
                    {/* Header/Navigation Bar */}
                    <div className="relative z-10 border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between">
                      {/* Logo */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">G</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">GROWTH</div>
                          <div className="text-[10px] text-gray-600">PARTNERS</div>
                        </div>
                      </div>
                      
                      {/* Navigation Links */}
                      <div className="hidden md:flex items-center gap-3 text-sm text-gray-700">
                        <a href="#" className="hover:text-blue-600">Home</a>
                        <a href="#" className="hover:text-blue-600">About Us</a>
                        <a href="#" className="hover:text-blue-600">Products</a>
                        <a href="#" className="hover:text-blue-600">Fund Explorer</a>
                        <a href="#" className="hover:text-blue-600">Tools</a>
                        <a href="#" className="hover:text-blue-600">Resources</a>
                      </div>
                      
                      {/* Right Side - Search and Buttons */}
                      <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded text-sm">
                          <FaSearch className="text-gray-500 text-sm" />
                          <span className="text-gray-500">Search</span>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-1.5 rounded text-sm font-medium">Contact Us</button>
                        <button className="bg-gray-800 text-white px-4 py-1.5 rounded text-sm font-medium">Login</button>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="relative z-10 flex-1 flex items-center justify-between px-4 sm:px-8">
                      <div className="text-left max-w-2xl">
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                          Unlock financial freedom<br />
                          with India's Best Mutual<br />
                          <span className="text-orange-500">Fund Distributor</span>
                        </h3>
                        <p className="text-gray-700 mb-6">Book your personalised 1-to-1 session today</p>
                        <div className="flex gap-4">
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">FREE CALL</button>
                          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">INVEST NOW</button>
                        </div>
                      </div>
                      
                      {/* Blue vertical rectangle on the right */}
                      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
                        <div className="w-32 h-64 bg-blue-600 rounded-lg shadow-xl"></div>
                      </div>
                    </div>
                  </div>
                ) : projects[selectedProject].type === 'job' ? (
                  <div className="bg-blue-100 h-96 sm:h-[500px] flex flex-col relative overflow-hidden">
                    {/* Header/Navigation Bar - Dark Blue */}
                    <div className="relative z-10 bg-blue-900 px-4 sm:px-6 py-3 flex items-center justify-between">
                      {/* Logo - JOBSAHI */}
                      <div className="flex items-center gap-1">
                        <span className="text-xl sm:text-2xl font-bold text-white">J</span>
                        <FaSearch className="text-white text-xl sm:text-2xl" />
                        <span className="text-xl sm:text-2xl font-bold text-white">BSAHI</span>
                      </div>
                      
                      {/* Navigation Links */}
                      <div className="hidden md:flex items-center gap-4 text-sm text-white">
                        <a href="#" className="text-green-400 font-medium">Home</a>
                        <a href="#" className="hover:text-green-400">About</a>
                        <a href="#" className="hover:text-green-400">Jobs</a>
                        <a href="#" className="hover:text-green-400">Courses</a>
                        <a href="#" className="hover:text-green-400 flex items-center gap-1">
                          Media
                          <FaChevronDown className="text-xs" />
                        </a>
                        <a href="#" className="hover:text-green-400">Contact</a>
                      </div>
                      
                      {/* Right Side - Action Buttons */}
                      <div className="flex items-center gap-3">
                        <button className="text-white text-sm font-medium hover:text-green-400">Register &gt;&gt;</button>
                        <button className="border border-white text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-white hover:text-blue-900 transition">Login</button>
                      </div>
                    </div>
                    
                    {/* Main Content - Light Blue */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-6 bg-blue-100">
                      {/* Platform Tag */}
                      <div className="text-center mb-3 sm:mb-4">
                        <span className="bg-white border border-green-500 text-green-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase">#1 PORTAL JOB PLATFORM</span>
                      </div>
                      
                      {/* Main Heading */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 text-center mb-3 sm:mb-4 leading-tight px-2">
                        The Easiest Way To Get Your New <span className="relative inline-block">
                          <span className="relative z-10">Job</span>
                          <span className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 bg-green-400 opacity-70" style={{ 
                            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                            transform: 'skewX(-10deg)'
                          }}></span>
                        </span>
                      </h3>
                      
                      {/* Descriptive Text - English */}
                      <p className="text-xs sm:text-sm lg:text-base text-blue-900 text-center mb-2 max-w-2xl px-2">
                        Every month, over 5 lakh ITI students use JobSahi to explore jobs, apprenticeships, and courses. Start your career journey with just one click.
                      </p>
                      
                      {/* Descriptive Text - Hindi */}
                      <p className="text-xs sm:text-sm lg:text-base text-blue-900 text-center mb-4 sm:mb-6 max-w-2xl px-2">
                        अपना शहर और ट्रेड चुनें और नई नौकरी की शुरुआत करें!
                      </p>
                      
                      {/* Search Bar */}
                      <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-lg p-2 shadow-lg border border-gray-200 w-full max-w-3xl mx-auto">
                        <div className="flex-1 flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-50 rounded">
                          <FaMapMarkerAlt className="text-gray-400 text-xs sm:text-sm" />
                          <input type="text" placeholder="Location" className="flex-1 text-xs sm:text-sm bg-transparent border-none outline-none text-gray-700" />
                          <FaChevronDown className="text-gray-400 text-xs sm:text-sm" />
                  </div>
                        <div className="flex-1 flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-50 rounded">
                          <FaTag className="text-gray-400 text-xs sm:text-sm" />
                          <input type="text" placeholder="Category" className="flex-1 text-xs sm:text-sm bg-transparent border-none outline-none text-gray-700" />
                          <FaChevronDown className="text-gray-400 text-xs sm:text-sm" />
                </div>
                        <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition">
                          <FaSearch className="text-xs sm:text-sm" />
                          <span className="text-xs sm:text-sm font-medium">नौकरी खोजें</span>
                        </button>
              </div>
            </div>
          </div>
                ) : (
                  <div className="bg-white h-96 sm:h-[500px] flex flex-col relative overflow-hidden">
                    {/* Top Bar */}
                    <div className="relative z-10 bg-black px-4 py-1 text-xs text-white">
                      +91 74XXXXXXX
        </div>

                    {/* Header/Navigation Bar */}
                    <div className="relative z-10 bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
                      {/* Top Row - Logo and Search */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        {/* Logo - SR Stationary */}
                        <div className="flex items-center">
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500">SR</span>
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 ml-1">Stationary</span>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                          <FaSearch className="text-gray-500 text-xs sm:text-sm" />
                          <input type="text" placeholder="Search SR Stationary" className="bg-transparent border-none outline-none text-xs sm:text-sm text-gray-700 w-24 sm:w-auto" />
                        </div>
                      </div>
                      
                      {/* Navigation Links */}
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm flex-wrap">
                        <a href="#" className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">Home</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">All Products</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 hidden sm:inline">Office Supplies</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 hidden sm:inline">School Supplies</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 hidden lg:inline">Writing Instruments</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 hidden lg:inline">Paper Products</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
                      </div>
                    </div>
                    
                    {/* Hero Section - Dark Blue */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-blue-900">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-2">
                        Your Trusted
                      </h3>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 text-center mb-3 sm:mb-4">
                        Wholesale Partner
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-white text-center mb-4 sm:mb-6 max-w-2xl">
                        Discover premium stationery supplies at unbeatable wholesale prices. From office essentials to school supplies, we've got everything your business needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        <button className="bg-orange-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-orange-600 transition text-sm sm:text-base">BROWSE PRODUCTS</button>
                        <button className="border-2 border-white text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition text-sm sm:text-base">Get Quote</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Thumbnails */}
          <div className="flex flex-wrap gap-3 sm:gap-6 lg:gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
                className={`cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden ${
                selectedProject === index 
                    ? 'ring-2 sm:ring-4 ring-[#1E8975] transform scale-105'
                    : 'ring-1 sm:ring-2 ring-gray-300 hover:ring-[#1E8975]'
              }`}
              onClick={() => setSelectedProject(index)}
            >
                <div className="w-full sm:w-48 md:w-56 lg:w-64 h-28 sm:h-32 md:h-36 lg:h-40">
                {project.type === 'portfolio' ? (
                    <div className="h-full bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 flex flex-col relative overflow-hidden">
                      {/* Navbar */}
                      <div className="relative z-30 flex justify-between items-center px-2 py-1.5 mb-2">
                        <div className="text-xs sm:text-sm font-bold text-white border-b-2 border-white pb-0.5">Aarti Nathani</div>
                        <div className="hidden sm:flex gap-1 items-center text-[8px] bg-gray-800/50 px-2 py-1 rounded-full">
                          <a href="#" className="bg-teal-500 px-1.5 py-0.5 rounded-full text-white font-medium">Home</a>
                          <a href="#" className="text-gray-300 hover:text-white">About</a>
                          <a href="#" className="text-gray-300 hover:text-white">Services</a>
                          <a href="#" className="text-gray-300 hover:text-white">Projects</a>
                          <a href="#" className="text-gray-300 hover:text-white">Testimonials</a>
                          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                          <button className="bg-teal-500 hover:bg-teal-600 px-1.5 py-0.5 rounded-full text-white font-medium">
                            HIRE ME
                          </button>
                        </div>
                      </div>
                      
                      {/* Hero Content */}
                      <div className="relative z-30 flex-1 flex items-center justify-center px-2">
                    <div className="text-center">
                          <div className="flex items-center gap-2 sm:gap-3 justify-center mb-1.5 sm:mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">UI</span>
                            <div className="w-4 h-4 sm:w-5 sm:h-5"></div>
                            <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">UX</span>
                          </div>
                          <p className="text-2xl sm:text-3xl font-bold text-transparent drop-shadow-lg" style={{ WebkitTextStroke: '2px #14b8a6' }}>
                            DESIGNER
                          </p>
                        </div>
                      </div>
                      {/* Robot/Cyborg Figure Image */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
                        <img 
                          src={Aarti} 
                          alt="Robot/Cyborg Figure" 
                          className="w-20 h-28 sm:w-24 sm:h-32 object-contain object-bottom opacity-80"
                        />
                    </div>
                    {/* Bottom CTA */}
                    <div className="absolute bottom-2 left-2 z-30">
                      <button className="bg-teal-500 hover:bg-teal-600 px-2 py-1 rounded-full text-white text-[8px] font-medium">
                        Get A Free Call
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 text-right text-gray-300 text-[6px] max-w-[60px] z-30">
                      2+ Years of Excellence in Web Development, UI/UX Design
                    </div>
                  </div>
                ) : project.type === 'financial' ? (
                    <div className="h-full bg-white flex flex-col relative overflow-hidden">
                      {/* Subtle diagonal pattern background */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)'
                      }}></div>
                      
                      {/* Header/Navigation Bar */}
                      <div className="relative z-10 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">G</span>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900">GROWTH</div>
                            <div className="text-[8px] text-gray-600">PARTNERS</div>
                          </div>
                        </div>
                        
                        {/* Navigation Links - Hidden on very small screens */}
                        <div className="hidden sm:flex items-center gap-1 text-[8px] text-gray-700">
                          <a href="#" className="hover:text-blue-600">Home</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-blue-600">About Us</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-blue-600">Products</a>
                        </div>
                        
                        {/* Right Side - Search and Buttons */}
                        <div className="flex items-center gap-1">
                          <div className="hidden md:flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded text-[8px]">
                            <FaSearch className="text-gray-500 text-[8px]" />
                            <span className="text-gray-500">Search</span>
                          </div>
                          <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px] font-medium">Contact Us</button>
                          <button className="bg-gray-800 text-white px-2 py-0.5 rounded text-[8px] font-medium">Login</button>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="relative z-10 flex flex-col justify-center flex-1 p-4">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-2">
                          Unlock financial freedom<br />
                          with India's Best Mutual<br />
                          <span className="text-orange-500">Fund Distributor</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-700 mb-3">Book your personalised 1-to-1 session today</p>
                        <div className="flex gap-2 flex-wrap">
                          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-700 transition">FREE CALL</button>
                          <button className="border-2 border-blue-600 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-50 transition">INVEST NOW</button>
                        </div>
                    </div>
                  </div>
                ) : project.type === 'job' ? (
                    <div className="h-full bg-blue-100 flex flex-col relative overflow-hidden rounded-t-lg">
                      {/* Header/Navigation Bar - Dark Blue */}
                      <div className="relative z-10 bg-blue-900 px-2 py-1.5 flex items-center justify-between">
                        {/* Logo - JOBSAHI */}
                        <div className="flex items-center gap-0.5">
                          <span className="text-xs font-bold text-white">J</span>
                          <FaSearch className="text-white text-xs" />
                          <span className="text-xs font-bold text-white">BSAHI</span>
                        </div>
                        
                        {/* Navigation Links - Hidden on very small screens */}
                        <div className="hidden sm:flex items-center gap-0.5 text-[6px] text-white">
                          <a href="#" className="text-green-400 font-medium">Home</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-green-400">About</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-green-400">Jobs</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-green-400">Courses</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-green-400 flex items-center gap-0.5">
                            Media
                            <FaChevronDown className="text-[4px]" />
                          </a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="hover:text-green-400">Contact</a>
                        </div>
                        
                        {/* Right Side - Action Buttons */}
                        <div className="flex items-center gap-1">
                          <button className="text-white text-[6px] font-medium hover:text-green-400">Register &gt;&gt;</button>
                          <button className="border border-white text-white px-1 py-0.5 rounded text-[6px] font-medium hover:bg-white hover:text-blue-900 transition">Login</button>
                        </div>
                      </div>
                      
                      {/* Main Content - Light Blue */}
                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-2 bg-blue-100">
                        {/* Platform Tag */}
                        <div className="text-center mb-1">
                          <span className="bg-white border border-green-500 text-green-600 px-2 py-0.5 rounded-full text-[6px] font-bold uppercase">#1 PORTAL JOB PLATFORM</span>
                        </div>
                        
                        {/* Main Heading */}
                        <h4 className="text-xs sm:text-sm font-bold text-blue-900 text-center leading-tight mb-1">
                          The Easiest Way To Get Your New <span className="relative inline-block">
                            <span className="relative z-10">Job</span>
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 opacity-70" style={{ 
                              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                              transform: 'skewX(-10deg)'
                            }}></span>
                          </span>
                        </h4>
                        
                        {/* Descriptive Text - English */}
                        <p className="text-[6px] text-blue-900 text-center mb-0.5 max-w-full px-1">
                          Every month, over 5 lakh ITI students use JobSahi to explore jobs, apprenticeships, and courses.
                        </p>
                        
                        {/* Descriptive Text - Hindi */}
                        <p className="text-[6px] text-blue-900 text-center mb-1 max-w-full px-1">
                          अपना शहर और ट्रेड चुनें और नई नौकरी की शुरुआत करें!
                        </p>
                        
                        {/* Search Bar */}
                        <div className="flex flex-col sm:flex-row gap-1 bg-white rounded p-1 shadow border border-gray-200 w-full max-w-full">
                          <div className="flex-1 flex items-center gap-1 px-1 py-0.5 bg-gray-50 rounded">
                            <FaMapMarkerAlt className="text-gray-400 text-[6px]" />
                            <input type="text" placeholder="Location" className="flex-1 text-[6px] bg-transparent border-none outline-none text-gray-700" />
                            <FaChevronDown className="text-gray-400 text-[6px]" />
                          </div>
                          <div className="flex-1 flex items-center gap-1 px-1 py-0.5 bg-gray-50 rounded">
                            <FaTag className="text-gray-400 text-[6px]" />
                            <input type="text" placeholder="Category" className="flex-1 text-[6px] bg-transparent border-none outline-none text-gray-700" />
                            <FaChevronDown className="text-gray-400 text-[6px]" />
                          </div>
                          <button className="bg-green-600 text-white px-2 py-0.5 rounded flex items-center justify-center gap-1 hover:bg-green-700 transition">
                            <FaSearch className="text-[6px]" />
                            <span className="text-[6px] font-medium">नौकरी खोजें</span>
                          </button>
                        </div>
                    </div>
                  </div>
                ) : (
                    <div className="h-full bg-white flex flex-col relative overflow-hidden">
                      {/* Top Bar */}
                      <div className="relative z-10 bg-black px-2 py-0.5 text-[6px] text-white">
                        +91 74XXXXXXX
                      </div>
                      
                      {/* Header/Navigation Bar */}
                      <div className="relative z-10 bg-white border-b border-gray-200 px-2 py-1">
                        {/* Logo - SR Stationary */}
                        <div className="flex items-center mb-1">
                          <span className="text-xs font-bold text-orange-500">SR</span>
                          <span className="text-xs font-bold text-gray-900 ml-0.5">Stationary</span>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="flex items-center gap-1 text-[6px]">
                          <a href="#" className="text-orange-500 font-medium border-b border-orange-500">Home</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="text-gray-700">Products</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="text-gray-700">About</a>
                          <span className="mx-0.5">•</span>
                          <a href="#" className="text-gray-700">Contact</a>
                        </div>
                      </div>
                      
                      {/* Hero Section - Dark Blue */}
                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-2 bg-blue-900">
                        <h4 className="text-xs sm:text-sm font-bold text-white text-center mb-0.5">
                          Your Trusted
                        </h4>
                        <h4 className="text-xs sm:text-sm font-bold text-orange-500 text-center mb-1">
                          Wholesale Partner
                        </h4>
                        <p className="text-[6px] text-white text-center mb-1 max-w-full px-1">
                          Discover premium stationery supplies at unbeatable wholesale prices. From office essentials to school supplies, we've got everything your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-1 justify-center w-full">
                          <button className="bg-orange-500 text-white px-2 py-1 rounded-lg text-[6px] font-medium hover:bg-orange-600 transition">BROWSE PRODUCTS</button>
                          <button className="border border-white text-white px-2 py-1 rounded-lg text-[6px] font-medium hover:bg-white hover:text-blue-900 transition">Get Quote</button>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
export default ProjectsSlider;