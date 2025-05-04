import React from 'react';
import { Link } from 'react-router-dom';

const headingToFileMap = {
  "Aap ka Mustaqbil Aap ke Hath mein": "note1.pdf",
  "Amaanat": "note2.pdf",
  "Apni Terbiat Kaise Karein": "note3.pdf",
  "Badr - Youmul Furqan PART-1": "note4.pdf",
  "Badr - Youmul Furqan PART-2": "note5.pdf",
  "Bahami Taluqaat Part-1": "note6.pdf",
  "Bahami Taluqaat Part-2": "note7.pdf",
  "Bahami Taluqaat Part-5": "note8.pdf",
  "Dastoor Jamaat": "note9.pdf",
  "Dawate Deen": "note10.pdf",
  "Duae Ibrahim AS PART-1": "note11.pdf",
  "Duae Ibrahim AS PART-2": "note12.pdf",
  "Hajj ka Paigham Ummate Muslimah ke Naam": "note13.pdf",
  "Hum per Quran ka Haq": "note14.pdf",
  "Ibrahim AS ki Zindagi se Chand Asbaaq": "note15.pdf",
  "Ijtemait": "note16.pdf",
  "Ikhlaas wo Niyyat": "note17.pdf",
  "Ilm aur Mutalia Ki Ahmiyat": "note18.pdf",
  "Ilm ki Ahmiyat aur Hamari Zimmedari": "note19.pdf",
  "Islami Khandan - Kamyab Mustaqbil": "note20.pdf",
  "Islamic Leadership": "note21.pdf",
  "Jahannam Se Najaat": "note22.pdf",
  "Jamaat - Aik Rukn Se Kiya Chahti Hai": "note23.pdf",
  "Jamaate Islami Ka Tariqe Kar": "note24.pdf",
  "Jamaati Nazam aur Hamara Rawayyah": "note25.pdf",
  "JIH hi kiyon": "note26.pdf",
  "Islamic Notes PART-1": "note27.pdf",
  "Islamic Notes PART-2": "note28.pdf",
};

const SearchBar = ({ query, headings }) => {
  const filteredHeadings = headings.filter((heading) =>
    heading.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-4">
      {query && (
        <ul className="space-y-2">
          {filteredHeadings.length > 0 ? (
            filteredHeadings.map((heading, index) => {
              const fileName = headingToFileMap[heading];
              return fileName ? (
                <li key={index}>
                  <Link
                    to={`/read/${fileName}`}
                    className="block px-4 py-2 bg-white text-green-800 font-semibold rounded-lg shadow-sm border border-green-200 hover:bg-green-100 transition duration-200 ease-in-out"
                  >
                    {heading}
                  </Link>
                </li>
              ) : (
                <li key={index} className="text-red-500 italic">
                  {heading} (PDF not found)
                </li>
              );
            })
          ) : (
            <p className="text-red-500 font-medium">No matching topics found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
