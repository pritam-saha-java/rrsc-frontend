import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionCard({ to, title, subtitle, icon }) {
  return (
    <Link to={to} className="block rounded-lg p-6 shadow-lg bg-white/5 hover:bg-white/7 transition">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-white/70">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
