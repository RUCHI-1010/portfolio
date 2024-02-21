import "./Img.css";
import React from 'react';
import laptopImg from "../Assets/laptop.jpeg";
import { Link } from "react-router-dom";
 
const Img = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="laptop-img" src={laptopImg} alt="laptopimg" />
            </div>
            <div className="content">
               <p>HI, I AM A DEVELOPER</p>
               <h1>Full Stack Blockchain Developer</h1>
               <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contacts" className=" btn btn-light">Contacts</Link>
               </div>
            </div>
        </div>




    )
}

export default Img
