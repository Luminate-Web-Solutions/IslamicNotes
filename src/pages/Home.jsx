import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaMobileAlt,
  FaUsers,
  FaFolderOpen,
  FaInfinity,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Authentic Resources",
    description:
      "All notes are based on Qur’an and authentic Hadith, verified by knowledgeable individuals to ensure trust and reliability.",
      icon: <FaBookOpen className="text-4xl text-emerald-600 mb-4" />,
    },
  {
    title: "Easy Access",
    description:
      "Access our content from any device, with smooth downloads and optimized mobile readability for a seamless experience.",
      icon: <FaMobileAlt className="text-4xl text-emerald-600 mb-4" />,
    },
  {
    title: "Community Driven",
    description:
      "Our platform grows with your contributions. Upload your notes, share your knowledge, and help others benefit.",
      icon: <FaUsers className="text-4xl text-emerald-600 mb-4" />,
    },
  {
    title: "Organized Topics",
    description:
      "Explore categorized notes by topic, speaker, or series for quick access to the material you're looking for.",
      icon: <FaFolderOpen className="text-4xl text-emerald-600 mb-4" />,
    },
  {
    title: "Free Forever",
    description:
      "Knowledge should be free. Our platform provides all materials without any charges, subscriptions, or ads.",
      icon: <FaInfinity className="text-4xl text-emerald-600 mb-4" />,
    },
  {
    title: "Safe & Private",
    description:
      "Your uploads and downloads are secure with us. We value privacy and don’t track or misuse any user data.",
      icon: <FaShieldAlt className="text-4xl text-emerald-600 mb-4" />,
    },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
  id="Home"
  className="py-20 px-6 bg-white rounded-2xl text-center text-emerald-800"

  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-5xl mx-auto text-white">
    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 drop-shadow-xl">
      Discover, Read & Share Authentic Islamic Knowledge
    </h1>
    <p className="text-lg sm:text-xl font-light mb-8 text-emerald-500">
      Islamic Notes is your source for verified Islamic content — free, easy to access, and always growing with your contributions.
    </p>
    <a
      href="/notes"
      className="inline-block bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition"
    >
      Browse Now
    </a>
  </div>
</motion.section>


      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 px-6 rounded-2xl bg-white text-emerald-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-emerald-700">
            Why Choose Us?
          </h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 shadow hover:shadow-md transition duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
