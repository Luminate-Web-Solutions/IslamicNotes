import React from "react";
import { motion } from "framer-motion";
import HadithData from "../data/HadithData"; 
import Notes from "../pages/Notes";
import img from "../hero.jpg"; // Adjust the path as necessary


const Home = () => {
  const hadithToShow = HadithData.slice(0, 3);
  return (
    <>
      {/* Hero Section */}
      <motion.section
        id="Home"
       className="relative bg-cover bg-center bg-no-repeat rounded-2xl text-center text-white py-32 px-4"
  style={{ backgroundImage: `url(${img})` }}
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gray-900 bg-opacity-50"></div> {/* Dark overlay */}
  
  <div className="relative z-10 max-w-5xl mx-auto">
    <h1 className="text-3xl text-white sm:text-5xl font-bold mb-4">
      Discover, Read & Share Authentic Islamic Knowledge
    </h1>
    <p className="text-lg text-white sm:text-xl mb-6">
      Islamic Notes is your source for verified Islamic content — free, easy to access, and always growing with your contributions.
    </p>
    <a
      href="/Notes"
      className="bg-[#112250]  text-white px-6 py-3 rounded-full shadow transition"
    >
      Explore Now
    </a>
  </div>
</motion.section>

        {/* Hadees Section */}
      <section className="py-16 bg-white px-4 text-center">
        <h2 className="text-2xl font-bold text-[#112250] mb-8">HADITH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hadithToShow.map((item, i) => (
            <div key={item.id || i} className="bg-[#112250] text-white p-6 rounded-xl">
              <p className="mb-4 text-sm italic">"{item.content}"</p>
              <p className="text-xs mb-3 text-emerald-200">{item.reference}</p>
              <a
                href="./data/hadithData"
                className="inline-block bg-white text-[#112250] px-5 py-2 rounded-full hover:bg-emerald-100"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
{/* Notes Section */}
<section className="py-16 bg-emerald-50 px-4 text-center">
  <h2 className="text-2xl font-bold text-[#112250] mb-8">NOTES</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[1, 2, 3, 4].map((_, i) => (
      <div key={i} className="bg-[#112250] p-4 rounded-xl shadow-md">
        <p className="text-white mb-3 text-sm font-medium">
          App se Pahunchayi Gayi ye Hadees Notes
        </p>
        <a
          href="#"
          className="inline-block bg-white text-[#112250] px-4 py-2 rounded-full "
        >
          Read More
        </a>
      </div>
    ))}
  </div>
</section>
    </>
  );
};

export default Home;
