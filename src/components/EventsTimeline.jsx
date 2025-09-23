import React from 'react';

export default function EventsTimeline(){
  const events = [
    { id:1, title:'State Tournament', date:'2025-09-01', desc:'Quarter finals' },
    { id:2, title:'Inter Club Friendly', date:'2025-08-15', desc:'Friendly match' }
  ];
  return (
    <div className="space-y-4">
      {events.map(e => (
        <div key={e.id} className="p-4 bg-white/5 rounded">
          <div className="flex justify-between">
            <div className="font-semibold">{e.title}</div>
            <div className="text-sm text-white/70">{e.date}</div>
          </div>
          <p className="text-white/80 mt-2">{e.desc}</p>
        </div>
      ))}
    </div>
  );
}
