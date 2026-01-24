import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='scroll-smooth flex items-center justify-center w-full h-[20%]'>
      <div className='animate-pulse fixed -top-30 z-1 rotate-352 w-140 h-40 bg-none border-4  inset-shadow-indigo-500/50 border-blue-800 rounded-4xl shadow-[0_0_30px_40px_rgba(0,0,0,0.1)] bg-blue-800 shadow-blue-600/60'></div>
    <div className='fixed z-999 w-[95%] h-15 bg-[#52a3e683] shadow-[0_0_25px_10px_rgba(0,0,0,0.4)] shadow-blue-500/20 rounded-lg flex items-center justify-evenly px-10'>
      <div className='flex items-center w-[30%] h-full'>
       <p className="text-white text-xl font-bold">/ Guru <span className="text-blue-300">Codes /</span></p>
      </div>
      <div className='flex items-center justify-center w-[70%] h-full gap-15'>
        <a href="#home" className='text-white text-lg font-medium hover:text-blue-300 duration-300 cursor-pointer'>Home</a>
        <a href="#about" className='text-white text-lg font-medium hover:text-blue-300 duration-300 cursor-pointer'>About</a>
        <a href="#skills" className='text-white text-lg font-medium hover:text-blue-300 duration-300 cursor-pointer'>Skills</a>
        <a href="#projects" className='text-white text-lg font-medium hover:text-blue-300 duration-300 cursor-pointer'>Projects</a>
        <a href="#contact" className='text-white text-lg font-medium hover:text-blue-300 duration-300 cursor-pointer'>Contact</a>
      </div>
    </div>
    </div>

    </>
  )
}

export default Navbar