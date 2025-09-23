import React from 'react';

export default function GenericProjectPage({ project, slug }) {
  return (
    <div className="p-4 bg-white/5 rounded">
      <h2 className="text-xl font-semibold">{slug} — {project?.name}</h2>
      <p className="text-white/80 mt-2">This is a generic page for project-specific content.</p>
    </div>
  );
}
