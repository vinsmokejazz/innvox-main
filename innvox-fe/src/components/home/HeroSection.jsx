import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to Tech Club</h1>
          <p>Empowering the next generation of tech innovators through education, collaboration, and hands-on experience.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Join Us</Link>
            {/* <Link to="/about" className="btn btn-secondary">Learn More</Link> */}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection; 