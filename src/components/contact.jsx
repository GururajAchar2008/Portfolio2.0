import React from 'react'

const contact = () => {
  return (
    <section
      id="contact"
      className="pt-10 scroll-smooth scroll-mt-10 min-h-screen w-full h-[80%] flex-col items-center justify-center bg-[#050505]"
    >
      <h1 className=" w-full text-4xl font-bold text-center pt-10 text-white underline decoration-blue-500">
        Get in <span className="text-blue-500">Touch</span>
      </h1>
      <div className="bg-black text-white w-full h-auto flex-col items-center justify-center mt-1 p-10 gap-10 flex">
        <form
          action="https://formspree.io/f/maqelazo"
          method="POST"
          className="w-[40%] h-auto flex flex-col items-center justify-center gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold text-xl p-3 rounded-lg mt-5 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default contact