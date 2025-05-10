import React, { useState } from "react";
import hadithData from "../data/hadithData";
import { filterData } from "../pages/filterData"; 
import { FaFilter } from "react-icons/fa";
import { BookOpen } from "lucide-react";

// Ensure that filterData is an array and map it correctly
const filterList = Array.isArray(filterData) ? [...new Set(filterData.map((item) => item.title))] : [];

const NotesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterContent = filterData.find((item) => item.title === selectedFilter);

  return (
    <section>
      {/* Filter Section */}
      <div>
        <h2>🧭 Filter Content</h2>
        <div>
          <FaFilter className="text-xl" />
          <span>Filter</span>
        </div>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="">Select Filter</option>
          {filterList.length > 0 && filterList.map((filter, idx) => (
            <option key={idx} value={filter}>
              {filter}
            </option>
          ))}
        </select>

        {filterContent && (
          <div>
            <h3>{filterContent.title}</h3>
            {filterContent.image && <img src={filterContent.image} />}
            <p>{filterContent.content}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notes; // Export the NotesPage component
