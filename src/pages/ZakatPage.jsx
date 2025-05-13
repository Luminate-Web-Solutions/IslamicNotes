import React from "react";

const ZakatPage = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">💰 Zakat (Charity)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Image */}
      <div>
        <img
          src="/images/zakat.png"  // Image from public folder
          alt="Zakat"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-4">
        <p>
          Zakat is one of the Five Pillars of Islam, and it is an obligatory act of charity for Muslims. It is meant to purify wealth and help those in need.
        </p>
        <p>
          The Prophet Muhammad ﷺ said: "Wealth is purified by Zakat." It is a way to redistribute wealth in society, ensuring the welfare of the less fortunate.
        </p>

        <h2 className="text-xl font-semibold mt-4">💡 Key Points of Zakat</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Obligatory for eligible Muslims</li>
          <li>It is 2.5% of one’s savings annually</li>
          <li>Helps those in poverty, orphans, and those in need</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ZakatPage;
