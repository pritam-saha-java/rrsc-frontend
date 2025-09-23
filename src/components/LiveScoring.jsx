import React from 'react';

export default function LiveScoring({ project }) {
  return (
    <div className="p-4 bg-white/5 rounded">
      <h2 className="text-xl font-semibold">Live Scoring — {project?.name}</h2>
      <p className="text-white/80 mt-2">Real-time match scores will appear here (ws / sse).</p>
      {/* integrate with your live scoring later */}
    </div>
  );
}
