import React from "react";
import { motion } from "framer-motion";
import AkhlaqImg from "../assets/AKHLAQ.png"; 

const Akhlaq = () => {
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
            src={AkhlaqImg}
            alt="Akhlaq Illustration"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-emerald-800">Akhlaq</h1>
          <p className="mb-6 text-lg leading-relaxed text-emerald-700">
            Akhlaq (good character) is the cornerstone of Islamic teachings. The Prophet Muhammad ﷺ was known for his beautiful character, and Muslims are encouraged to follow in his footsteps by being honest, kind, forgiving, and respectful in all dealings.
          </p>

          {/* Animated Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Honesty", color: "from-emerald-400 to-emerald-600" },
              { label: "Kindness", color: "from-green-300 to-green-500" },
              { label: "Patience", color: "from-teal-300 to-teal-600" },
              { label: "Forgiveness", color: "from-lime-400 to-lime-600" },
            ].map((trait, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl shadow-lg p-4 text-white bg-gradient-to-br ${trait.color} text-center font-semibold text-lg`}
              >
                {trait.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Akhlaq;
