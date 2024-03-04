import React from 'react'
import logo from '/logo.svg'
import { Link } from 'react-router-dom';
import { FaTwitter, FaDribbble, FaFigma, FaGithub} from 'react-icons/fa'
import { motion } from 'framer-motion';

function Nav() {
  return (
    <div className='flex justify-between items-center mt-3'>
        <Link to='/'>
          <motion.img
            initial={{y: -100}}
            whileInView={{y: 0}}
            exit={{y: -100}}
            transition={{duration: 1}}
            src={logo} className='w-[13vh]'/></Link>
        <div className='flex gap-2'>
            <motion.span
                initial={{x: 100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{duration: 1}}
                className='flex'>
                  <FaTwitter className='icons'/>.
            </motion.span>
            <motion.span
                initial={{x: 100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{duration: 1}}
                className='flex'>
                  <FaDribbble className='icons'/>.
            </motion.span>
            <motion.span
                initial={{x: 100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{duration: 1}}
                className='flex'>
                  <FaFigma className='icons'/>.
            </motion.span>
            <motion.span
                initial={{x: 60}}
                animate={{x: 0}}
                exit={{x: 60}}
                transition={{duration: 1}}>
                    <FaGithub className='icons'/>
              </motion.span>
        </div>
    </div>
  )
}

export default Nav