import React from 'react';
import BookingForm from '../components/BookingForm.jsx';

export default function SportsComplexPage(){
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold">Book Our Sports Court</h2>
        <p className="text-white/80">Select date/time and make payment</p>
      </section>
      <BookingForm />
    </div>
  );
}
