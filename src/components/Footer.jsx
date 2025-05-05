import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-green-50 text-green-900 py-6 px-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-green-200 pt-4">
        {/* Left Logo */}
        <motion.div 
          className="text-base font-medium"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold text-green-700">IslamicNotes</span>
          <span className="text-green-500">Notes</span>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex space-x-6 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link to="/" className="hover:text-green-600 transition transform hover:scale-110">
            HOME
          </Link>
          <Link to="/notes" className="hover:text-green-600 transition transform hover:scale-110">
            NOTES
          </Link>
          <Link to="/about" className="hover:text-green-600 transition transform hover:scale-110">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-green-600 transition transform hover:scale-110">
            CONTACT US
          </Link>
          <Link to="/categories" className="hover:text-green-600 transition transform hover:scale-110">
            CATEGORIES
          </Link>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="mt-4 text-center text-xs text-green-700 border-t border-green-100 pt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        designed by Luminate Web Solutions
      </motion.div>
    </motion.footer>
  );
};

export default Footer;