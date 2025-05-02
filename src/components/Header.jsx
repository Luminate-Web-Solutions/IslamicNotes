import { useAuth } from '../context/AuthContext';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ query, setQuery }) => {
  const { user, logout } = useAuth();

 // Base nav links
 const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/notes', label: 'Notes' },
];

// Only show Admin Panel if user is admin
if (user?.role === 'admin') {
  navLinks.push({ to: '/admin', label: 'Admin Panel' });
}

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-4">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        {/* Logo or Title */}
        <div className="text-3xl sm:text-4xl font-extrabold text-green-700 tracking-wide font-serif">
          IslamicNotes<span className="text-green-500">.in</span>
        </div>

           {/* Search Bar */}
           <div className=" sm:w-1/2 flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search Topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
     

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-green-700 px-3 py-2 rounded-md text-lg font-medium hover:bg-green-100"
            >
              {link.label}
            </Link>
          ))}

  {/* Login/Logout Button */}
  {user ? (
            <button
              onClick={logout}
              className="text-red-600 font-medium hover:underline"
            >
              Logout ({user.email})
            </button>
          ) : (
            <Link
              to="/login"
              className="text-green-700 px-3 py-2 rounded-md text-lg font-medium hover:bg-green-100"
            >
              Login
            </Link>
          )}

        </nav>
      </div>
    </header>
  );
};

export default Header;
