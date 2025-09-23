import React from 'react';
export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-white/10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Red Riders — Built with ❤️
      </div>
    </footer>
  );
}
