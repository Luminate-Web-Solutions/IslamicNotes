import React, { useState, useEffect } from "react";

const Hero = ({ bgImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Change the background image every 5 seconds with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        setFade(true);
      }, 500); // transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  if (!bgImages.length) {
    return <p className="text-center py-8 text-gray-600">No images available</p>;
  }

  return (
   <section
  className={`relative bg-cover bg-center bg-no-repeat rounded-xl w-full h-screen text-center text-white transition-opacity duration-700 ease-in-out ${
    fade ? "opacity-100" : "opacity-0"
  }`}
  style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 rounded-xl bg-gray-900 bg-opacity-50"></div>

  {/* Content container */}
  <div className="relative z-9 h-full flex flex-col justify-center items-center text-center">
    <h1 className="text-3xl text-white sm:text-5xl font-bold mb-4">
      Discover, Read & Share Authentic Islamic Knowledge
    </h1>
    <p className="text-lg text-white sm:text-xl mb-6 max-w-2xl">
      Islamic Notes is your source for verified Islamic content ,
      easy to access, and always growing with your contributions.
    </p>
    <a
      href="/Notes"
      className="bg-[#112250] text-white px-6 py-3 rounded-full shadow hover:text-white hover:bg-blue-900 transition"
    >
      Explore Now
    </a>
  </div>
</section>

  );
};

export default Hero;
