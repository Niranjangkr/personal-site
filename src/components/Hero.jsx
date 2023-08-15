import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { MyPic } from "./canvas";

// set top-[35px] for responsiveness if 120 causes problem

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[35px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Niranjan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I specialize in crafting stunning user interfaces <br className='sm:block hidden' />and professional looking websites
          </p>
          <a href="https://drive.google.com/file/d/1CU1ALBvl-S3pnw-t4YiVqSdjFRZJq5l3/view?usp=sharing" target='_blank'><button className='bg-violet-700 p-3 mt-4  rounded-xl text-white-100 font-medium relative z-10'>VIEW RESUME</button></a>
        </div>
      </div>

      <MyPic />

      <div className='absolute xs:bottom-10 bottom-3.5 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex justify-center items-start p-2'>
            <motion.div 
            animate = {{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    
    </section>
  )
}

export default Hero