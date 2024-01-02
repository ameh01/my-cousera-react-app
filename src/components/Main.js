import React from 'react';
import HeroSection from './main/HeroSection';
import Highlights from './main/Highlights';
import Testimonials from './main/Testimonals';
import About from './main/About';

const Main = () => {
  return (
    <main>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
