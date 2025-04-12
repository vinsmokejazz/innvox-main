import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <div className="space-y-20 py-20">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};

export default HomePage; 