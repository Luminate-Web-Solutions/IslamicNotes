import React from "react";


const SalahPage = () => (
  <section className="p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto my-10">
    <h1 className="text-3xl font-bold mb-6 text-center">🕌 Salah (Prayer)</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <img
           src="/SALAH.png"
          alt="Salah"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      <div className="space-y-4">
        <p>
          Salah is the daily connection between a Muslim and Allah. It's performed five times a day and was the first obligation established after belief.
        </p>
        <p>
          It involves physical actions and spiritual devotion, reminding us of our purpose and relationship with our Creator.
        </p>

        <h2 className="text-xl font-semibold mt-4">🕋 Key Points of Salah</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Five daily prayers</li>
          <li>Facing the Qiblah (Ka'bah)</li>
          <li>Must be done in a state of Taharah (purity)</li>
        </ul>

        </div>
    </div>
  </section>
);

export default SalahPage;
