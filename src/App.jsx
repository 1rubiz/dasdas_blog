import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/home'
import Reader from './pages/reader'
import Nav from './components/nav'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <section className='ml-[6%] mr-[6%] max-w-[100%] overflow-hidden'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reader/:dataId' element={<Reader/>}/>
      </Routes>
      </section>
    </BrowserRouter>
    
  )
}

export default App
