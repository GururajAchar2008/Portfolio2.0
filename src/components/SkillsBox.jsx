import React from 'react'

const SkillsBox = (props) => {
  return (
<>
    <div className='relative card z-9 w-50 h-50 bg-[#1e1e1e] rounded-3xl flex items-center justify-center shadow-[0_0_25px_10px_rgba(0,0,0,0.4)] hover:shadow-blue-500 hover:scale-110 ease-linear duration-400 cursor-pointer'>
        <img src={props.imageURL} alt="skill-img" className='rounded-3xl z-9 w-[60%] h-[60%] animation'/>
       <div className='absolute card z-10 w-full h-full bg-[#1e1e1e] rounded-3xl cursor-pointer'>
        <h1 className='mt-[7%] text-blue-400 text-3xl font-bold w-full h-[20%]'>{props.name}</h1>
        <p className='mt-[7%] text-white text-sm font-medium w-full h-[60%] px-4'>{props.Discription}</p>
       </div>
    </div>
</>
  )
}

export default SkillsBox