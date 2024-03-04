import React from 'react'
import Image from './image'
import Details from './details'
import { motion } from 'framer-motion'

function LandingCard() {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-[12vh] mb-[10vh] h-[60vh] md:h-[20vh] lg:h-[30vh]'>
        <motion.div 
        initial={{x: -100}}
        whileInView={{x: 0}}
        exit={{x: -100}}
        transition={{duration: 1}}
        className='w-[100%] md:w-[40%] max-h-[60vh] md:overflow-hidden'>
        <Image/>
        </motion.div>
        <motion.div 
        initial={{x: 100}}
        whileInView={{x: 0}}
        exit={{x: 100}}
        transition={{duration: 1}}
        className='w-[100%] md:w-[55%] md:p-5'>
        <Details/>
        </motion.div>
    </div>
  )
}

export default LandingCard