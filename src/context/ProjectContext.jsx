import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

/**
 * Default projects data (replace with API fetch in production)
 * Each project can define extraNav items which will be injected into the navbar.
 */
const DEFAULT_PROJECTS = [
  {
    id: 1,
    key: 'red-riders-club',
    name: 'Red Riders Sports Club',
    theme: { primary: '#ff0044', secondary: '#000000', gradient: 'linear-gradient(135deg,#ff0044,#000000)' },
    // extra pages that should appear in navbar when this project is selected
    extraNav: [
      { slug: 'live-scoring', label: 'Live Scoring' },
      { slug: 'live-stream', label: 'Live Stream' }
    ]
  },
  {
    id: 2,
    key: 'red-riders-management',
    name: 'Red Riders Managements',
    theme: { primary: '#d64545', secondary: '#111111', gradient: 'linear-gradient(135deg,#d64545,#111111)' },
    extraNav: [
      { slug: 'clients', label: 'Our Clients' },
      { slug: 'gallery', label: 'Gallery' }
    ]
  },
  {
    id: 3,
    key: 'red-riders-complex',
    name: 'Red Riders Sports Complex',
    theme: { primary: '#c71f1f', secondary: '#000', gradient: 'linear-gradient(135deg,#c71f1f,#000)' },
    extraNav: [
      { slug: 'book-court', label: 'Book Court' },
      { slug: 'payment-history', label: 'Payments' }
    ]
  }
];

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [currentProject, setCurrentProject] = useState(null);

  // load selected project from localStorage on start
  useEffect(() => {
    const raw = localStorage.getItem('rr_selected_project');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        // validate found id against default projects (simple safety)
        const found = DEFAULT_PROJECTS.find(p => p.id === parsed.id);
        if (found) {
          setCurrentProject(found);
          applyTheme(found);
        } else {
          setCurrentProject(DEFAULT_PROJECTS[0]);
          applyTheme(DEFAULT_PROJECTS[0]);
        }
      } catch {
        setCurrentProject(DEFAULT_PROJECTS[0]);
        applyTheme(DEFAULT_PROJECTS[0]);
      }
    } else {
      setCurrentProject(DEFAULT_PROJECTS[0]);
      applyTheme(DEFAULT_PROJECTS[0]);
    }
  }, []);

  // Example: how you would fetch projects from backend
  // useEffect(() => {
  //   fetch('/api/projects').then(r=>r.json()).then(data => setProjects(data));
  // }, []);

  const applyTheme = (project) => {
    // apply CSS variables so entire UI can use them
    if (!project || !project.theme) return;
    const { primary, secondary } = project.theme;
    document.documentElement.style.setProperty('--rr-primary', primary);
    document.documentElement.style.setProperty('--rr-secondary', secondary);
    // optionally app-level gradient var
    document.documentElement.style.setProperty('--rr-gradient', project.theme.gradient || `linear-gradient(135deg, ${primary}, ${secondary})`);
  };

  const changeProject = (projectId) => {
    const p = projects.find(x => x.id === Number(projectId));
    if (!p) return;
    setCurrentProject(p);
    localStorage.setItem('rr_selected_project', JSON.stringify({ id: p.id }));
    applyTheme(p);
    // You may also want to emit analytics, refresh caches, or re-fetch user permissions here.
  };

  return (
    <ProjectContext.Provider value={{ projects, currentProject, changeProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
