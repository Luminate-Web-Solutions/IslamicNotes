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

  const filtered = pdfList.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (file) => {
    setQuery('');
    navigate(`/read/${file}`);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white  w-full shadow-md "
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto  lg:px-8 py-4 flex flex-col lg:flex-row  gap-5 sm:gap-x-9">

        
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
