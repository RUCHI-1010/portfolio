import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from '../components/Image2'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Image2  heading="CONTACT." text="Let's connect and explore blockchain possibilities together."  />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
