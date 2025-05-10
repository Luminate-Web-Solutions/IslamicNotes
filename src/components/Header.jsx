import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaFilter } from "react-icons/fa";
import img from '../assets/img.png';
import { useState, useRef, useEffect } from 'react';


const Header = ({ query, setQuery }) => {
  const navigate = useNavigate();

  const pdfList = [
    { name: 'Aap ka Mustaqbil Aap ke Hath mein', file: 'note1.pdf' },
    { name: 'Amaanat', file: 'note2.pdf' },
    { name: 'Apni Terbiat Kaise Karein', file: 'note3.pdf' },
    { name: 'Azaan', file: 'note4.pdf' },
    { name: 'Bachon ki Tarbiyat', file: 'note5.pdf' },
    { name: 'Bachon ki Tarbiyat 2', file: 'note6.pdf' },
    { name: 'Bachon ki Tarbiyat 3', file: 'note7.pdf' },
    { name: 'Bachon ki Tarbiyat 4', file: 'note8.pdf' },
    { name: 'Bachon ki Tarbiyat 5', file: 'note9.pdf' },
    { name: 'Bachon ki Tarbiyat 6', file: 'note10.pdf' },
    { name: 'Bachon ki Tarbiyat 7', file: 'note11.pdf' },
    { name: 'Bachon ki Tarbiyat 8', file: 'note12.pdf' },
    { name: 'Bachon ki Tarbiyat 9', file: 'note13.pdf' },
    { name: 'Bachon ki Tarbiyat 10', file: 'note14.pdf' },
    { name: 'Bachon ki Tarbiyat 11', file: 'note15.pdf' },
    { name: 'Bachon ki Tarbiyat 12', file: 'note16.pdf' },
    { name: 'Bachon ki Tarbiyat 13', file: 'note17.pdf' },
    { name: 'Bachon ki Tarbiyat 14', file: 'note18.pdf' },
    { name: 'Bachon ki Tarbiyat 15', file: 'note19.pdf' },
    { name: 'Bachon ki Tarbiyat 16', file: 'note20.pdf' },
    { name: 'Bachon ki Tarbiyat 17', file: 'note21.pdf' },
    { name: 'Bachon ki Tarbiyat 18', file: 'note22.pdf' },
    { name: 'Bachon ki Tarbiyat 19', file: 'note23.pdf' },  
    { name: 'Bachon ki Tarbiyat 20', file: 'note24.pdf' },
    { name: 'Bachon ki Tarbiyat 21', file: 'note25.pdf' },
    { name: 'Bachon ki Tarbiyat 22', file: 'note26.pdf' },
    { name: 'Bachon ki Tarbiyat 23', file: 'note27.pdf' },
    { name: 'Bachon ki Tarbiyat 24', file: 'note28.pdf' },
    { name: 'Bachon ki Tarbiyat 25', file: 'note29.pdf' },
    { name: 'Bachon ki Tarbiyat 26', file: 'note30.pdf' },
    { name: 'Bachon ki Tarbiyat 27', file: 'note31.pdf' },
    { name: 'Bachon ki Tarbiyat 28', file: 'note32.pdf' },
  ];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const filtered = pdfList.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (file) => {
    setQuery('');
    navigate(`/read/${file}`);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
return (
  <motion.header
    className="sticky top-0 z-50 bg-white w-full shadow-md"
    initial={{ y: -60, opacity: 0 }}
    
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-8  py-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-10">

    {/* Logo */}
    <Link to="/" className="flex items-center  justify-center text-center">
      <img src={img} width={80} height={40} alt="IslamicNotes Logo" className='flex items-center justify-center pb-10' />
      <span className="text-xl sm:text-2xl font-bold   font-serif bg-gradient-to-r from-emerald-900 to-emerald-400 text-transparent bg-clip-text">
        Islamic Notes
      </span>
    </Link>

    {/* Search */}
    <div className="flex-1 max-w-md w-full relative">
      <input
        type="text"
        placeholder="Search Topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 pl-4 border border-emerald-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200 placeholder:text-emerald-700"
      />
      {query && filtered.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-emerald-200 rounded-lg shadow-lg z-50 overflow-y-auto max-h-60">
          {filtered.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item.file)}
              className="cursor-pointer px-4 py-2 hover:bg-emerald-100 text-emerald-700 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Navigation */}
    <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
      {[
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/notes', label: 'Notes' },
        { to: '/contact', label: 'Contact Us' },
      ].map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-emerald-900 hover:bg-emerald-100 px-4 py-2 rounded-md font-medium transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>

  {/* Mobile Toggle Button */}
  <div className="lg:hidden flex justify-end px-4 py-2">
    <button
      className="text-white bg-emerald-600 focus:outline-none"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>
  </motion.header>

);
};
export default Header;
