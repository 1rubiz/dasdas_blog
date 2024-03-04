import React from 'react'
import Image from './image'
import Details from './details'
import { motion } from 'framer-motion'

function Card() {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    className='card border-2 border-gray-100 p-4 rounded flex flex-col'>
        <Image/>
        <Details/>
    </motion.div>
  )
}

export default Card