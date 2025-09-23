import React, { useState, useMemo } from 'react';

const SAMPLE_MEMBERS = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  role: i % 3 === 0 ? 'Player' : 'Staff',
  img: `https://picsum.photos/seed/member${i + 1}/300/300`
}));

export default function MembersGallery() {
  const [query, setQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = useMemo(() => {
    return SAMPLE_MEMBERS.filter(m =>
      (roleFilter === 'All' || m.role === roleFilter) &&
      m.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, roleFilter]);

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search members" className="px-3 py-2 rounded bg-white/5 flex-1" />
        <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="px-3 py-2 rounded bg-white/5">
          <option>All</option>
          <option>Player</option>
          <option>Staff</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(m => (
          <div key={m.id} className="bg-white/5 rounded overflow-hidden">
            <img src={m.img} alt={m.name} className="w-full h-36 object-cover" />
            <div className="p-2">
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-white/70">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
