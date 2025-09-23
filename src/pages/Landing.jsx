import React from 'react';
import SectionCard from '../components/SectionCard.jsx';
import { FaFutbol, FaUsers, FaBuilding } from 'react-icons/fa';

export default function Landing() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Red Riders</h1>
        <p className="mt-2 text-white/80">Choose a section to continue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SectionCard to="/club" icon={<FaFutbol />} title="Sports Club" subtitle="Club members, live scoring & streaming" />
        <SectionCard to="/managements" icon={<FaUsers />} title="Managements" subtitle="Management firm & clients" />
        <SectionCard to="/complex" icon={<FaBuilding />} title="Sports Complex" subtitle="Book courts, payments & admin" />
      </div>
    </section>
  );
}
