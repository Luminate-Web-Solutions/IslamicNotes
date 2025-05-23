import React from "react";
import { Link } from "react-router-dom";
import hadithData from "../data/hadithData";
import notesData from "../data/notesData";

// Images
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

// Components
import Hero from "../components/Hero";

const bgImages = [hero1, hero2, hero3];

const Home = () => {
  const hadithToShow = Array.isArray(hadithData) ? hadithData.slice(0, 3) : [];

  return (
    <>
      {/* Hero Section with Carousel */}
        <Hero bgImages={bgImages} />
        <div>
          {/* You can add your content here */}
        </div>
   {/* HADITH Section */}
<section className="min-h-screen py-16 px-6 bg-white text-center  flex-col justify-center mt-10">
  <div className="max-w-7xl  mx-auto">
    <h1 className="text-3xl font-bold mb-12 capitalize text-[#112250]">
      Hadith
    </h1>
    <div className="grid grid-cols-1  text-white sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hadithToShow.map((item, index) => (
        <div
          key={index}
          className="bg-[#112250] text-white p-6 rounded-xl shadow-md flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white italic mb-3">
              {item.description?.slice(0, 100)}
            </p>
            <p className="text-xs  text-white mb-4">Category: {item.category}</p>
          </div>
         <Link
  to={`/hadith/${item.category?.toLowerCase()}`}
  className="inline-block bg-white text-[#112250] px-5 py-2 rounded-full hover:bg-blue-800 hover:text-white transition"
>
  Read More
</Link>

        </div>
      ))}
    </div>
  </div>
</section>

{/* NOTES Section */}
<section className="min-h-screen py-16 px-6 bg-gray-100 text-center mt-10">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-12 capitalize text-[#112250]">
      Notes
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(notesData) &&
        notesData.slice(0, 3).map((note, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#112250] mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                {note.description?.slice(0, 100)}...
              </p>
            </div>
            <a
              href={note.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-[#112250] text-white px-5 py-2 rounded-full hover:bg-blue-800 hover:text-white transition"
            >
              Read More
            </a>
          </div>
        ))}
    </div>
  </div>
</section>
    </>
  );
};

export default Home;
