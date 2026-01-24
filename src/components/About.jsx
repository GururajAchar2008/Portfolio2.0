import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 scroll-smooth scroll-mt-10 min-h-screen w-full h-[80%] flex-col items-center justify-center bg-[#050505]"
    >
      <h1 className="text-gray-300 text-center pt-20 font-bold text-4xl underline decoration-blue-500">
        About Me
      </h1>
      <div className="bg-black  w-full h-auto flex-col items-center justify-center mt-2 p-10 pl-30 pr-30 gap-10">
        <p className="text-xl font-bold text-gray-400 text-center">
          I have more than 2 years of experience in website and webapp
          development, I am a developer who loves turning creative ideas into
          functional and elegant websites. My goal is to combine aesthetics with
          seamless user experience, building digital solutions that leave a
          lasting impression. Take a look at my work and see how I can help
          bring your vision to life.
        </p>
        <div className='w-full h-auto flex items-center justify-center mt-10'>
          <button className="bg-blue-500 text-white  font-bold text-xl p-3 rounded-lg mt-5 hover:bg-blue-700">
            <a href="#contact">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About