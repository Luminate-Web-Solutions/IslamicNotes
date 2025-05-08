import React from 'react';

const Contact = () => {
  return (
    <section id="Contact Us" className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl mt-10">

      <h2 className="text-4xl font-bold text-center text-green-800 mb-2">Contact Us</h2>
      <p className="text-center text-green-600 text-lg mb-8">
        Reach out for any queries or services. We're here to help!
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="lg:flex gap-10">
    
        </div>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-green-900">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-green-900">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              className="px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-semibold text-green-900">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Your message..."
            required
            className="px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-600"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
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
