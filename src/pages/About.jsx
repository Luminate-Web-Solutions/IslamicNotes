import React from 'react';
import { FaLeaf, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="About"
      className="max-w-5xl mx-auto px-6 py-16 bg-white shadow-2xl rounded-3xl mt-12 relative overflow-hidden animate-fade-in-up"
    >
      {/* Decorative Leaf Icon */}
      <div className="absolute top-[-30px] left-[-30px] text-green-100 text-[7rem] opacity-10 rotate-12 select-none pointer-events-none">
        🌿
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-800 mb-4 tracking-tight font-serif">
        About <span className="text-green-600">Us</span>
      </h2>
      <p className="text-center text-green-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
        Spreading knowledge, nurturing faith — one note at a time.
      </p>

      <div className="text-green-900 text-base sm:text-lg leading-7 space-y-6 font-serif px-2 sm:px-10">
        <p className="transition-opacity duration-700 delay-100 animate-fade-in">
          <strong className="text-green-700">IslamicNotes.in</strong> is a community-driven platform dedicated to
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
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-green-800 text-center">
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade">
            <FaLeaf className="text-3xl text-green-600" />
            <span className="font-semibold">Sincerity (Ikhlaas)</span>
          </li>
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-200">
            <FaLightbulb className="text-3xl text-green-600" />
            <span className="font-semibold">Wisdom (Hikmah)</span>
          </li>
          <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-400">
            <FaUsers className="text-3xl text-green-600" />
            <span className="font-semibold">Responsibility (Zimmedari)</span>
          </li>
        </ul>

        <p className="transition-opacity duration-700 delay-700 animate-fade-in">
          Join our mission of learning, living, and leading with Islamic knowledge. Explore resources for yourself, your
          family, or your Jamaat — all in one place.
        </p>

        <p className="transition-opacity duration-700 delay-900 animate-fade-in text-green-700 font-semibold text-xl text-center mt-8">
          ✨ Let’s grow together — one note at a time!
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/notes"
          className="inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg shadow-md hover:bg-green-200 transition-all duration-300"
        >
          Explore Notes
        </a>
      </div>
    </section>
  );
};

export default About;
