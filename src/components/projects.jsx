import React from 'react'
import ProjectsBox from './projectsBox.jsx'

const projects = () => {
  return (
    <>
    <section id="projects" className='pt-10 scroll-smooth scroll-mt-10 h-auto w-full h-[80%] flex-col items-center justify-around bg-[#050505]'>
      <h1 className=' w-full text-4xl font-bold text-center pt-10 text-white'>Some of my featured <span className="text-blue-500">Projects</span></h1>
     <div className='bg-black text-white w-full h-auto flex-col items-center justify-center mt-10 p-10 gap-10'>
        <ProjectsBox name="GuruJI AI Chat Bot"
         image="/GuruJI_logo (1).jpg"
         description="The Guru JI AI is an AI Chat Bot built
                      using React Front-End with Tailwindcss using
                      the python's Flask Back-End. This Entire app is build 
                      usinf Openrouter's API key and integrated in the APP"
         link="https://gururajachar2008.github.io/Guru-JI-AI/" />

        <ProjectsBox name="Rock-Paper-Scissors Game"
         image="/Poject-2-Banner.png"
         description="This game is built with Python using the
                        Flask framework. It's primarily for fun 
                        and demonstration purposes."
         link="https://rock-paper-sissors-game-7dco.onrender.com/" />

          <ProjectsBox name="Task Manager"
         image="/Project-3-Banner.png"
         description="Task Manager is a clean and lightweight
                       React-based web application designed to 
                       help you manage your daily tasks with ease. 
                       You can quickly add new tasks, mark them as 
                       complete, and delete the ones you no longer need.
                        The interface is fast, responsive, and built
                         using modern tools like Vite + React, ensuring 
                         a smooth user experience. Perfect for students,
                          professionals, or anyone who wants a simple 
                          and effective way to stay on top of their work.
                          "
         link="https://gururajachar2008.github.io/Task_manager/" />

     </div>
     </section>
    </>
  )
}

export default projects