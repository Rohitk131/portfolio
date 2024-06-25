
import React from 'react';
import Hero from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Chancer from '../Components/Chancer'
export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-green-400 overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <Hero />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full z-10">
        
        <h1 className='text-4xl text-white font-extralight'>Hi, I'm <span className='font-bold'>Rohit!</span></h1>
        <div className='pr-10'>
        <Chancer/>
        </div>
        <img src="/rohit.png" alt="Vercel Logo" className="h-[800px]" />
      </div>
    </main>
  );
}
