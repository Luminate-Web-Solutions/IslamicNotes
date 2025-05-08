import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BookOpen } from 'lucide-react';


const notes = [
  {
    title: "Aap ka Mustaqbil Aap ke Hath mein",
    description: "A motivational reminder that your future is in your hands, shaped by your actions and choices",
    pdf: "/assets/pdfs/note1.pdf"
  },
  {
    title: "Amaanat",
    description: "The concept of trust and responsibility in Islam, highlighting the importance of fulfilling duties and obligations",
    pdf: "/assets/pdfs/note2.pdf"
  },
  {
    title: "Apni Terbiat Kaise Karein",
    description: "Guidance on how to raise oneself with good morals and discipline, ensuring personal growth",
    pdf: "/assets/pdfs/note3.pdf"
  },
  {
    title: " Badr - Youmul Furqan PART-1",
    description: " The Battle of Badr, a pivotal event in Islamic history, marking a victory for truth over falsehood.",
    pdf: "/assets/pdfs/note4.pdf"
  },
  {
    title: "Badr - Youmul Furqan PART-2 ",
    description: "Continuation of the Battle of Badr, exploring its impact on the early Muslim community. ",
    pdf: "/assets/pdfs/note5.pdf"
  },
  {
    title: "Bahami Taluqaat Part-1 ",
    description: "A discussion on the importance of healthy, harmonious relationships in Islam, focusing on mutual respect. ",
    pdf: "/assets/pdfs/note6.pdf"
  },
  {
    title: "Bahami Taluqaat Part-2 ",
    description: " Further exploration of strengthening interpersonal bonds and resolving conflicts within relationships. ",
    pdf: "/assets/pdfs/note7.pdf"
  },
  {
    title: "Bahami Taluqaat Part-5 ",
    description: "  Deepening the understanding of maintaining long-lasting, positive relationships through compassion and trust.",
    pdf: "/assets/pdfs/note8.pdf"
  },
  {
    title: "Dastoor Jamaat ",
    description: " A look into the principles and organization of the Jamaat, focusing on communal discipline and unity. ",
    pdf: "/assets/pdfs/note9.pdf"
  },
  {
    title: " Dawate Deen",
    description: " The call to spread the message of Islam, emphasizing its role in guiding people toward righteousness.",
    pdf: "/assets/pdfs/note10.pdf"
  },
  {
    title: "Duae Ibrahim AS PART-1 ",
    description: "The first part of Prophet Ibrahim’s (AS) prayer, reflecting his unwavering faith in Allah. ",
    pdf: "/assets/pdfs/note11.pdf"
  },
  {
    title: " Duae Ibrahim AS PART-2",
    description: "The continuation of Prophet Ibrahim’s (AS) supplication, symbolizing devotion and reliance on Allah’s mercy ",
    pdf: "/assets/pdfs/note12.pdf"
  },
  {
    title: "Hajj ka Paigham Ummate Muslimah ke Naam ",
    description: "The message of Hajj as a spiritual journey for the Muslim Ummah, promoting unity and faith. ",
    pdf: "/assets/pdfs/note13.pdf"
  },
  {
    title: " Hum per Quran ka Haq",
    description: "The responsibility Muslims hold in understanding and practicing the teachings of the Quran in daily life. ",
    pdf: "/assets/pdfs/note14.pdf"
  },
  {
    title: "Ibrahim AS ki Zindagi se Chand Asbaaq ",
    description: "Lessons from the life of Prophet Ibrahim (AS), emphasizing trust in Allah and sacrifice for righteousness ",
    pdf: "/assets/pdfs/note15.pdf"
  },
  {
    title: "Ijtemait ",
    description: "The importance of community gatherings in Islam, fostering unity, learning, and mutual support. ",
    pdf: "/assets/pdfs/note16.pdf"
  },
  {
    title: " Ikhlaas wo Niyyat",
    description: "A focus on sincerity in intentions and actions, ensuring that all deeds are done for the sake of Allah. ",
    pdf: "/assets/pdfs/note17.pdf"
  },
  {
    title: " Ilm aur Mutalia Ki Ahmiyat",
    description: "The significance of knowledge and study in Islam as tools for personal and societal development. ",
    pdf: "/assets/pdfs/note18.pdf"
  },
  {
    title: " Ilm ki Ahmiyat aur Hamari Zimmedari",
    description: "The responsibility of acquiring and sharing knowledge for the betterment of the community. ",
    pdf: "/assets/pdfs/note19.pdf"
  },
  {
    title: " Islami Khandan - Kamyab Mustaqbil",
    description: " How an Islamic family structure and values lead to a successful and prosperous future. ",
    pdf: "/assets/pdfs/note20.pdf"
  },
  {
    title: " Islamic Leadership",
    description: "The principles of leadership in Islam, focusing on justice, integrity, and serving the community. ",
    pdf: "/assets/pdfs/note21.pdf"
  },
  {
    title: " Jahannam Se Najaat",
    description: " Seeking refuge from the punishment of Hell by adhering to righteous conduct and obedience to Allah. ",
    pdf: "/assets/pdfs/note22.pdf"
  },
  {
    title: " Jamaat - Aik Rukn Se Kiya Chahti Hai",
    description: " An exploration of the essential role each member plays in the collective strength and success of the Jamaat. ",
    pdf: "/assets/pdfs/note23.pdf"
  },
  {
    title: " Jamaate Islami Ka Tariqe Kar",
    description: " The methodology and approach of the Jamaat-e-Islami in promoting Islamic values and social change.",
    pdf: "/assets/pdfs/note24.pdf"
  },
  {
    title: " Jamaati Nazam aur Hamara Rawayyah",
    description: "Understanding the organizational system of the Jamaat and its impact on personal conduct and society. ",
    pdf: "/assets/pdfs/note25.pdf"
  },
  {
    title: " JIH hi kiyon",
    description: " Addressing the significance of the Islamic movement (JIH) and its purpose in achieving societal reform and justice.",
    pdf: "/assets/pdfs/note26.pdf"
  },
  {
    title: " Islamic Notes PART-1",
    description: "Continuation of Islamic teachings, expanding on the moral and ethical guidelines for Muslims. ",
    pdf: "/assets/pdfs/note27.pdf"
  },
  {
    title: "Islamic Notes PART-2 ",
    description: "A collection of essential Islamic teachings, focusing on foundational knowledge for daily living. ",
    pdf: "/assets/pdfs/note28.pdf"
  },
];


const NotesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  // Filter notes based on the search term
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleOpenPDF = (pdfUrl) => {
    setSelectedPDF(pdfUrl);
  };

  const closeModal = () => {
    setSelectedPDF(null);
  };

  const navigate = useNavigate();
  const openPDF = (pdfUrl) => {
    navigate(`/read/${pdfUrl.split('/').pop()}`); // Use the dynamic file name
  };

  return (
    <section
  id="notes"  
  className="min-h-screen px-4 sm:px-10 py-16 text-green-400 bg-cover bg-no-repeat bg-fixed"
  style={{
  
  }}
>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Explore Islamic Notes</h2>
        <p className="text-lg">Browse and learn from authentic Islamic sources.</p>
        <input
          type="text"
          placeholder="Search notes..."
          className="mt-6 px-9 py-4 rounded-lg border border-green-500 w-full max-w-md text-center focus:outline-green-800 focus:ring-5 focus:ring-emerald-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
      {filteredNotes.length > 0 ? (
          filteredNotes.map((note, idx) => (
            <div
            key={idx}
            className="relative bg-white border border-emerald-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Optional Book Icon */}
            <div className="absolute top-4 right-4 text-emerald-900">
  <BookOpen size={32} strokeWidth={1.5} className="opacity-13" />
</div>

          
            {/* Title */}
            <h3 className="text-xl font-bold text-emerald-700 mb-2 pr-6" >{note.title}</h3>
          
            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">{note.description}</p>
          
            {/* Button */}
            <button
              onClick={() => openPDF(note.pdf)}
              className="mt-auto bg-emerald-600 text-white text-sm px-5 py-2 rounded-md hover:bg-emerald-700 transition"
            >
              Read More
            </button>
          </div>
          
    ))
  ) : (
    <p className="text-center text-gray-800">No notes found.</p>
  )}
      </div>

      {/* Modal for PDF viewing */}
      {selectedPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-[90%] h-[90%] bg-white rounded-xl shadow-2xl overflow-hidden">
         

            <iframe
              src={selectedPDF}
              title="PDF Viewer"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  
  );
};
export default NotesSection;
