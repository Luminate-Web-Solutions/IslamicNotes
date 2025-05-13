import React from 'react';
import { FaLeaf, FaLightbulb, FaUsers, FaUserShield,  FaHandsHelping } from 'react-icons/fa';
import { FaBookOpen, FaClock, FaGlobe,  FaAccessibleIcon, FaHeart } from 'react-icons/fa';
import { FaRegLightbulb, FaShieldAlt, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <>
    <section
      id="About"
      className="max-w-10xl mx-auto px-6 py-16 bg-white shadow-2xl rounded-3xl mt-12 relative overflow-hidden animate-fade-in-up"
    >
      {/* Decorative Leaf Icon */}
      <div className="absolute top-[-30px] left-[-30px] text-green-100 text-[7rem] opacity-10 rotate-12 select-none pointer-events-none">
        🌿
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#112250] mb-4 tracking-tight font-serif">
        About <span className="text-blue-900">Us</span>
      </h2>
      <p className="text-center text-blue-900 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
        Spreading knowledge, nurturing faith — one note at a time.
      </p>

      <div className="text-[#112250] text-base sm:text-lg leading-7 space-y-6 font-serif px-2 sm:px-10">
        <p className="transition-opacity duration-700 delay-100 animate-fade-in">
          <strong className="text-blue-900">IslamicNotes.in</strong> is a community-driven platform dedicated to
          sharing authentic Islamic knowledge through well-structured notes, reflections, and learning resources. Whether
          you're a curious learner or an experienced teacher, our content is built to guide and inspire.
        </p>

        <p className="transition-opacity duration-700 delay-300 animate-fade-in">
          In a fast-moving world, we bridge the gap between classical study and modern convenience. Our notes are designed
          to be short, relevant, and grounded in the timeless wisdom of Islam.
        </p>

        <p className="transition-opacity duration-700 delay-500 animate-fade-in">
          Every piece we publish is guided by values of:
        </p>

        {/* Icons & Values */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-[#112250] text-center">
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade">
            <FaLeaf className="text-3xl text-blue-900" />
            <span className="font-semibold">Sincerity (Ikhlaas)</span>
          </li>
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-200">
            <FaLightbulb className="text-3xl text-blue-900" />
            <span className="font-semibold">Wisdom (Hikmah)</span>
          </li>
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-400">
            <FaUsers className="text-3xl text-blue-900" />
            <span className="font-semibold">Responsibility (Zimmedari)</span>
          </li>
        </ul>

        <p className="transition-opacity duration-700 delay-700 animate-fade-in">
          Join our mission of learning, living, and leading with Islamic knowledge. Explore resources for yourself, your
          family, or your Jamaat — all in one place.
        </p>

        <p className="transition-opacity duration-700 delay-900 animate-fade-in text-[#112250] font-semibold text-xl text-center mt-8">
          ✨ Let's grow together — one note at a time!
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/notes"
          className="inline-block bg-[#112250] text-white py-3 px-8 rounded-full text-lg shadow-md   hover:text-white transition-all duration-300"
        >
          Explore Notes
        </a>
      </div>
    </section>
 
    {/* Why Choose Us Section */}
   
    <section className="max-w-10xl mx-auto px-6 py-16 bg-white shadow-2xl rounded-3xl mt-12 relative overflow-hidden animate-fade-in-up">
        {/* Decorative Leaf Icon */}
      <div className="absolute top-[-30px] left-[-30px] text-green-100 text-[7rem] opacity-10 rotate-12 select-none pointer-events-none">
        🌿
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#112250] mb-6 tracking-tight font-serif">
        Connect <span className="text-blue-900">With Us</span>
      </h2>
      <p className="text-center text-blue-900 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
        Your trusted source for concise, authentic, and impactful Islamic learning.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-[#112250] font-serif">
        <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
          <FaBookOpen className="text-4xl text-blue-900" />
          <h3 className="text-xl text-[#112250] font-semibold">Authentic Content</h3>
          <p>Our notes are rooted in Qur'an and Sunnah, verified by scholars.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
          <FaClock className="text-4xl  text-blue-900" />
          <h3 className="text-xl text-[#112250] font-semibold">Time-Saving</h3>
          <p>Quick, focused lessons tailored for your busy lifestyle.</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
          <FaGlobe className="text-4xl text-blue-900" />
          <h3 className="text-xl text-[#112250] font-semibold">Global Reach</h3>
          <p>Access Islamic knowledge anytime, anywhere — mobile & desktop ready.</p>
        </div>

  {/* User-Friendly Design */}
  <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
    <FaRegLightbulb className="text-4xl text-blue-900" />
    <h3 className="text-xl text-[#112250] font-semibold">User-Friendly Design</h3>
    <p>Clean, distraction-free UI that respects your reading experience.</p>
  </div>

  {/* Trusted Content */}
  <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
    <FaShieldAlt className="text-4xl text-blue-900" />
    <h3 className="text-xl text-[#112250] font-semibold">Trusted Content</h3>
    <p>Carefully curated Islamic knowledge from authentic and reliable sources.</p>
  </div>

  {/* Responsive Support */}
  <div className="flex flex-col items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300">
    <FaHeadset className="text-4xl text-blue-900" />
    <h3 className="text-xl text-[#112250] font-semibold">Responsive Support</h3>
    <p>Get help when you need it — quick responses and dedicated assistance.</p>
  </div>
</div>

    
        
   
    </section>
 </>
 );
};

export default About;
