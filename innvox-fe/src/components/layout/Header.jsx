import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/tech-background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="header-content">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header; 