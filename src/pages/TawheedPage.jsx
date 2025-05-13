import React from "react";

const TawheedPage = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">🕋 Tawheed (Oneness of Allah)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Image */}
      <div>
        <img
          src="/images/tawheed.png"  // Image from public folder
          alt="Tawheed"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-4">
        <p>
          Tawheed is the foundation of a Muslim’s belief. It is the belief in the absolute oneness of Allah, and the rejection of any form of polytheism or associating partners with Allah.
        </p>
        <p>
          The declaration of Tawheed is to affirm that Allah is the sole Creator, Sustainer, and Ruler of the universe. There is none like Him, and He is beyond any comparison.
        </p>

        <h2 className="text-xl font-semibold mt-4">🔑 Key Points of Tawheed</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Central to Islamic faith</li>
          <li>Rejecting all forms of polytheism (Shirk)</li>
          <li>Affirming the uniqueness and sovereignty of Allah</li>
        </ul>
      </div>
    </div>
  </section>
);

export default TawheedPage;
