import React, { useContext, useState, useRef, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext.jsx';

export default function ProjectDropdown() {
  const { projects, currentProject, changeProject } = useContext(ProjectContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProjectSelect = (projectId) => {
    changeProject(projectId);
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        .project-dropdown {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-dropdown:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(220, 38, 38, 0.5);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.2);
        }
        
        .project-dropdown.open {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(220, 38, 38, 0.7);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .dropdown-menu {
          background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          animation: dropdownSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .dropdown-item {
          color: #ffffff;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }
        
        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fca5a5;
          border-left: 3px solid #dc2626;
          transform: translateX(2px);
        }
        
        .dropdown-item.active {
          background: rgba(220, 38, 38, 0.2);
          color: #fca5a5;
          border-left: 3px solid #ef4444;
        }
        
        .project-label {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .chevron-icon {
          transition: transform 0.3s ease;
        }
        
        .chevron-icon.open {
          transform: rotate(180deg);
        }
        
        .project-badge {
          background: linear-gradient(135deg, #dc2626, #ef4444);
          color: white;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 2px 6px;
          border-radius: 10px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>

      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`project-dropdown flex items-center gap-3 px-4 py-2 rounded-lg min-w-48 ${
            isOpen ? 'open' : ''
          }`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <div className="flex items-center gap-2 flex-1 text-left">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="project-label text-sm truncate">
              {currentProject ? currentProject.name : 'Select Project'}
            </span>
            {currentProject && (
              <span className="project-badge">
                ACTIVE
              </span>
            )}
          </div>
          
          {/* Chevron Icon */}
          <svg
            className={`chevron-icon w-4 h-4 text-white/70 ${isOpen ? 'open' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 rounded-xl overflow-hidden z-50 dropdown-menu">
            <div className="py-2">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`dropdown-item w-full px-4 py-3 text-left flex items-center justify-between ${
                      currentProject?.id === project.id ? 'active' : ''
                    }`}
                    role="option"
                    aria-selected={currentProject?.id === project.id}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        currentProject?.id === project.id 
                          ? 'bg-red-400 animate-pulse' 
                          : 'bg-gray-400'
                      }`}></div>
                      <span className="font-medium">{project.name}</span>
                    </div>
                    
                    {currentProject?.id === project.id && (
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center">
                  <div className="text-white/60 text-sm">No projects available</div>
                  <div className="text-white/40 text-xs mt-1">
                    Add projects to get started
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="border-t border-white/10 px-4 py-3 bg-black/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">
                  {projects.length} project{projects.length !== 1 ? 's' : ''} total
                </span>
                {currentProject && (
                  <span className="text-red-400 font-medium">
                    Active: {currentProject.name}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
