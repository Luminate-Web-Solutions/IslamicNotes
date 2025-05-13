import React from 'react';

const Contact = () => {
  return (
    <section id="Contact Us" className="max-w-8xl mx-auto px-1 py-2 bg-white shadow-lg rounded-2xl mt-2">

      <h2 className="text-5xl font-semibold text-center text-[#112250] mb-2 tracking-tight font-serif">Contact <span className="text-blue-800">Us</span></h2>
      <div className="flex justify-center my-6">
  <iframe
    src="https://lottie.host/embed/6a9b8388-e1cf-4a80-8686-b196e5984b57/7X4qdovS0I.lottie"
    className="w-full max-w-xxl h-80 rounded-lg shadow-lg "
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

      <p className="text-center text-blue-800 text-lg mb-8">
        Reach out for any queries or services. We're here to help!
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="lg:flex gap-10">
    
        </div>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-[#112250]">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-[#112250]">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              className="px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-semibold text-[#112250]">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Your message..."
            required
            className="px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#112250] hover:bg-[#112250] text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
 
 {/* Map */}
 <div className="mt-12">
        <iframe
          title="SD Hub Location"
          className="w-full h-96 rounded-xl border-2 border-green-100"
          src="https://www.openstreetmap.org/export/embed.html?bbox=78.402%2C17.362%2C78.472%2C17.412&layer=mapnik&marker=17.382%2C78.437"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-12 text-center text-green-800">
        <hr className="my-6 border-green-100" />
        
       
      </div>
    </section>
  );
};

export default Contact;
