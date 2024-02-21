import "./NavbarStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(!click);

  const [color, setcolor]= useState(false);
  const changecolor = () => {
    if(window.scrollY >=1){
        setcolor(true);
    }else{
      setcolor(false);
    }
  };

  window.addEventListener("scroll",changecolor);
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "menu active" : "menu"} >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
      </div>

    </div>
  );
};

export default Navbar;
