import React from 'react'

const ProjectsBox = (props) => {
  return (
    <div className="w-full mb-10 h-auto flex items-center justify-around gap-5 bg-blue-950 p-5 rounded-lg shadow-lg">
      <img src={props.image} alt={props.name} className="w-[25%] object-cover h-auto rounded-4xl" />
      <div className="w-[60%] flex flex-col gap-5">
      <h2 className="text-4xl font-bold text-center text-blue-400">{props.name}</h2>
      <p className="text-blue-100 text-xl w-full text-center font-bold">{props.description}</p>
      <a href={props.link} target="blank" className="text-right mt-5 font-bold text-xl text-blue-300 ">View Project</a>
      </div>
    </div>
  )
}
export default ProjectsBox