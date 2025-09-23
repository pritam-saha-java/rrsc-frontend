import React from 'react';

export default function PaymentHistory({ project }) {
  return (
    <div className="p-4 bg-white/5 rounded">
      <h2 className="text-xl font-semibold">Payments — {project?.name}</h2>
      <p className="text-white/80 mt-2">Payment history, receipts and filters.</p>
    </div>
  );
}
