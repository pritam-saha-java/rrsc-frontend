import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectDropdown from './ProjectDropdown.jsx';
import { ProjectContext } from '../context/ProjectContext.jsx';

const COMMON_NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/management', label: 'Management' },
  { to: '/members', label: 'Members' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const { currentProject } = useContext(ProjectContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const navRefs = useRef([]);

  useEffect(() => {
    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initial animation
    if (headerRef.current) {
      headerRef.current.classList.add('animate-slide-down');
    }

    // Stagger nav link animations
    navRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.classList.add('animate-fade-in');
        }, index * 100);
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>{`
        /* Header animations */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mobileSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .mobile-menu-enter {
          animation: mobileSlide 0.3s ease-out;
        }
        
        /* Hover animations */
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #fca5a5;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 80%;
        }
        
        .nav-link.active::after {
          width: 100%;
        }
        
        .logo-bounce {
          transition: transform 0.3s ease;
        }
        
        .logo-bounce:hover {
          transform: scale(1.1) rotate(5deg);
        }
        
        .hamburger-line {
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger-open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .mobile-nav-link {
          transition: all 0.2s ease;
        }
        
        .mobile-nav-link:hover {
          transform: translateX(8px);
        }
      `}</style>

      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-800 shadow-lg transition-all duration-300 ${
          isScrolled ? 'shadow-2xl bg-opacity-95 backdrop-blur-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-6">
              <div className="logo-bounce bg-red-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg cursor-pointer shadow-md hover:shadow-lg">
                RR
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {COMMON_NAV.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    ref={el => navRefs.current[index] = el}
                    className={({ isActive }) =>
                      `nav-link text-white hover:text-red-200 px-3 py-2 text-sm font-medium ${
                        isActive ? 'text-red-200 active' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                {/* Project Navigation */}
                {currentProject?.extraNav?.map((nav, index) => (
                  <NavLink
                    key={nav.slug}
                    to={`/project/${nav.slug}`}
                    ref={el => navRefs.current[COMMON_NAV.length + index] = el}
                    className={({ isActive }) =>
                      `nav-link text-white hover:text-red-200 px-3 py-2 text-sm font-medium ${
                        isActive ? 'text-red-200 active' : ''
                      }`
                    }
                  >
                    {nav.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Desktop Project Dropdown */}
              <div className="hidden md:block transform transition-all duration-300 hover:scale-105">
                <ProjectDropdown />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden bg-red-700 p-2 rounded text-white hover:bg-red-600 transform transition-all duration-300 hover:scale-110 ${
                  isMobileMenuOpen ? 'hamburger-open' : ''
                }`}
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <div className="hamburger-line w-full h-0.5 bg-white"></div>
                  <div className="hamburger-line w-full h-0.5 bg-white"></div>
                  <div className="hamburger-line w-full h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 mobile-menu-enter' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="border-t border-red-700 py-4">
              <div className="space-y-2">
                {COMMON_NAV.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `mobile-nav-link block px-4 py-3 text-white hover:bg-red-700 rounded-lg ${
                        isActive ? 'bg-red-700 text-red-200' : ''
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                {/* Mobile Project Navigation */}
                {currentProject?.extraNav?.map((nav, index) => (
                  <NavLink
                    key={nav.slug}
                    to={`/project/${nav.slug}`}
                    className={({ isActive }) =>
                      `mobile-nav-link block px-4 py-3 text-white hover:bg-red-700 rounded-lg ${
                        isActive ? 'bg-red-700 text-red-200' : ''
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${(COMMON_NAV.length + index) * 50}ms` }}
                  >
                    {nav.label}
                  </NavLink>
                ))}
              </div>
              
              {/* Mobile Project Dropdown */}
              <div className="mt-4 pt-4 border-t border-red-700">
                <ProjectDropdown />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
