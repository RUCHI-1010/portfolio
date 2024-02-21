import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import block from "../Assets/block.jpg"
import crypto from "../Assets/crypto.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1>Who AM I?</h1>
      <p>Passionate Full Stack blockchain developer dedicated to shaping the future of decentralized technologies. Crafting innovative solutions with a focus on security, transparency, and real-world impact</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack-top">
               <img src={ crypto } className="img" alt="true"/>
            </div>
            <div className="img-stack-bottom">
               <img src={ block } className="img" alt="true"/>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default AboutContent
