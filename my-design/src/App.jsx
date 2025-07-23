import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroPage/Hero';

const App = () => {
  return (
    <main className='overflow-x-hidden mr-3'>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;