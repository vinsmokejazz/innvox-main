import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tech Club</h3>
            <p>Empowering the next generation of tech innovators through education, collaboration, and hands-on experience.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Programs</h3>
            <ul className="footer-links">
              <li><Link to="/programs/web-dev">Web Development</Link></li>
              <li><Link to="/programs/ai-ml">AI & Machine Learning</Link></li>
              <li><Link to="/programs/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/programs/data-science">Data Science</Link></li>
              <li><Link to="/programs/mobile-dev">Mobile Development</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Tech Street, Innovation Hub<br />City, State 12345</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@techclub.com">info@techclub.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tech Club. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;