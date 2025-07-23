import React from 'react';

export default function PageHeader({ title }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-center py-8 px-4 rounded-b-3xl mb-12 shadow-lg">
      <img
        src="/logo.png"
        alt="EhabGM Logo"
        className="w-20 h-20 rounded-2xl mx-auto mb-4 bg-white p-1 shadow-md"
      />
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
    </header>
  );
}