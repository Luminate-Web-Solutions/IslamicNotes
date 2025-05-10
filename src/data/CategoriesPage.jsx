import React, { useState } from "react";
import HadithFlashcards from "../components/HadithFlashcards"; 
import { FaFilter } from "react-icons/fa";
import hadithData from "../data/hadithData"; 
import { useLocation } from 'react-router-dom';

const categoryList = [...new Set(hadithData.map((item) => item.category))];


const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredHadiths = selectedCategory
    ? hadithData.filter((item) => item.category === selectedCategory)
    : hadithData;

  return (
    <section className="bg-white py-10 px-4">
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 w-full max-w-4xl mx-auto">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="text-emerald-800 px-4 py-2 rounded-lg border border-green-500 w-full sm:w-auto text-center focus:outline-green-800 focus:ring-5 focus:ring-emerald-600"
        >
          <option value="">All Categories</option>
          {categoryList.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="flex items-center text-emerald-800 ml-auto">
          <FaFilter className="text-xl mr-2" />
          <span className="text-sm font-medium">Filter by Category</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredHadiths.map((item, index) => (
          <HadithFlashcards key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default  CategoriesPage;
