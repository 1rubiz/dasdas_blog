import React from 'react'
import logo from '/logo.svg'

function Image({
    classname,
    image
}) {
  return (
    <div>
        <img src={logo} className='w-[100%] rounded-[8px] bg-contain'/>
    </div>
  )
}

export default Image