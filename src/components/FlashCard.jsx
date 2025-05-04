// FlashCard.jsx
import React from 'react';

const FlashCard = ({ title, text, source }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-green-400 hover:shadow-lg transition">
    <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-base italic mb-2">"{text}"</p>
    <p className="text-sm text-gray-500">Source: {source}</p>
  </div>
);

export default FlashCard;
