import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ query, setQuery }) => {
  const navigate = useNavigate();

  const pdfList = [
    { name: 'Aap ka Mustaqbil Aap ke Hath mein', file: 'note1.pdf' },
    { name: 'Amaanat', file: 'note2.pdf' },
    { name: 'Apni Terbiat Kaise Karein', file: 'note3.pdf' },
    // Add the rest here
  ];

  const filtered = pdfList.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (file) => {
    setQuery('');
    navigate(`/read/${file}`);
  };

  // Categories list
  const categories = [
    'Resources', 'Hadeeths', 'The Holy Quran', 'Salah / Prayer', 'Zakat / Islamic Taxes',
    'Prophet Mohammed (pbuh)', 'Marriage', 'Women in Islam', 'Children Corner',
    'Ramadan', 'Funerals', 'Hajj', 'Islamic Beliefs', 'Islamic Ethics',
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white shadow-md px-4 py-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Logo / Title */}
        <div className="text-3xl sm:text-4xl font-extrabold text-green-700 tracking-wide font-serif">
          Islamic
          <Link to="/notes" className="text-green-400 hover:text-green-500 transition-colors duration-200">
            Notes
          </Link>
        </div>

        {/* Search Bar */}
        <div className="sm:w-1/2 flex-1 relative flex justify-center">
          <input
            type="text"
            placeholder="Search Topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {query && filtered.length > 0 && (
            <ul className="absolute top-full mt-1 w-full max-w-md bg-white border border-green-200 rounded shadow-md z-50">
              {filtered.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(item.file)}
                  className="cursor-pointer px-4 py-2 hover:bg-green-100 text-green-700"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4">
          {[ 
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/notes', label: 'Notes' },
            { to: '/contact', label: 'Contact Us' },
            { to: '/categories', label: 'Categories' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-green-700 px-3 py-2 rounded-md text-lg font-medium hover:bg-green-100"
            >
              {link.label}
            </Link>
          ))}

        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
