import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaMosque, FaPrayingHands } from "react-icons/fa";
import NamazImg from "../assets/images/NAMAZ.png"; // Add your namaz image here

const Namaz = () => {
  return (
    <div className="min-h-screen bg-white text-emerald-900 px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={NamazImg}
            alt="Namaz Illustration"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-50 rounded-xl shadow-lg p-6"
        >
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Namaz</h1>

          {/* Icons Row */}
          <div className="flex space-x-4 text-emerald-600 text-2xl mb-4">
            <FaMosque title="Mosque" />
            <FaClock title="Time" />
            <FaPrayingHands title="Prayer" />
          </div>

          {/* Iframe (e.g., Prayer Timings Video or Widget) */}
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/L1n43vr7M9k"
              title="Namaz Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg leading-relaxed text-emerald-700">
            Namaz (Salah) is the foundation of faith and the second pillar of Islam. It strengthens the connection with Allah, brings discipline into daily life, and is performed five times a day. Each prayer offers spiritual cleansing and peace of mind.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Namaz;
