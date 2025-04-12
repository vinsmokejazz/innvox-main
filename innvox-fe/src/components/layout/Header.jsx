import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
      <div className="container h-full">
        <div className="h-full flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Tech Club</div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-primary">Join Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 