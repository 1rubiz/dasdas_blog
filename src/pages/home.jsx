import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/card'
import Footer from '../components/footer'
import LandingCard from '../components/landing-card'
import Loader from '../components/loader'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async()=>{
      setLoader(true);
      const data= await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=30')
      setBlogs(data.data);
    }

    getData();
    // disables the loader screen in 3secs after successful data fetching using axios
     setTimeout(function() {
      setLoader(false)
    },3000);
  }, [])
  
  return (
    <div className='flex flex-col '>
        {
          loader && <Loader/>
        }
        <LandingCard blog={blogs[0]}/>
        <div className='flex flex-col gap-3 mt-7 md:gap-[7vh] md:grid md:grid-cols-2 lg:grid-cols-3'>
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
                if(i !== 0){
                  return(
                    <Card dataFeed={dataFeed} key={i}/>
                  )
                }
              })
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Home