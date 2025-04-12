import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection /><br></br>
      <AboutSection /><br></br>
      <FeaturesSection /><br></br>
      <CtaSection /><br></br>
    </div>
  );
};

export default HomePage; 