import React from 'react';

const Contact = () => {
  return (
    <section id="Contact Us" className="relative max-w-8xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl mt-2">
      <h2 className="text-4xl font-semibold text-center text-[#112250] mb-2 tracking-tight font-serif">
        Contact <span className="text-blue-800">Us</span>
      </h2>
      <p className="text-center text-blue-800 text-lg mb-8">
        Reach out for any queries or services. We're here to help!
      </p>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-xl text-center">
            <div className="text-3xl text-blue-700 mb-2">📍</div>
            <h3 className="text-xl font-semibold text-[#112250] mb-1">Our Location</h3>
            <p className="text-sm text-gray-700">
              ABC , 1-111/B/1, ABC, ABC,
              ABC, ABC 0000000
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-xl text-center">
            <div className="text-3xl text-blue-700 mb-2">📞</div>
            <h3 className="text-xl font-semibold text-[#112250] mb-1">Phone Number</h3>
            <p className="text-sm text-gray-700">+91 xxxxxx</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-xl text-center">
            <div className="text-3xl text-blue-700 mb-2">✉️</div>
            <h3 className="text-xl font-semibold text-[#112250] mb-1">Email Address</h3>
            <p className="text-sm text-gray-700">ABC@sABC.in</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:col-span-2">
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
              <label htmlFor="phone" className="mb-2 font-semibold text-[#112250]">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                required
                className="px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
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
                className="bg-[#112250] hover:bg-[#0e1c3b] text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>


    </section>
  );
};

export default Contact;
