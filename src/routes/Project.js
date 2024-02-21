import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from "../components/Image2";
import PriceCard from "../components/PriceCard";
import Work from "../components/Work";



const Project = () => {
  return (
    <div>
          <Navbar/>
          <Image2 heading="PROJECTS." text="Explore my Recent Bockchain Projects." />
          <Work/>
          <PriceCard/>
          <Footer/>
    </div>
  )
};

export default Project;
