import "./Footer.css";
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>Delhi,India</p>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />08920304880</h4>

                    </div>
                    <div className="gmail">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />bansalgautam005@gmail.com</h4>

                    </div>
                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>
                        Welcome to (findkrr pvt limited), a pioneering force in the blockchain landscape. At the intersection of innovation and technology, we specialize in ( blockchain development, smart contracts, decentralized applications (DApps)).
                         
                     <h4>Our Vision:</h4>
                     
                        At (findkrr pvt limited), we envision a future where blockchain technology transforms industries and empowers individuals. Our passion for the limitless potential of decentralized systems drives us to create solutions that redefine the way businesses operate and individuals interact.
                        
                     <h4>Connect with Us:</h4>

                        Explore the potential of blockchain with (findkrr pvt limited). Contact us at (bansalgautam005@gmail.com) to kickstart your blockchain journey.
                    </p>
                    <div className="social">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
