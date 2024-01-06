import React from 'react';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonals';
import About from '../components/About';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;

