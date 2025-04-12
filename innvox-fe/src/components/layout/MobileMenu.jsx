import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/events"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-primary hover:text-primary/80"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 