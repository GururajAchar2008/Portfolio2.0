import React from 'react'
import SkillsBox from './SkillsBox'

const skills = () => {
  return (
    <section id="skills" className='pt-10 croll-smooth scroll-mt-24 min-h-screen w-full h-[80%] flex-col items-center justify-around bg-[#050505]'>
      <h1 className='text-white text-4xl font-bold w-full text-center'>My <spam className='text-blue-500'>Skills</spam><br></br><spam className="text-shadow-blue-900 text-blue-950">Hover over the cards</spam></h1>
      <div className='mt-8 text-center w-full flex flex-wrap items-center justify-center gap-10 p-10'>
        <SkillsBox imageURL="/React-Logo-PNG.png" name="React" Discription="Building component-based interfaces, managing state, and creating fast, scalable front-end applications." />
        <SkillsBox imageURL="/flask-python-logo-png.png" name="Flask" Discription="Mastered Everything and Built APIs, authentication systems, database integration, and scalable web applications." />
        <SkillsBox imageURL="/mysql-logo-png.png" name="MySQL" Discription="Designing efficient schemas, written optimized queries and integrating databases with web applications." />
        <SkillsBox imageURL="/python-logo-png.png" name="Python" Discription="Good at writing clean logic, backend systems, automation scripts, and integrating APIs for real-world applications." />
        <SkillsBox imageURL="/tailwind-css-logo-png.png" name="Tailwind" Discription="Experienced with Tailwind CSS, crafting responsive, modern, utility-first designs with clean layouts and consistent styling." />
        <SkillsBox imageURL="/javascript-logo-png.jpg" name="JavaScript" Discription="Proficient in JavaScript, building interactive frontends, handling async logic, APIs, and dynamic user experiences." />
        <SkillsBox imageURL="/html-logo-png.png" name="HTML" Discription="Proficient in HTML, structuring semantic, accessible, and SEO-friendly web pages for modern applications." />
        <SkillsBox imageURL="/css-3-logo-png.png" name="CSS" Discription="Proficient in CSS, creating responsive layouts, animations, and clean visual designs across modern browsers." />
         </div>
    </section>
  )
}

export default skills