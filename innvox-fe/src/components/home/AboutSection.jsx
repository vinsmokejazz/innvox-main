import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-right">
            <h2>About Technical Club</h2>
            <p>
              Welcome to the Technical Club of K.S. Institute of Technology, where innovation meets opportunity. 
              We are a community of passionate tech enthusiasts dedicated to fostering technical excellence and 
              collaborative learning.
            </p>
            <p>
              Our club provides a platform for students to explore, learn, and grow in various technical domains 
              including software development, artificial intelligence, cybersecurity, and more. Through workshops, 
              hackathons, and collaborative projects, we aim to bridge the gap between academic knowledge and 
              real-world applications.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="about-stats animate-left">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technical Domains</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Monthly Workshops</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Learning Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 