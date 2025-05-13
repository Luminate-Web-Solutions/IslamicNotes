import React from "react";

const ImanPage = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">🕌 Iman (Faith)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Image */}
      <div>
        <img
          src="/images/iman.png"  // Image from public folder
          alt="Iman"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-4">
        <p>
          Iman, or faith, is the cornerstone of a Muslim's belief. It is the unwavering belief in Allah, His angels, His Books, His messengers, the Day of Judgment, and Qadar (divine decree).
        </p>
        <p>
          The six pillars of Iman are essential to a Muslim's spiritual life and guide their relationship with Allah and His creation.
        </p>

        <h2 className="text-xl font-semibold mt-4">💫 Key Points of Iman</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Iman is essential to entering Paradise</li>
          <li>Faith strengthens through good deeds</li>
          <li>Belief in the unseen is a core tenet of Iman</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ImanPage;
