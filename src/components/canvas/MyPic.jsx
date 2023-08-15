import React from 'react'
import { Me } from '../../assets'

const MyPic = () => {


  return (
      <div className='w-screen flex flex-col items-center justify-center align-middle min-h-screen '>
      <div className='sm:w-[35%] w-[60%] lg:h-[60%]  transition-all duration-300 rounded-full overflow-hidden absolute  bottom-0 border-3 border-solid border-stone-50'>
        <img src={Me} alt="image" className='mx-auto ' />
      </div>
    </div>
  )
}

export default MyPic