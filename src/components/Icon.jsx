import React from "react";
import DuaIcon from "../assets/DUA.png";
import AkhlaqIcon from "../assets/AKHLAQ.png";

const Icon = ({ category }) => {
  const icons = {
    Dua: <img src={DuaIcon} alt="Dua Icon" className="w-20 h-20 mx-auto" />,
    Akhlaq: <img src={AkhlaqIcon} alt="Akhlaq Icon" className="w-20 h-20 mx-auto" />,
    // Add more icons here
  };

  return <div>{icons[category]}</div>;
};

export default Icon;
