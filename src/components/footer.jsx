import React from 'react'
import { motion } from 'framer-motion'


// Footer component
function Footer() {
  return (
    <motion.div
      initial={{y: 200, opacity: 0}}
      whileInView={{y: 0, opacity:2}}
      exit={{y: 100, opacity:0}}
      transition={{duration: 2}}
      className='text-center mt-[15vh] mb-5 text-[2.5vh]'>
        <h1 className='text-[4.5vh] font-semibold'>Join our Team of Writers</h1>
        <p>On dasdas, writers earn a living doing what they love.</p>
        <p>Getting started is easy. Just pay a one time <span className='font-bold'>$25 fee</span> and everything is ready to go.</p>
        <button className='text-[2.5vh] w-[20vh] m-7 p-2 ps-4 pe-4 bg-black text-white'>JOIN US</button>
    </motion.div>
  )
}

export default Footer