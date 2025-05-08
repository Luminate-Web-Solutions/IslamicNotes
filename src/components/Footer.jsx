import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-emerald-50 text-emerald-900 py-8 px-4 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-emerald-200 pt-6">
        {/* Brand Name */}
        <motion.div 
          className="text-lg font-semibold"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         <span className="bg-gradient-to-r from-emerald-900 to-emerald-400 text-transparent bg-clip-text">
            Islamic Notes
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.nav
          className="flex gap-6 text-emerald-700 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition transform hover:scale-110">
            <FaYoutube />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition transform hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition transform hover:scale-110">
            <FaFacebookF />
          </a>
        </motion.nav>
      </div>

      {/* Credits */}
      <motion.div
        className="mt-6 text-center text-xs text-emerald-700 border-t border-emerald-100 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Designed by <span className="font-medium">Luminate Web Solutions</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
