import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    if (!user) {
      showNotification('No user is currently logged in', 'warning');
      return;
    }

    try {
      await logout();
      showNotification('Logged out successfully', 'success');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      showNotification(
        error.message || 'Failed to logout. Please try again.',
        'error'
      );
      // If logout fails, we should still clear the user state
      navigate('/login');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Tech Club Logo" className="logo-img" />
            <span>Technical Club</span>
          </Link>
        </div>

        <div className="navbar-center">
          <h1 className="college-name">K.S. Institute of Technology</h1>
          <p className="college-address small-text">
            #15, Mallasandra, Bengaluru - 560109, Karnataka, India
          </p>
        </div>

        <div className="navbar-right">
          <div className="navbar-dropdown">
            <button className="navbar-item dropdown-trigger" onClick={toggleMore}>
              More
              <i className={`fas fa-chevron-${isMoreOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={`dropdown-menu ${isMoreOpen ? 'active' : ''}`}>
              <Link to="/about" className="dropdown-item">About</Link>
              <Link to="/events" className="dropdown-item">Events</Link>
              <Link to="/blog" className="dropdown-item">Blog</Link>
              <Link to="/gallery" className="dropdown-item">Gallery</Link>
              <Link to="/programs" className="dropdown-item">Programs</Link>
              <Link to="/resources" className="dropdown-item">Resources</Link>
              <Link to="/members" className="dropdown-item">Members</Link>
              <Link to="/community" className="dropdown-item">Community</Link>
              <Link to="/contact" className="dropdown-item">Contact</Link>
            </div>
          </div>
          <div className="auth-buttons">
            {user ? (
              <div className="buttons">
                <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
              </div>
            ) : (
              <div className="buttons">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-secondary">Sign Up</Link>
              </div>
            )}
          </div>
        </div>

        <button className="navbar-burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 