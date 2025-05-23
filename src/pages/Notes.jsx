import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import filterData from "../pages/filterData";
import { FaFilter } from "react-icons/fa";
import { BookOpen } from "lucide-react";

const BASE_URL = "http://localhost:3000"; // Change if needed

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/notes`);
        setNotes(response.data);
      } catch (err) {
        setError("Failed to load notes.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const filterList = Array.isArray(filterData)
    ? [...new Set(filterData.map((item) => item.title))]
    : [];

  const filterContent = filterData.find((item) => item.title === selectedFilter);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl text-[#112250] font-bold mb-2">Explore Islamic Notes</h2>
        <p className="text-lg text-[#112250]">Browse and learn from authentic Islamic sources.</p>
        <input
          type="text"
          placeholder="Search notes..."
          className="mt-6 px-7 py-3 rounded-md border border-blue-400 w-full max-w-md text-center focus:outline-[#112250] focus:ring-3 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-[#112250]">Loading notes...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, idx) => (
              <div
                key={idx}
                className="bg-white border text-[#112250] border-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute top-4 right-4 text-[#112250] opacity-50">
                  <BookOpen className="text-2xl text-[#112250]" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-[#112250]">{note.title}</h3>
                <p className="text-sm mb-4 leading-relaxed text-[#112250]">{note.description}</p>

                <button
                  onClick={() => openPDF(note.pdf)}
                  className="mt-auto bg-[#112250] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Read More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-[#112250]">No notes found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Notes;
