import React from "react";
import { motion } from "framer-motion";

const HadithFlashcards = ({ data }) => {
  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md border border-emerald-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-xl font-semibold text-emerald-800 mb-2"
        variants={titleVariants}
      >
        {data.title}
      </motion.h2>
      <p className="text-gray-800 mb-2">{data.text}</p>
      {data.category && (
        <p className="text-sm text-emerald-600 font-medium">
          Category: {data.category}
        </p>
      )}
      {data.source && (
        <p className="text-sm text-gray-500 italic mt-2">– {data.source}</p>
      )}
    </motion.div>
  );
};

export default HadithFlashcards;
