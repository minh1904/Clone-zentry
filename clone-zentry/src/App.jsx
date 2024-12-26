import React from 'react';
import Hero from './Components/Hero';
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <div className="z-0 min-h-screen bg-slate-950"></div>
    </main>
  );
};

export default App;
