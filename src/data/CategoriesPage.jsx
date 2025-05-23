import React from 'react';
import { useParams } from "react-router-dom";
import hadithData from '../data/hadithData'; 

const CategoriesPage = () => {
    const { type } = useParams();
     const contentMap = {
    hadith: {
      title: "Hadith Categories",
      data: hadithData,
    },
    quran: {
      title: "Qur'an Insights",
      data: [
        {
          title: "Surah Al-Fatiha",
          description: "The Opening chapter of the Qur'an emphasizing mercy and guidance.",
        },
        {
          title: "Surah Al-Baqarah",
          description: "The longest surah covering laws, ethics, and divine signs.",
        },
      ],
    },
    literature: {
      title: "Islamic Literature",
      data: [
        {
          title: "Ilm ki Ahmiyat",
          description: "The importance of knowledge in Islam.",
        },
        {
          title: "Islamic Leadership",
          description: "Qualities and responsibilities of Islamic leaders.",
        },
      ],
    },
  };

  const content = contentMap[type];

  return (
   <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#112250]">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
