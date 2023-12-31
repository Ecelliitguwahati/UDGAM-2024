//import { Link } from "react-router-dom";
//import React, { useState } from 'react';
import logo from '../images/Frame 3.png'
import logo1 from '../images/Udgam Rhombus.png';
import Pass from '../images/BuyPass.png';
import '../styles/Navbar.css'
import { useState,useEffect } from 'react';
import { NavLink, Link } from "react-router-dom"
import { gsap, CSSPlugin } from 'gsap';
gsap.registerPlugin(CSSPlugin);


const Navbar = () => {
  // useEffect(() => {
    
  //   //this navbar belongs to Navbar.js
  //   gsap.set('.navbar', { opacity: 0, y: -50 });
    
  //   // Animation timeline

  //   const timeline = gsap.timeline();
  //   timeline.to('.navbar', { opacity: 1, duration: 0.5, y: 0 },"+=5");
   

  //   return () => {
  //     timeline.kill();
  //   };
  // }, []);

  return (

    <nav className="navbar" style={{ position: 'relative', zIndex: 2, border: 0 }}>
      <div className="udgRhom">
        <img src={logo1} alt="logo1" />
      </div>
      <div className="links">

        <Link to="/" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Home</Link>

        <NavLink to="/Schedule" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Schedule</NavLink>

        <NavLink to="/Events" style={{
          color: 'Black',

          borderRadius: '8px'
        }}>Events</NavLink>

        <NavLink to="/Merch" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Merch</NavLink>

        <NavLink to="/About_us" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>About us</NavLink>

        {/* <img src={logo} alt="Logo" /> */}
        <NavLink className="BuyPass" to="/BuyPass">
          <img src={Pass} alt="Buy pass" />
        </NavLink>
      </div>
    </nav>
  );
}


export default Navbar;