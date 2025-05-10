import React from "react";
import DuaDrawing from "../assets/DUA.png";
import AkhlaqDrawing from "../assets/AKHLAQ.png"; // Example drawing for Akhlaq


const Drawing = ({ category }) => {
  const drawings = {
      Dua: <img src={DuaDrawing} alt="Dua" className="w-full max-w-md mx-auto rounded-xl" />,
    Akhlaq: <img src={AkhlaqDrawing} alt="Akhlaq" className="w-full max-w-md mx-auto rounded-xl" />,

    
  };

  return <div className="category-drawing">{drawings[category]}</div>;
};

export default Drawing;
