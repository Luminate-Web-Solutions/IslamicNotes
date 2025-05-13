import React from 'react';
import hadithData from '../data/hadithData'; 

const CategoriesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Hadith Categories</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hadithData.map((hadith, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#112250]">{hadith.title}</h2>
            <p className="text-gray-700 mt-2">{hadith.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
