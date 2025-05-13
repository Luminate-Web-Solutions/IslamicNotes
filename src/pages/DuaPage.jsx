import React from "react";

const DuaPage = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">🙏 Dua (Supplication)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Image */}
      <div>
        <img
          src="/images/dua.png"  // Image from public folder
          alt="Dua"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-4">
        <p>
          Dua is an essential part of Islamic practice. It is the act of calling upon Allah for help, guidance, and support in times of need.
        </p>
        <p>
          The Prophet Muhammad ﷺ emphasized the power of Dua, saying: "Dua is the essence of worship."
        </p>

        <h2 className="text-xl font-semibold mt-4">🌙 Key Points of Dua</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Must be done with sincerity and belief</li>
          <li>Can be made in any language</li>
          <li>Fosters a personal connection with Allah</li>
        </ul>
      </div>
    </div>
  </section>
);

export default DuaPage;
