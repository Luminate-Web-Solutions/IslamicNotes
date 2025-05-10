import React, { useState } from "react";
import hadithData from "../data/hadithData";
import filterData from "../pages/filterData"; // Ensure this path is correct
import { FaFilter } from "react-icons/fa";
import { BookOpen } from "lucide-react";

const Notes = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  
  // Ensure filterData is an array
  const filterList = Array.isArray(filterData) ? [...new Set(filterData.map((item) => item.title))] : [];

  // Find filter content based on the selected filter
  const filterContent = filterData.find((item) => item.title === selectedFilter);

  return (
    <section className="min-h-screen px-4 sm:px-10 py-16 text-green-400 bg-cover bg-no-repeat bg-fixed">
      <section className="bg-white py-10 px-4 space-y-12">
        {/* 🧭 Filter Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-emerald-800 mb-4">🧭 Filter Content</h2>
          <div className="flex items-center text-emerald-800 ml-auto">
            <FaFilter className="text-xl mr-2" />
            <span className="text-sm font-medium">Filter</span>
          </div>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option value="">Select Filter</option>
            {filterList.length > 0 && filterList.map((filter, idx) => (
              <option key={idx} value={filter}>
                {filter}
              </option>
            ))}
          </select>

          {filterContent && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-bold text-emerald-800">{filterContent.title}</h3>
              {filterContent.image && (
                <img
                  src={filterContent.image}
                  alt={filterContent.title}
                  className="my-4 w-full max-h-64 object-cover rounded-xl"
                />
              )}
              <p className="text-gray-700">{filterContent.content}</p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Notes;
