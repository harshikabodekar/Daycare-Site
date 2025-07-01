import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full shadow-md">
     
      <div className="bg-purple-800 text-white text-sm flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center space-x-1">
            <span>(+1) 825 559 7862 (Mon to Sun: 6am–Midnight)</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span>info@clearwaterlearning.ca</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded">
            Join Our Waitlist Now !
          </button>
        </div>
      </div>

     
      <div className="bg-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Clearwater Logo" className="h-20 w-auto" />
        </div>
        <div className="flex space-x-8 font-medium text-sm text-black">
          
          <a  href="/" className="text-purple-700 border-b-2 border-purple-700 pb-1">Home</a>
          <a href="about-us" className="hover:text-purple-600">About Us</a>
          <a href="programs" className="hover:text-purple-600">Programs</a>
          <a href="#" className="hover:text-purple-600">News & Events</a>
          <a href="#" className="hover:text-purple-600">Careers</a>
          <a href="#" className="hover:text-purple-600">Contact Us</a>
          <a href="#" className="hover:text-purple-600">Find Us</a>

        </div>
      </div>
    </div>
  );
}
