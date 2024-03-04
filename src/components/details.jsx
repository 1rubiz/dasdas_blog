import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Details() {
  return (
    <div className='w-[100%]'>
        <div className='mb-2 mt-1'>Front-end . 1 Month Ago</div>
        <h1 className='font-bold text-[3vh]'>CSS Grid</h1>
        <div className='mb-4'>The CSS Grid Layout module offers a grid-based layout system, with rows and columns, making it easir to design web pages without having to ue floates and positioning.</div>
        <div className='flex justify-between'>
            <p>12 min read</p>
            <p className='flex justify-center items-center gap-4 text-[blue]'> Read Full <FaArrowRight/></p>
        </div>
    </div>
  )
}

export default Details