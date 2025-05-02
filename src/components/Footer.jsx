import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-50 text-green-900 py-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-green-200 pt-4">
        {/* Left Logo */}
        <div className="text-base font-medium">
          <span className="font-semibold text-green-700">IslamicNotes</span>
          <span className="text-green-500">.in</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-green-600 transition">HOME</Link>
          <Link to="/notes" className="hover:text-green-600 transition">NOTES</Link>
          <Link to="/about" className="hover:text-green-600 transition">ABOUT</Link>
          <Link to="/contact" className="hover:text-green-600 transition">CONTACT US</Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-xs text-green-700 border-t border-green-100 pt-3">
        designed by Luminate Web Solutions
      </div>
    </footer>
  );
};

export default Footer;
