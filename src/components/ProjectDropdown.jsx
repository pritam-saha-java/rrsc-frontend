import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext.jsx';

export default function ProjectDropdown() {
  const { projects, currentProject, changeProject } = useContext(ProjectContext);

  return (
    <div className="flex items-center gap-3">
      <select
        className="bg-white/8 text-white px-3 py-1 rounded"
        value={currentProject?.id ?? ''}
        onChange={(e) => changeProject(e.target.value)}
      >
        {projects.map(p => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <div className="text-sm text-white/80">
        {currentProject ? currentProject.name : 'No project'}
      </div>
    </div>
  );
}
