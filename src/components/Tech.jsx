import React from 'react'
// import { BallCanvas } from "./canvas" 
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 gap-y-16'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28 flex flex-col mt-2' key={technology.name}>
          {/* <BallCanvas icon={technology.icon}/> */}
          <img src={technology.icon} alt='skill'className='backdrop-blur-sm bg-white/20 rounded-2xl w-28 h-28 object-contain' />
          <span className='mt-2 text-center text-white font-medium'>{technology.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")