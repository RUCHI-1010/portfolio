import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from '../components/Image2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="ABOUT." text="I am a Full Stack Blockchain Developer."/>
      <AboutContent/>
       <Footer/>
    </div>
  )
}

export default About
