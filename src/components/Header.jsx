import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import hadithData from '../data/hadithData';

const Header = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
 const navigate = useNavigate();
  const categories = [...new Set(hadithData.map(h => h.category))];

  // Dummy search data – replace with your actual notes or items
  const data = [
    { name: "Aap ka Mustaqbil Aap ke Hath mein", file: "/assets/note1.pdf" },
    { name: "Amaanat", file: "/assets/note2.pdf" },
    { name: "Zakat Guide", file: "/assets/note3.pdf" },
  ];

  const handleSelect = (file) => {
    window.location.href = file;
    setQuery(""); // Clear search after selecting
  };


  
  useEffect(() => {
    if (query.trim()) {
      setFiltered(
        data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFiltered([]);
    }
  }, [query]);

  return (
    <header className="bg-[#112250] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
       
      {/* Logo */}
<Link to="/" className="flex items-center gap-2">
  <FontAwesomeIcon icon={faBookOpen} className="text-white text-2xl" />
  <span className="text-xl font-bold text-white">Islamic Notes</span>
</Link>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm uppercase font-medium tracking-wide">
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className=" text-white hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500">
            Contact
          </Link>
          <Link to="/notes" className="text-white hover:text-blue-500">
            Notes
          </Link>
      <div className="relative group">
  <span className="text-white hover:text-blue-500 cursor-pointer uppercase text-sm font-medium tracking-wide">
    Categories
  </span>
 <ul className="absolute hidden group-hover:block bg-white text-black rounded-md mt-2 py-2 shadow-lg w-40 z-50">
  {categories.map((category, index) => (
    <li key={index}>
      <Link
        to={`/categories/${category.toLowerCase()}`}
        className="block px-4 py-2 hover:text-blue-500"
      >
        {category}
      </Link>
    </li>
  ))}
</ul>

</div>



        </nav>

        {/* Search */}
        <div className="relative w-full max-w-sm">
  <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5 pointer-events-none" />
  <input
    type="text"
    placeholder="Search..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-full rounded-full pl-10 pr-4 py-2 text-black placeholder-gray-600 focus:outline-none"
  />
  {query && filtered.length > 0 && (
    <ul className="absolute z-50 bg-white text-black mt-2 rounded shadow w-full max-h-60 overflow-auto">
      {filtered.map((item, idx) => (
        <li
          key={idx}
          onClick={() => handleSelect(item.file)}
          className="px-4 py-2 hover:bg-emerald-100 cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  )}
</div>
      </div>
    </header>
  );
};

export default Header;
