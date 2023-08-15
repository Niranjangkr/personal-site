import React from 'react'
import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { socials } from '../constants'
import SphereCanvas from './canvas/Sphere'

export const Connect = () => {

  return (
    <>
      <motion.div className={textVariant()}>
        <p className={styles.sectionSubText}>Connect with Me</p>
        <h2 className={styles.sectionHeadText}>
          Socials 
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-12'>
      {socials.map((social)=>(
        <a href={social.url} target='_blank'  key={social.name} >
        <div key={social.name} className='rounded-3xl bg-gray-900' >
          <SphereCanvas icon={social.icon}/>
        </div>
        </a>
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(Connect)