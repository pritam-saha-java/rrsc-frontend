import React, { useState } from 'react';

export default function BookingForm(){
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // call booking API → then payment integration (Stripe / Razorpay)
    console.log('book', { date, slot });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-3">
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full p-2 rounded bg-white/5" />
      <select value={slot} onChange={e=>setSlot(e.target.value)} className="w-full p-2 rounded bg-white/5">
        <option value="">Select slot</option>
        <option>09:00 - 10:00</option>
        <option>10:00 - 11:00</option>
        <option>18:00 - 19:00</option>
      </select>
      <button className="px-4 py-2 rounded bg-rr-red">Proceed to Payment</button>
    </form>
  );
}
