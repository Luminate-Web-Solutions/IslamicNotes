import React from 'react';
import {
  FaLeaf, FaLightbulb, FaUsers, FaBookOpen,
  FaClock, FaGlobe, FaRegLightbulb, FaShieldAlt, FaHeadset
} from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="max-w-10xl mx-auto px-6 py-16 bg-white shadow-2xl rounded-3xl mt-12 relative overflow-hidden animate-fade-in-up">
        <div className="absolute top-[-30px] left-[-30px] text-green-100 text-[7rem] opacity-10 rotate-12 select-none pointer-events-none">
          🌿
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#112250] mb-4 tracking-tight font-serif">
          About <span className="text-blue-900">Us</span>
        </h2>
        <p className="text-center text-blue-900 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          Learn more about our mission, vision, and core values.
        </p>

        <div className="text-[#112250] text-base sm:text-lg leading-7 space-y-6 font-serif px-2 sm:px-10">
          <p className="transition-opacity duration-700 delay-100 animate-fade-in">
            We aim to provide high-quality Islamic resources accessible to all, no matter where they are.
          </p>
          <p className="transition-opacity duration-700 delay-300 animate-fade-in">
            Our platform brings together authentic information, intuitive navigation, and a beautiful user experience.
          </p>
          <p className="transition-opacity duration-700 delay-500 animate-fade-in">
            Join us in spreading knowledge and understanding through verified sources and easy-to-use content.
          </p>

          {/* Core Values */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:grid-cols-3  max-w-6xl mx-auto mt-4 text-center">
               
            <li className="flex flex-col items-center space-y-2 animate-slide-up-fade">
              <FaLeaf className="text-3xl text-blue-900" />
              <span className="font-semibold">Sincerity</span>
            </li>
            <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-200">
              <FaLightbulb className="text-3xl text-blue-900" />
              <span className="font-semibold">Wisdom</span>
            </li>
            <li className="flex flex-col items-center space-y-2 animate-slide-up-fade delay-400">
              <FaUsers className="text-3xl text-blue-900" />
              <span className="font-semibold">Responsibility</span>
            </li>
          </ul>

          <p className="transition-opacity duration-700 delay-700 animate-fade-in">
            Be part of our growing community and help build a legacy of learning and enlightenment.
          </p>

          <p className="transition-opacity duration-700 delay-900 animate-fade-in text-xl font-semibold text-center mt-8">
            Let's grow together in knowledge and understanding.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/notes"
            className="inline-block bg-[#112250] text-white py-3 px-8 rounded-full text-lg shadow-md hover:bg-white hover:text-[#112250] transition"
          >
            Explore Notes
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="max-w-10xl mx-auto px-6 py-16 bg-white shadow-2xl rounded-3xl mt-12 relative overflow-hidden animate-fade-in-up">
        <div className="absolute top-[-30px] left-[-30px] text-green-100 text-[7rem] opacity-10 rotate-12 select-none pointer-events-none">
          🌿
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#112250] mb-6 tracking-tight font-serif">
          Why Choose <span className="text-blue-900">Us</span>
        </h2>
        <p className="text-center text-blue-900 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          Discover the benefits of using our platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 max-w-6xl mx-auto font-serif">
          {[
            { title: 'Authentic Content', desc: 'Our materials are verified and based on authentic sources.', icon: FaBookOpen },
            { title: 'Time Saving', desc: 'Easily access valuable content without the need to search elsewhere.', icon: FaClock },
            { title: 'Global Access', desc: 'Reach our content from anywhere in the world.', icon: FaGlobe },
            { title: 'User Friendly', desc: 'Designed with simplicity and ease-of-use in mind.', icon: FaRegLightbulb },
            { title: 'Trusted Platform', desc: 'Built with integrity and community trust.', icon: FaShieldAlt },
            { title: 'Support Available', desc: 'We’re here to help you when you need us.', icon: FaHeadset },
          ].map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col  items-center text-center space-y-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300"
            >
              <Icon className="text-4xl text-blue-900" />
              <h3 className="text-xl font-semibold text-[#112250]">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
