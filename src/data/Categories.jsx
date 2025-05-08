import React from "react";
import { useLocation } from "react-router-dom";
import { hadithData } from "../data/hadithData";
import { motion } from "framer-motion";
import HadithFlashcards from "../components/HadithFlashcards";

// Custom hook to get query params
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Categories = () => {
  const query = useQuery();
  const filter = query.get("filter") || "";

  // Filter hadiths by category or title (case-insensitive)
  const filteredData = hadithData.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const category = item.category?.toLowerCase() || "";
    const search = filter.toLowerCase();
    return title.includes(search) || category.includes(search);
  });

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          No Hadiths Found
        </h2>
        <p className="text-emerald-600">
          No Hadith flashcards match: <strong>{filter}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-emerald-50 text-emerald-900">
      <h1 className="text-3xl font-bold text-center mb-8">
        Hadiths for: <span className="text-emerald-700">{filter || "All Categories"}</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((hadith, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <HadithFlashcards data={hadith} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
