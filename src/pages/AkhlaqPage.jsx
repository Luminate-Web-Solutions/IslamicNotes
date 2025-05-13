import React from "react";

const AkhlaqPage = () => (
  <section className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
    <div className="bg-gradient-to-br from-white to-emerald-50 shadow-lg rounded-3xl p-8 max-w-6xl w-full">
      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8 font-serif">
        🧠 Akhlaq (Good Character)
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="/AKHLAQ.png"
            alt="Akhlaq"
            className="rounded-2xl shadow-md w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-800 text-[17px] leading-relaxed">
          <p>
            Akhlaq in Islam refers to noble character and good manners. It includes honesty, humility,
            patience, forgiveness, and generosity. A Muslim is expected to model these values in daily life.
          </p>
          <p>
            The Prophet Muhammad ﷺ said: “I was sent to perfect good character.”
            It’s a central pillar of the faith, not just an optional bonus.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-700 mb-2">🌟 Why Akhlaq Matters</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Builds trust and unity in society</li>
              <li>Reflects true faith and sincerity</li>
              <li>Earns rewards in both worlds</li>
            </ul>
          </div>

          </div>
        </div>
      </div>
   
  </section>
);

export default AkhlaqPage;
