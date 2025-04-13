import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CtaSection from '../components/home/CtaSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const HomePage = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } 
    }
  }, [location.hash]);    
  
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