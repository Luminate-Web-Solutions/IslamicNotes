import React from 'react';

const About = () => {
  return (
    <section id="About" className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl mt-10">

      
      <h2 className="text-4xl font-bold text-center text-green-800 mb-4">About Us</h2>
      <p className="text-center text-green-600 text-lg mb-8">
        Spreading knowledge, nurturing faith — one note at a time.
      </p>

      <div className="text-green-900 text-md leading-7 space-y-6">
        <p>
          <strong>IslamicNotes.in</strong> is a platform dedicated to preserving and sharing authentic Islamic knowledge 
          through curated notes, resources, and insights. Whether you're a student of knowledge, a teacher, or a seeker on 
          the path of Deen, our goal is to make learning accessible and meaningful.
        </p>

        <p>
          We understand that today's busy world often distances us from traditional study circles. Our solution? 
          Modern, organized, and concise Islamic notes — available anytime, anywhere.
        </p>

        <p>
          Each note is crafted with care, reflecting the principles of sincerity (<em>Ikhlaas</em>), responsibility 
          (<em>Zimmedari</em>), and wisdom (<em>Hikmah</em>). We aim to assist individuals, Jamaats, and communities in 
          strengthening their spiritual connection and understanding of Islam.
        </p>

        <p>
          Join us on this journey of reflection, revival, and responsibility — because <strong>your future is in your hands</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
