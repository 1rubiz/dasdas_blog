import React from 'react'

function Loader() {
  return (
    <div className='fixed z-2 top-[17vh] md:top-[15vh] left-0 w-[100%] h-screen bg-slate-600 flex justify-center items-center'>
        <div className="hourglassBackground">
            <div className="hourglassContainer">
            <div className="hourglassCurves"></div>
            <div className="hourglassCapTop"></div>
            <div className="hourglassGlassTop"></div>
            <div className="hourglassSand"></div>
            <div className="hourglassSandStream"></div>
            <div className="hourglassCapBottom"></div>
            <div className="hourglassGlass"></div>
          </div>
      </div>
    </div>
  )
}

export default Loader