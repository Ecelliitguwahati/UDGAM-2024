import logo1 from '../images/Udgam Rhombus.png';
import Pass from '../images/BuyPass.png';
import '../styles/Navbar.css'
import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom"
import { gsap, CSSPlugin } from 'gsap';
import Hamburger from '../icons/bars-solid.svg';
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

    useEffect(() => {
        const navSlide = () => {
            const burger = document.querySelector('.hamburger');
            const nav = document.querySelector('.links');
            const navLinks = document.querySelectorAll('.links li');
            //Toggle Nav
            burger.addEventListener('click', () => {
                console.log("clicked");
                nav.classList.toggle('nav-active');
                //Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                //Burger Animation
                burger.classList.toggle('toggle');
            });
        }
        navSlide();
    }, []);

  return (
    <div>
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

        <NavLink to="/Sponsors" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Sponsors</NavLink>

        <NavLink to="/About_us" style={{
          color: 'Black',
          borderRadius: '8px'
        }}>About us</NavLink>

        {/* <img src={logo} alt="Logo" /> */}
        <NavLink className="BuyPass" to="/BuyPass">
          <img src={Pass} alt="Buy pass" />
        </NavLink>
      </div>
      <div className="hamburger toggle">
        <img src={Hamburger} alt="hamburger" />
      </div>
    </nav>
    </div>
  );
}

export default Navbar;