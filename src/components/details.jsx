import React, {useEffect, useState} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Details({dataFeed}) {
  
  const [data, setData] = useState({})
  // useeffect to get data from the parent element as prop and save in state
  useEffect(() => {
    setData(dataFeed)
  }, [dataFeed])
  
  return (
    <div className='w-[100%]'>
      {data && (
          <><div className='mb-2 mt-1'>{data.author} . {formatDate(data.date)}</div>
          <h1 className='font-bold text-[3vh]'>{data.title}</h1>
          <div className='mb-4'>{data.description}</div>
          <div className='flex justify-between'>
              <p>12 min read</p>
              <Link to={`/reader/${data.id}`}><p className='flex justify-center items-center gap-4 text-[blue] mr-7'> Read Full <FaArrowRight/></p></Link>
          </div></>
      )}
    </div>
  )
}

export default Details

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

// Example usage:
// const dateString = '2024-03-04T04:05:18';
// console.log(formatDate(dateString)); // Output: "2 days ago" (assuming current date is 2024-03-06)
