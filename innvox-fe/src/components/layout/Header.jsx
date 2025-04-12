import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black dark:bg-gray-900 shadow-sm z-50">
      <div className="container h-full">
        <div className="h-full flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Tech Club
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header; 