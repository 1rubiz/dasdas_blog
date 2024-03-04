import React from 'react'
import Card from '../components/card'
import logo from '/logo.svg'
import { motion } from 'framer-motion'
import Loader from '../components/loader'

function Reader() {
  return (
    <div className='mt-[9vh] mb-[7vh]'>
      {/* <Loader/> */}
      <div className='flex flex-col justify-center items-center md:ml-[15%] md:mr-[15%] mb-[7%]'>
        <div className='text-left w-[100%]'>
          <p className=''>By Ryan Jackson  2 months Ago</p>
          <h1 className='text-[4.5vh] font-extrabold'>Optimizinng CSS for faster page loads</h1>
        </div>
        <article className='text-'>The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        </article>
        <motion.img
         initial={{opacity: 0}}
         whileInView={{opacity: 2}}
         exit={{opacity: 0}}
         transition={{duration: 1}}
        src={logo} className='m-9'/>
        <article>The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.
        </article>
      </div>
      <div>
        <h1 className='text-[4.2vh] font-extrabold mb-8'>More Articles</h1>
        <div className='flex flex-col md:gap-[7vh] md:grid md:grid-cols-2 lg:grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Reader