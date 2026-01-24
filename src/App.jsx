import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/hero/home.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'

const App = () => {
  return (
    <div className='bg-[#050505] w-full h-screen itens-center justify-center flex-col'>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />

    </div>
  )
}

export default App