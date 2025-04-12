import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Consistent with header's navLinkClass and dropdown styles
  const mobileLinkClass = "text-white text-lg hover:bg-gray-900  hover:underline text-shadow-glow px-4 py-2 rounded-md transition-all duration-200";

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-white hover:bg-gray-800 transition-all duration-200"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black shadow-lg py-4 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/events"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/blog"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Login button matching desktop style */}
              {/* <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md text-md font-medium
                  bg-white text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                  h-10 px-4 py-2 mt-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link> */}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;