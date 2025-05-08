import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Categories } from '../data/hadithData';

const Header = ({ query, setQuery }) => {
  const navigate = useNavigate();

  const pdfList = [
    { name: 'Aap ka Mustaqbil Aap ke Hath mein', file: 'note1.pdf' },
    { name: 'Amaanat', file: 'note2.pdf' },
    { name: 'Apni Terbiat Kaise Karein', file: 'note3.pdf' },
  ];

  const filtered = pdfList.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (file) => {
    setQuery('');
    navigate(`/read/${file}`);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white w-full shadow-md "
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-y-5 sm:gap-x-9">

        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-extrabold tracking-wide font-serif flex items-center space-x-1 no-underline hover:no-underline"
        >
          <span className="bg-gradient-to-r from-emerald-900 to-emerald-400 text-transparent bg-clip-text">
            Islamic Notes
          </span>
        </Link>

        {/* Search */}
        <div className="sm:w-1/2 flex-1 relative flex justify-center">
          <input
            type="text"
            placeholder="Search Topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md p-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          {query && filtered.length > 0 && (
            <ul className="absolute top-full mt-1 w-full max-w-md bg-white border border-emerald-200 rounded shadow-md z-50">
              {filtered.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(item.file)}
                  className="cursor-pointer px-4 py-2 hover:bg-emerald-100 text-emerald-700"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center sm:justify-start hover:no-underline gap-4 relative">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/notes', label: 'Notes' },
            { to: '/contact', label: 'Contact Us' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="bg-green-600 text-white px-3 py-2 rounded-md text-lg font-medium "
            >
              {link.label}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="bg-green-600 text-white px-3 py-2 rounded-md text-lg font-medium">
              Categories
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg border border-emerald-200 rounded-md mt-2 z-50 max-h-72 overflow-y-auto w-56">
              {Categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/categories?filter=${encodeURIComponent(cat)}`}
                  className="block px-4 py-2 text-emerald-700"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
