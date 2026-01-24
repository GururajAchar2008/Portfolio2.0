import React from 'react'

const home = () => {
  return (
    <section id="home" className='bg-[#050505] scroll-smooth w-full h-screen flex-col items-center justify-around'>
      
      <div className='bg-[#050505] scroll-smooth w-full h-screen flex items-center justify-around'>
      <div className='text-center w-[45%]'>
        <h1 className='text-white text-6xl font-bold mb-4'>Gururaj <spam className="text-blue-400">Achar</spam></h1>
        <p className='text-gray-300 text-lg mb-8'>A passionate web developer crafting futuristic and elegant digital experiences. I turn complex problems into beautiful, intuitive designs. I also build webapps that solve real world problems</p>
        <a href="#skills" className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 duration-300'>My Skills</a>
      </div>
      <div className='w-[45%]'>
        <img src="/heroImage.png" alt="hero-img" className='animate-pulse w-full h-100'/>
      </div>
      </div>
    </section>
  )
}

export default home