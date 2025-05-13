import React from "react";


const AkhlaqPage = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">🧠 Akhlaq (Good Character)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Image */}
      <div>
        <img
          src="/AKHLAQ.png"
          alt="Akhlaq"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-4">
        <p>
          Akhlaq in Islam refers to noble character and good manners. It
          encompasses honesty, humility, patience, forgiveness, and generosity.
          A Muslim is expected to model these values in daily life.
        </p>
        <p>
          The Prophet Muhammad ﷺ said: “I was sent to perfect good character.”
          It’s a central pillar of the faith, not just an optional bonus.
        </p>

        {/* Subheading */}
        <h2 className="text-xl font-semibold mt-4">🌟 Why Akhlaq Matters</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Builds trust and unity in society</li>
          <li>Reflects true faith and sincerity</li>
          <li>Earns rewards in both worlds</li>
        </ul>

        {/* Optional iframe */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">🎥 Short Talk on Akhlaq</h3>
         
        </div>
      </div>
    </div>
  </section>
);

export default AkhlaqPage;
