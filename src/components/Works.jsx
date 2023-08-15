import React, { useState } from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, siteURL }) => {
  return (
    <motion.div
    key={`project-${index}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, delay: index * 0.5 }}
    >
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='w-full h-[230px] relative'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          {source_code_link ? (<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='GitHub'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>):null
}
          {
            siteURL?(<div className={`absolute inset-0 flex justify-end m-3 ${source_code_link?'mr-12 pr-2':'mr-1 pr-0'} card-img_hover`}>
            <a href={siteURL} target='_blank'>
              <div
              className='bg-gray-400 w-10 h-10 flex justify-center items-center cursor-pointer'
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 128 128">
<path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
</svg>
            </div></a>

          </div>):<></>
          }
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]' >{description}</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  // to show only three project at start if view all press then all
  const [showAll, setShow] = useState(false);
  const maxToShow = 3;

  const handleClick = () => {
    setShow(prev => !showAll)
  }

  return (
    <>
      <motion.div className={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described, with links to code repositories and live demos included. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className='flex flex-wrap mt-20 gap-7'>
        {
          projects.slice(0, showAll?projects.length : maxToShow).map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }
      </div>
      {projects.length > maxToShow && (
        <div >
          <button className='mt-4 bg-tertiary p-3  text-white-100 font-bold border-2 border-stone-700 rounded-2xl' onClick={handleClick}>
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Works, "")