import React, { useState, useEffect } from 'react';
import SectionCard from '../components/SectionCard.jsx';
import { 
  FaFutbol, 
  FaUsers, 
  FaBuilding, 
  FaShoppingCart, 
  FaInfoCircle, 
  FaBlog,
  FaArrowRight,
  FaCalendarAlt,
  FaTrophy,
  FaCamera,
  FaQuoteLeft
} from 'react-icons/fa';
import cricketBackground from "../assets/imgs/cricket-background.jpg";
import footballBackground from "../assets/imgs/hero-img.png";

export default function Landing() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  // Hero images/slides data
  const heroSlides = [
    {
      id: 1,
      title: "READY",
      subtitle: "TO RIDE",
      description: "Your ultimate destination for top-quality sports experiences. Join our community of passionate players across multiple sports...",
      bgGradient: "from-black via-gray-900 to-red-900/20",
      imageUrl: cricketBackground
    },
    {
      id: 2,
      title: "PLAY",
      subtitle: "TOGETHER",
      description: "From cricket to chess, bowling to badminton - experience the thrill of competition in our premium facilities...",
      bgGradient: "from-red-900 via-black to-gray-900/20",
      imageUrl: footballBackground
    },
    {
      id: 3,
      title: "WIN",
      subtitle: "WITH PRIDE",
      description: "Join the elite community of Red Riders. Experience the difference with our exclusive tournaments and leagues...",
      bgGradient: "from-gray-900 via-red-900/30 to-black",
      imageUrl: cricketBackground
    }
  ];

  // Events/Leagues data
  const events = [
    {
      id: 1,
      title: "RRIPL",
      subtitle: "Indoor Cricket League",
      description: "Experience the intensity of indoor cricket with fast-paced matches and premium facilities.",
      icon: "🏏",
      bgImage: cricketBackground,
      season: "Season 11 - Starting Soon"
    },
    {
      id: 2,
      title: "RROPL",
      subtitle: "Outdoor League",
      description: "Traditional outdoor cricket under the open sky with professional grounds and equipment.",
      icon: "🏟️",
      bgImage: footballBackground,
      season: "Registration Open"
    },
    {
      id: 3,
      title: "RIDERS CUP",
      subtitle: "Championship Series",
      description: "Our flagship tournament bringing together the best players from all leagues.",
      icon: "🏆",
      bgImage: cricketBackground,
      season: "Annual Tournament"
    },
    {
      id: 4,
      title: "MULTI SPORTS",
      subtitle: "Diverse Gaming",
      description: "Pickleball, Bowling, Badminton, Chess - Something for every sports enthusiast.",
      icon: "🎯",
      bgImage: footballBackground,
      season: "Year Round"
    }
  ];

  // Gallery images data
  const galleryItems = [
    {
      id: 1,
      image: cricketBackground,
      caption: "Season 10 Finals",
      description: "Thrilling finale match"
    },
    {
      id: 2,
      image: footballBackground,
      caption: "Bowling Night",
      description: "Community gathering"
    },
    {
      id: 3,
      image: cricketBackground,
      caption: "Riders Cup 2024",
      description: "Championship moment"
    },
    {
      id: 4,
      image: footballBackground,
      caption: "Training Session",
      description: "Skills development"
    }
  ];

  // Auto slide effects
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setCurrentEventSlide((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(eventInterval);
  }, [events.length]);

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(galleryInterval);
  }, [galleryItems.length]);

  // Manual navigation functions
  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${slide.bgGradient} relative`}>
                <div className="absolute inset-0">
                  <img 
                    src={slide.imageUrl} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div className="absolute inset-0 opacity-10 z-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,red_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>
                
                <div className="absolute top-0 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-3xl animate-pulse z-10"></div>
                <div className="absolute top-0 right-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-3xl animate-pulse z-10"></div>
                
                <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-6 sm:mb-8">
                      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 sm:mb-4 tracking-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4 sm:mb-6 tracking-tight drop-shadow-2xl">
                        {slide.subtitle}
                      </h2>
                    </div>
                    
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-red-800/30 mx-4 sm:mx-0">
                      <p className="text-white/95 text-sm sm:text-lg mb-4">
                        {slide.description}
                      </p>
                      
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg mt-4 sm:mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={goToPrevSlide}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-red-400 text-2xl sm:text-3xl transition-colors z-30 hover:scale-110 bg-black/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center backdrop-blur-sm"
        >
          ←
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-red-400 text-2xl sm:text-3xl transition-colors z-30 hover:scale-110 bg-black/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center backdrop-blur-sm"
        >
          →
        </button>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-red-500 w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-30">
          <div 
            className="h-full bg-red-500 transition-all duration-300 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
            }}
          />
        </div>
      </section>

      {/* About the Club Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Red Riders Sports Club</h2>
            
            <div className="flex justify-center items-center space-x-6 sm:space-x-8 mb-8">
              <span className="text-3xl sm:text-4xl">🏏</span>
              <span className="text-3xl sm:text-4xl">🎳</span>
              <span className="text-3xl sm:text-4xl">🏸</span>
              <span className="text-3xl sm:text-4xl">♟️</span>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-white/90 text-lg sm:text-xl mb-4 leading-relaxed">
                Red Riders is more than just a sports club - we're a community of passionate athletes and enthusiasts dedicated to excellence across multiple sports disciplines.
              </p>
              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                From cricket leagues to chess tournaments, bowling nights to badminton championships, we provide premium facilities and foster competitive spirit in a welcoming environment.
              </p>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Learn More
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Events & Leagues Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-red-400 text-sm sm:text-base mb-2 uppercase tracking-wider">Events & Leagues</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              OUR PREMIER
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              <span className="text-red-500">COMPETITIONS</span>
            </h3>
          </div>
          
          {/* Events Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentEventSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="relative h-64 sm:h-80 lg:h-96 mx-4 rounded-2xl overflow-hidden bg-gray-900/50 border border-red-800/20">
                    <img 
                      src={event.bgImage}
                      alt={event.title}
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8">
                      <div className="text-4xl sm:text-6xl mb-4">{event.icon}</div>
                      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
                        {event.title}
                      </h4>
                      <h5 className="text-xl sm:text-2xl lg:text-3xl font-black text-red-500 mb-4">
                        {event.subtitle}
                      </h5>
                      <p className="text-white/80 text-sm sm:text-base mb-4 max-w-md">
                        {event.description}
                      </p>
                      <p className="text-red-400 text-xs sm:text-sm font-semibold mb-6">
                        {event.season}
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Event Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentEventSlide 
                      ? 'bg-red-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community & Membership Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Community & Membership</h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">Join our family of passionate sports enthusiasts</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Community Image Placeholder */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 sm:h-40 bg-gradient-to-br from-red-600/20 to-black border border-red-800/30 rounded-lg overflow-hidden">
                  <img src={cricketBackground} alt="Community" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="h-32 sm:h-40 bg-gradient-to-br from-red-600/20 to-black border border-red-800/30 rounded-lg overflow-hidden">
                  <img src={footballBackground} alt="Team" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="h-32 sm:h-40 bg-gradient-to-br from-red-600/20 to-black border border-red-800/30 rounded-lg overflow-hidden col-span-2">
                  <img src={cricketBackground} alt="Group" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
            </div>
            
            {/* Community Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Experience True Camaraderie</h3>
              
              {/* Testimonials */}
              <div className="space-y-6 mb-8">
                <div className="bg-gray-800/50 border border-red-800/20 rounded-lg p-4 sm:p-6">
                  <FaQuoteLeft className="text-red-500 mb-3" />
                  <p className="text-white/90 text-sm sm:text-base italic mb-3">
                    "Red Riders isn't just about winning games - it's about building lasting friendships and pushing each other to be better."
                  </p>
                  <p className="text-red-400 text-sm font-semibold">- Sarah M, Cricket League Player</p>
                </div>
                
                <div className="bg-gray-800/50 border border-red-800/20 rounded-lg p-4 sm:p-6">
                  <FaQuoteLeft className="text-red-500 mb-3" />
                  <p className="text-white/90 text-sm sm:text-base italic mb-3">
                    "The diversity of sports and the welcoming community make Red Riders special. From chess to cricket, everyone finds their place."
                  </p>
                  <p className="text-red-400 text-sm font-semibold">- Mike D, Multi-Sport Member</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                  <FaUsers className="mr-2" />
                  Explore Member Directory
                </button>
                <button className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                  Join the Community
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Highlights Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Gallery & Highlights</h2>
            <p className="text-white/80 text-base sm:text-lg">Capturing our memorable moments</p>
          </div>
          
          {/* Gallery Slider */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative h-64 sm:h-80 lg:h-96 mx-2 sm:mx-4 rounded-2xl overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-red-800/30">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                          {item.caption}
                        </h4>
                        <p className="text-white/80 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <FaCamera className="text-white/60 text-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGallerySlide 
                      ? 'bg-red-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              <FaCamera className="mr-2" />
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            READY TO JOIN THE
            <span className="text-red-500"> RIDERS?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned athlete or just starting your sports journey, Red Riders welcomes you to be part of our championship legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Become a Member
            </button>
            <button className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
