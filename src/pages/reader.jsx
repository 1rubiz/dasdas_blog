import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/card'
import logo from '/logo.svg'
import { motion } from 'framer-motion'
import Loader from '../components/loader'
import axios from 'axios'

function Reader() {
  const { dataId } = useParams();
  const [blog, setBlog] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    setLoader(true);
    const getData= async ()=>{
      const data = await axios.get(' https://techcrunch.com/wp-json/wp/v2/posts/'+dataId+'?per_page=1');
      const blogdata= await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=3')
      // state management for the more blog posts
      setBlogs(blogdata.data);
      // state management for the current blog post.
      setBlog(data.data);
    }
    getData();
    setTimeout(function() {
      setLoader(false)
    },3000);
  }, [dataId])
  

  return (
    <div className='mt-[9vh] mb-[7vh] max-w-[100%]'>
      {
        // conditional loader rendering
        loader && <Loader/>
      }
      {blog && (
          <div className='flex flex-col justify-center items-center md:ml-[15%] md:mr-[15%] mb-[7%]'>
          <div className='text-left w-[100%]'>
            <p className=''>By {blog.yoast_head_json.author} . {formatDate(blog.date)}</p>
            <h1 className='text-[4.5vh] font-extrabold'>{blog.yoast_head_json.title}</h1>
          </div>
          <article dangerouslySetInnerHTML={{ __html: blog.content.rendered }} className='w-[100%] article'></article>
        </div>
      )}
      <div>
        <h1 className='text-[4.2vh] font-extrabold mb-8'>More Articles</h1>
        <div className='flex flex-col md:gap-[7vh] md:grid md:grid-cols-2 lg:grid-cols-3'>
             {
              blogs.map((item, i)=>{
                const dataFeed = {
                  id: item.id,
                  date: item.date,
                  title: item.title.rendered,
                  content: item.content.rendered,
                  excerpt: item.excerpt.rendered,
                  description: item.yoast_head_json.description,
                  image_width: item.yoast_head_json.og_image[0].width,
                  image_height: item.yoast_head_json.og_image[0].height,
                  image_url: item.yoast_head_json.og_image[0].url,
                  author: item.yoast_head_json.author,
                  authorId: item.author
                }
                  return(
                    <Card dataFeed={dataFeed} key={i}/>
                  )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Reader

// function to set the date to a suitable string format
function formatDate(dateString) {
  const currentDate = new Date();
  const providedDate = new Date(dateString);
  const timeDifference = currentDate - providedDate;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);

  if (monthsDifference >= 1) {
      return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference >= 2) {
      return `${daysDifference} days ago`;
  } else if (daysDifference === 1) {
      return 'one day ago';
  } else if (hoursDifference >= 2) {
      return `${hoursDifference} hours ago`;
  } else if (hoursDifference === 1) {
      return 'an hour ago';
  } else if (minutesDifference >= 2) {
      return `${minutesDifference} minutes ago`;
  } else if (minutesDifference === 1) {
      return 'a minute ago';
  } else {
      return 'just now';
  }
}