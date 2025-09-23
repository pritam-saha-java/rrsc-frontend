import React, { useContext } from 'react';
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

  return (
    <header className="py-3 px-4 bg-black/40 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
            RR
          </div>
          <div className="hidden md:flex gap-4">
            {COMMON_NAV.map(item => (
              <NavLink
                to={item.to}
                key={item.to}
                className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* dynamic project-specific nav items (appear only if a project is selected) */}
          {currentProject?.extraNav?.length > 0 && (
            <nav className="hidden md:flex gap-4 mr-4">
              {currentProject.extraNav.map(nav => (
                <NavLink
                  to={`/project/${nav.slug}`}
                  key={nav.slug}
                  className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
                >
                  {nav.label}
                </NavLink>
              ))}
            </nav>
          )}

          <ProjectDropdown />
        </div>
      </div>
    </header>
  );
}
