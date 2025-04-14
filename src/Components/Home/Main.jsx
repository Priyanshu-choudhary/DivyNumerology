import React from 'react'
import Footer from './Footer'
import About from './About'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Home from './Home'

function Main() {
  return (
    <div className='bg-yellow-50'>
      {/* <About/> */}
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main
