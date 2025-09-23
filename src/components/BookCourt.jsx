import React from 'react';

export default function BookCourt({ project }) {
  return (
    <div className="p-4 bg-white/5 rounded">
      <h2 className="text-xl font-semibold">Book Court — {project?.name}</h2>
      <p className="text-white/80 mt-2">Court booking UI + payment integration will be placed here.</p>
    </div>
  );
}
