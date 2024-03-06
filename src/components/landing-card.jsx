import React, {useEffect, useState} from 'react'
import Image from './image'
import Details from './details'
import { motion } from 'framer-motion'

function LandingCard({blog}) {
  const [dataFeed, setDataFeed] = useState({})

  // use effect collects props(blog) from parent, deconstructs and saves the gotten data in state.
  useEffect(() => {
    if(blog){
      const data = {
        id: blog.id,
        date: blog.date,
        title: blog.title.rendered,
        content: blog.content.rendered,
        excerpt: blog.excerpt.rendered,
        description: blog.yoast_head_json.description,
        image_width: blog.yoast_head_json.og_image[0].width,
        image_height: blog.yoast_head_json.og_image[0].height,
        image_url: blog.yoast_head_json.og_image[0].url,
        author: blog.yoast_head_json.author,
        authorId: blog.author
      }
      setDataFeed(data)
    }
  }, [blog])
  
  return (
    <div className='flex flex-col border-2 border-gray-200 p-4 rounded md:border-0 md:p-0 md:flex-row justify-between mt-[12vh] mb-[10vh] min-h-[60vh] md:min-h-[20vh] lg:h-[30vh]'>
      <motion.div 
        initial={{x: -100}}
        whileInView={{x: 0}}
        exit={{x: -100}}
        transition={{duration: 1}}
        className='w-[100%] md:w-[40%] max-h-[60vh] md:overflow-hidden'>
            <Image dataFeed={dataFeed}/>
      </motion.div>
      <motion.div 
        initial={{x: 100}}
        whileInView={{x: 0}}
        exit={{x: 100}}
        transition={{duration: 1}}
        className='w-[100%] md:w-[55%] md:p-5'>
            <Details dataFeed={dataFeed}/>
      </motion.div>
  </div>
  )
}

export default LandingCard