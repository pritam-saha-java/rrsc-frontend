import React from 'react';

export default function LiveStreaming({ project }) {
  return (
    <div className="p-4 bg-white/5 rounded">
      <h2 className="text-xl font-semibold">Live Streaming — {project?.name}</h2>
      <div className="mt-3 w-full aspect-video bg-black/60 flex items-center justify-center rounded">Embedded stream goes here</div>
    </div>
  );
}
