import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroPage/Hero';

const App = () => {
  return (
    <main className='overflow-x-hidden mx-4'>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;