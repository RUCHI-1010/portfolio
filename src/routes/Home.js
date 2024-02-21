import React from 'react'
import Navbar from "../components/Navbar"
import Img from '../components/Img'
import Footer from '../components/Footer'
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Img/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Home;
