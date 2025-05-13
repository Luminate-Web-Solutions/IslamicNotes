// src/pages/HadithCategory.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import hadithData from '../data/hadithData';

const HadithCategory = () => {
  const { categoryName } = useParams();
  const filteredHadiths = hadithData.filter(
    (hadith) => hadith.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-6">
      <Link to="/categories" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Categories
      </Link>
      <h1 className="text-3xl font-bold mb-4">Hadiths on {categoryName}</h1>

      {filteredHadiths.length === 0 ? (
        <p>No Hadiths found for this category.</p>
      ) : (
        <div className="space-y-6">
          {filteredHadiths.map((hadith) => (
            <div key={hadith.id} className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#112250]">{hadith.title}</h2>
              <p className="text-gray-700 mt-2">{hadith.description}</p>
              <p className="text-sm text-gray-500 mt-1 italic">{hadith.reference}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HadithCategory;
