// src/pages/HadithCategory.jsx
import { useParams } from "react-router-dom";
import hadithData from "../data/hadithData"; // adjust if needed

const HadithCategory = () => {
  const { category } = useParams();

  const filteredHadith = hadithData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[#112250] capitalize mb-6">
        {category} Hadith
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHadith.length > 0 ? (
          filteredHadith.map((item, index) => (
            <div key={index} className="bg-[#112250] text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm italic mb-4">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">No Hadith found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default HadithCategory;
