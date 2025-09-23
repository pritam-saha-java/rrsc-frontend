import React from 'react';
import MembersGallery from '../components/MembersGallery.jsx';
import EventsTimeline from '../components/EventsTimeline.jsx';
import ContactForm from '../components/ContactForm.jsx';
import LiveScoring from '../components/LiveScoring.jsx';
import LiveStreaming from '../components/LiveStreaming.jsx';

export default function SportsClubPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="text-white/80">Club history, mission and vision go here...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Management</h2>
        <p className="text-white/80">Photos & profiles of core team...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Members</h2>
        <MembersGallery />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Events</h2>
        <EventsTimeline />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Live Scoring</h2>
        <LiveScoring />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Live Streaming</h2>
        <LiveStreaming />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
}
