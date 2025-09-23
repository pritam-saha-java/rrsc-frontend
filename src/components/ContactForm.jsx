import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => { console.log('send message', data); reset(); };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-md">
      <input {...register('name')} placeholder="Your name" className="w-full p-2 rounded bg-white/5" />
      <input {...register('email')} placeholder="Email" className="w-full p-2 rounded bg-white/5" />
      <textarea {...register('message')} placeholder="Message" className="w-full p-2 rounded bg-white/5" />
      <button type="submit" className="px-4 py-2 rounded bg-rr-red">Send</button>
    </form>
  );
}
