import "../styles/NavbarNew.css"
import {FaBars, FaTimes} from "react-icons/fa";
import logo1 from '../images/Udgam Rhombus.png';
import Pass from '../images/BuyPass.png';
import React, { useState,useEffect } from 'react'
import { NavLink, Link ,useLocation} from "react-router-dom"
import {gsap,CSSPlugin} from 'gsap';
gsap.registerPlugin(CSSPlugin);
const Navbar = () => {
  
    const [click, setClick] = useState(false);
    const location = useLocation();


    const handleClick = () => {
        console.log("clicked");
        setClick(!click);
    }


    useEffect(() => {
    // Check if it's the homepage before applying the animation
    if (location.pathname === "/") {
      gsap.set('.header', { y: -110 });
      const timeline = gsap.timeline();
      timeline.to('.header', { y: 0, duration: .5, ease: 'linear' }, '+=5');
    }
  }, [location.pathname]);

  return (
    <div className="header">
        <a href="/">
          <img src={logo1} alt="" className="img"/>
        </a>
        <ul className={click ? "nav-menu active": "nav-menu"}>
        <Link to="/" onClick={handleClick} >Home</Link>

        <NavLink to="/Schedule" onClick={handleClick} >Schedule</NavLink>

        <NavLink to="/Events" onClick={handleClick} >Events</NavLink>

        <NavLink to="/Sponsors" onClick={handleClick} >Sponsors</NavLink>

        <NavLink to="/About_us" onClick={handleClick} >Our Team</NavLink>

        {/* <img src={logo} alt="Logo" /> */}
        <NavLink className="BuyPass" to="https://unstop.com/p/udgam24-registration-pass-udgam-2024-iit-guwahati-860431" target="_blank" onClick={handleClick}>
          <img src={Pass} alt="Buy pass" />
        </NavLink>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color:"black"}} />):
        (<FaBars size={30} style={{color:"black"}} />)}
        </div>
    </div>
  )
}

export default Navbar