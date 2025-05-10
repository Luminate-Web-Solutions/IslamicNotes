import React from "react";
import { useParams } from "react-router-dom";
import Icon from "../components/Icon"; // If you want to show an icon
import Drawing from "../components/Drawing"; // If you want to show an illustration
import AnimationWrapper from "../components/AnimationWrapper"; // If you want to animate the page content
import DuaImage from '../assets/DUA.png';


const DuaPage = () => {
  const { category } = useParams(); // To get the category name from URL params

  return (
    <div className="min-h-screen px-4 py-10 bg-emerald-50 text-emerald-900">
      <h1 className="text-3xl font-bold text-center mb-8">{category}</h1>

      <div className="text-center mb-8">
        {/* Display Category Icon */}
        <Icon category={category} />
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-4">
          {/* Here you can insert a description about the category */}
          Explanation about {category} content goes here. 
        </p>

        <div className="my-8">
          {/* Drawing or Illustration for explanation */}
          <Drawing category={category} />
        </div>

<div className="my-6 text-center">
  <img src={DuaImage} alt="Dua Illustration" className="mx-auto rounded-xl shadow-lg w-full max-w-md" />
</div>

        <AnimationWrapper>
          <div className="my-4 text-center">
            {/* Any additional content or animation */}
            <p>Learn more about {category}.</p>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default DuaPage;

