import React from 'react';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto] tracking-tight">Upcoming Events</h1>
        
        {/* Event Card */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
          {/* Card Header with Gradient */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 px-6 py-4">
            <h2 className="text-2xl font-bold text-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto] tracking-tight">Inaugural of INNVOX Club</h2>
          </div>
          
          {/* Card Content */}
          <div className="p-6 text-gray-200 font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto]">
            <div className="flex flex-col md:flex-row mb-6">
              <div className="flex items-center mb-3 md:mb-0 md:mr-8">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>21st April 2025</span>
              </div>
              
              <div className="flex items-center mb-3 md:mb-0 md:mr-8">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>10:00 AM</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>KSIT Auditorium</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="mb-4 leading-relaxed">
                Join us for the official launch of INNVOX, the premier tech innovation club designed to foster creativity and technical excellence among students.
                Experience demonstrations of cutting-edge projects, networking opportunities, and learn about upcoming workshops and hackathons.
              </p>
              
              <button className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;