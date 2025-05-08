import React from 'react';
import { Outlet } from "react-router-dom";
import { useSearch } from '../context/SearchContext';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer'; 


const headings = [
  "Aap ka Mustaqbil Aap ke Hath mein", "Amaanat", "Apni Terbiat Kaise Karein",
  "Badr - Youmul Furqan PART-1", "Badr - Youmul Furqan PART-2", "Bahami Taluqaat Part-1",
  "Bahami Taluqaat Part-2", "Bahami Taluqaat Part-5", "Dastoor Jamaat", "Dawate Deen",
  "Duae Ibrahim AS PART-1", "Duae Ibrahim AS PART-2", "Hajj ka Paigham Ummate Muslimah ke Naam",
  "Hum per Quran ka Haq", "Ibrahim AS ki Zindagi se Chand Asbaaq", "Ijtemait",
  "Ikhlaas wo Niyyat", "Ilm aur Mutalia Ki Ahmiyat", "Ilm ki Ahmiyat aur Hamari Zimmedari",
  "Islami Khandan - Kamyab Mustaqbil", "Islamic Leadership", "Jahannam Se Najaat",
  "Jamaat - Aik Rukn Se Kiya Chahti Hai", "Jamaate Islami Ka Tariqe Kar", "Jamaati Nazam aur Hamara Rawayyah",
  "JIH hi kiyon", "Islamic Notes PART-1", "Islamic Notes PART-2"
];

const MainLayout = () => {
  const { query, setQuery } = useSearch();
  
  return (
    <div
    className="min-h-screen bg-repeat text-gray-900"
    style={{
      background:  "color: #f0f4f8",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
     
    }}
  >
      <div className="min-h-screen flex flex-col bg-white/40 text-green-900 border-b border-green-500 shadow-sm">
        <Header query={query} setQuery={setQuery} />

        <main className="flex-grow p-6 sm:p-10">
          <SearchBar query={query} headings={headings} />
          
          <Outlet />
        </main>

       
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
