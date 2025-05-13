import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import filterData from "../pages/filterData"; 
import { FaFilter } from "react-icons/fa";
import { BookOpen } from "lucide-react";

// Your existing Islamic Notes data
const notes = [
  {
    title: "Aap ka Mustaqbil Aap ke Hath mein",
    description: "A motivational reminder that your future is in your hands, shaped by your actions and choices",
    pdf: "./assets/note1.pdf"
  },
  {
    title: "Amaanat",
    description: "The concept of trust and responsibility in Islam, highlighting the importance of fulfilling duties and obligations",
    pdf: "./assets/note2.pdf"
  },
  // ... (include all your note objects here)
];

const Notes = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filterList = Array.isArray(filterData)
    ? [...new Set(filterData.map((item) => item.title))]
    : [];

  const filterContent = filterData.find((item) => item.title === selectedFilter);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPDF = (pdfUrl) => {
    navigate(`/read/${pdfUrl.split('/').pop()}`);
  };

  return (
    <section className="bg-white text-[#112250] py-16 px-4">

      {/* 📘 Islamic Notes Section */}
      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl text-[#112250] font-bold mb-2"> Explore Islamic Notes</h2>
        <p className="text-lg text-[#112250]">Browse and learn from authentic Islamic sources.</p>
        <input
          type="text"
          placeholder="Search notes..."
          className="mt-6 px-7 py-3 rounded-md border border-blue-400 w-full max-w-md text-center focus:outline-[#112250] focus:ring-3 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {filteredNotes.length > 0 ? (
         filteredNotes.map((note, idx) => (
           <div
  key={idx}
  className="relative bg-[#112250] text-white border border-blue-300 rounded-xl shadow-md p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
>
  <div className="absolute top-4 right-4 text-white opacity-50">
    <BookOpen className="text-2xl" />
  </div>

  <h3 className="text-lg font-semibold mb-3">{note.title}</h3>
  <p className="text-sm mb-4 leading-relaxed">{note.description}</p>

  <button
    onClick={() => openPDF(note.pdf)}
    className="mt-auto bg-white text-[#112250] font-medium text-sm px-5 py-2 rounded-full hover:bg-blue-100 transition"
  >
    Read More
  </button>
</div>
        ))
        ) : (
          <p className="text-center text-[#112250]">No notes found.</p>
        )}
      </div>
    </section>
  );
}
export default Notes;
