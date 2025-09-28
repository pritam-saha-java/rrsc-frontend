// src/pages/projects/club/AboutClub.jsx
import React, { useState, useEffect } from "react";

export default function AboutClub() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement effect for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    {
      number: "10+",
      title: "RRIPL Seasons",
      subtitle: "Indoor Excellence",
      description: "Consecutive seasons of thrilling indoor cricket with innovative tournament formats and professional execution.",
      gradient: "from-red-500 to-pink-600",
      delay: "0ms"
    },
    {
      number: "500+",
      title: "Active Members",
      subtitle: "Growing Community",
      description: "A diverse community of passionate athletes across multiple sports disciplines and skill levels.",
      gradient: "from-red-600 to-orange-500",
      delay: "200ms"
    },
    {
      number: "8",
      title: "Sport Categories",
      subtitle: "Multi-Discipline",
      description: "From cricket and badminton to chess and pickleball, offering platforms for every sporting interest.",
      gradient: "from-red-700 to-red-500",
      delay: "400ms"
    },
    {
      number: "25+",
      title: "Annual Events",
      subtitle: "Year-Round Action",
      description: "Consistently delivering high-quality tournaments and engaging community events throughout the year.",
      gradient: "from-pink-600 to-red-600",
      delay: "600ms"
    }
  ];

  const values = [
    {
      title: "Sportsmanship",
      icon: "🏆",
      description: "Victory is sweet, but integrity is the foundation of every champion.",
      color: "red"
    },
    {
      title: "Innovation",
      icon: "⚡",
      description: "Pioneering new formats and experiences that redefine sports entertainment.",
      color: "orange"
    },
    {
      title: "Community",
      icon: "🌟",
      description: "Building lasting connections through shared passion and mutual respect.",
      color: "pink"
    },
    {
      title: "Excellence",
      icon: "💎",
      description: "Uncompromising quality in every aspect of our sporting experiences.",
      color: "red"
    }
  ];

  const tabContent = [
    {
      title: "Our Story",
      content: "Born from a vision to revolutionize sports in Kolkata, Red Riders has grown from a small cricket enthusiasts group into a premier multi-sport community. Our journey represents the evolution of traditional sports culture into something extraordinary."
    },
    {
      title: "Our Impact",
      content: "Beyond matches and tournaments, we've created a ecosystem where athletes thrive, friendships flourish, and sporting excellence becomes a way of life. Our impact resonates through every player who has stepped onto our grounds."
    },
    {
      title: "Our Future",
      content: "As we expand into new sports and embrace cutting-edge technologies, our commitment remains unchanged: to provide unparalleled sporting experiences that inspire, challenge, and unite our community."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid (does not block pointer events) */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`,
          transition: 'background-image 0.1s ease-out'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-600/10"></div>
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

  {/* Hero Section with Parallax Effect */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden pointer-events-auto">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-red-600 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
        
        {/* Main Content */}
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          {/* Sport Icons with Floating Animation */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {['🏏', '🎳', '🏸', '♟️'].map((icon, index) => (
              <div 
                key={index}
                className="text-4xl transform hover:scale-125 transition-all duration-500 animate-bounce"
                style={{animationDelay: `${index * 200}ms`, animationDuration: '3s'}}
              >
                {icon}
              </div>
            ))}
          </div>
          
          {/* Main Title with Gradient Text */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              ABOUT
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              RED RIDERS
            </span>
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Where passion meets excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>
          
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-400 font-semibold">Kolkata's Premier Sports Hub</span>
          </div>
        </div>
      </section>

  {/* Interactive Welcome Section */}
  <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Welcome to Our
                  <span className="text-red-500"> Universe</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-8"></div>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="min-h-[200px]">
                <div className={`transition-all duration-500 ${activeTab >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {tabContent[activeTab]?.content}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual Side */}
            <div className="relative">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-700">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                      🚀
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Sports Excellence</h3>
                    <p className="text-gray-400">
                      More than competition, we create legends through community, innovation, and unwavering dedication to sporting excellence.
                    </p>
                  </div>
                </div>
                
                {/* Floating Accent Cards */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500/20 rounded-2xl rotate-12 backdrop-blur-sm border border-red-500/30"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-red-400/20 rounded-xl -rotate-12 backdrop-blur-sm border border-red-400/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Achievements Grid with Hover Effects */}
  <section className="py-20 px-6 bg-gradient-to-b from-transparent to-red-900/5 pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Numbers that tell our story of growth, community, and sporting excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{animationDelay: item.delay}}
              >
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 h-full transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700">
                  {/* Number Display */}
                  <div className={`text-5xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                    {item.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-red-400 font-semibold mb-4">{item.subtitle}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Values Section with Interactive Cards */}
  <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Core Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-${value.color}-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
