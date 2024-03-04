import React from 'react'
import Card from '../components/card'
import Footer from '../components/footer'
import LandingCard from '../components/landing-card'
import Loader from '../components/loader'

function Home() {
  return (
    <div>
        <LandingCard/>
        <div className='flex flex-col mt-7 md:gap-[7vh] md:grid md:grid-cols-2 lg:grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home