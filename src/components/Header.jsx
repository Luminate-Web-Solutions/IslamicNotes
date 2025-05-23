import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import hadithData from "../data/hadithData";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const categories = [...new Set(hadithData.map((h) => h.category))];

  const data = [
    { name: "Aap ka Mustaqbil Aap ke Hath mein", file: "/assets/note1.pdf" },
    { name: "Amaanat", file: "/assets/note2.pdf" },
    { name: "Apni Terbiat Kaise Karein ", file: "/assets/note3.pdf" },
    { name: " Badr - Youmul Furqan PART-1", file: "/assets/note4.pdf" },
    { name: "Badr - Youmul Furqan PART-2 ", file: "/assets/note5.pdf" },
    { name: " Bahami Taluqaat Part-1", file: "/assets/note6.pdf" },
    { name: "Bahami Taluqaat Part-2 ", file: "/assets/note7.pdf" },
    { name: "Bahami Taluqaat Part-5 ", file: "/assets/note8.pdf" },
    { name: "Dastoor Jamaat ", file: "/assets/note9.pdf" },
    { name: "Dawate Deen ", file: "/assets/note10.pdf" },
    { name: "Duae Ibrahim AS PART-1 ", file: "/assets/note11.pdf" },
    { name: "Duae Ibrahim AS PART-2 ", file: "/assets/note12.pdf" },
    { name: " Hajj ka Paigham Ummate Muslimah ke Naam", file: "/assets/note13.pdf" },
    { name: "Hum per Quran ka Haq ", file: "/assets/note14.pdf" },
    { name: "Ibrahim AS ki Zindagi se Chand Asbaaq ", file: "/assets/note15.pdf" },
    { name: "Ijtemait ", file: "/assets/note16.pdf" },
    { name: " Ikhlaas wo Niyyat", file: "/assets/note17.pdf" },
    { name: "Ilm aur Mutalia Ki Ahmiyat ", file: "/assets/note18.pdf" },
    { name: "Ilm ki Ahmiyat aur Hamari Zimmedari ", file: "/assets/note19.pdf" },
    { name: " Islami Khandan - Kamyab Mustaqbil", file: "/assets/note20.pdf" },
    { name: "Islamic Leadership ", file: "/assets/note21.pdf" },
    { name: " Jahannam Se Najaat", file: "/assets/note22.pdf" },
    { name: "Jamaat - Aik Rukn Se Kiya Chahti Hai ", file: "/assets/note23.pdf" },
    { name: " Jamaate Islami Ka Tariqe Kar", file: "/assets/note24.pdf" },
    { name: "Jamaati Nazam aur Hamara Rawayyah ", file: "/assets/note25.pdf" },
    { name: " JIH hi kiyon", file: "/assets/note26.pdf" },
    { name: " Islamic Notes PART-1 ", file: "/assets/note27.pdf" },
    { name: " Islamic Notes PART-2", file: "/assets/note28.pdf" },
  ];

  const handleSelect = (file) => {
    window.location.href = file;
    setQuery("");
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-white justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex  text-white items-center gap-2">
          <FontAwesomeIcon icon={faBookOpen} className="text-white text-2xl" />
          <span className="text-xl font-bold text-white">Islamic Notes</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap text-white   hover:text-blue-300 gap-6 text-sm uppercase font-medium tracking-wide">
          <Link to="/" className="text-white hover:text-blue-300 cursor-pointer uppercase text-sm font-medium tracking-wide">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-300 cursor-pointer uppercase text-sm font-medium tracking-wide">About</Link>
          <Link to="/contact" className="text-white hover:text-blue-300 cursor-pointer uppercase text-sm font-medium tracking-wide">Contact</Link>
          <Link to="/notes" className="text-white hover:text-blue-300 cursor-pointer uppercase text-sm font-medium tracking-wide">Notes</Link>
          <div
            className="relative text-white inline-block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(true)}
          >
            <span className="text-white hover:text-blue-300 cursor-pointer uppercase text-sm font-medium tracking-wide">
              Categories
            </span>
            {isDropdownOpen && (
              <ul className="absolute left-0 bg-white text-black rounded-md mt-2 py-2 shadow-lg w-48 z-50 transition-all">
                <li>
                  <Link
                    to="/categories/hadith"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
                  >
                    Hadith
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/quran"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
                  >
                    Qur'an
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/literature"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
                  >
                    Literature
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Search */}
        <div className="relative w-full max-w-sm">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
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
