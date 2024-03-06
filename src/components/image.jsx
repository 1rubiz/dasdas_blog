import React, {useEffect, useState} from 'react'
import logo from '/logo.svg'

function Image({dataFeed}) {
  
  const [data, setData] = useState({})
  // useEffect which gets data from parent and saves to state. It reloads when the prop changes.
  useEffect(() => {
    setData(dataFeed)
  }, [dataFeed])
  
  return (
    <div>
        {data && (
          <img src={data.image_url} width={`${data.image_width}px`} height={`${data.image_height}px`} className='w-[100%] rounded-[8px] bg-contain'/>
        )}
    </div>
  )
}

export default Image