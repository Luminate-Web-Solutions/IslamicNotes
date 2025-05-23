import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-[#112250] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-emerald-800 pt-4">
       <Link to="/" className="flex items-center gap-2">
         <FontAwesomeIcon icon={faBookOpen} className="text-white text-2xl" />
         <span className="text-xl font-bold text-white">Islamic Notes</span>
       </Link>
       

        <div className="flex gap-5 text-xl">
          <div className="mt-2">
  <Link to="/privacy" className="underline text-gray-300 hover:text-white">Privacy Policy</Link>
</div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border-[#112250] text-white  hover:text-blue-500"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="border-[#112250] text-white hover:text-blue-500"><FaYoutube /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="border-[#112250] text-white hover:text-blue-500"><FaWhatsapp /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border-[#112250] text-white hover:text-blue-500"><FaFacebookF /></a>
        </div>
      </div>
      <div className="text-center text-sm text-white mt-4 py-6 bg-[#112250]">
        <div>
          © {new Date().getFullYear()} Islamic Notes. All rights reserved.
        </div>
        <div className="mt-1">
          Designed by <span className="font-medium">Luminate Web Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
