import "../styles/NavbarNew.css"
import {FaBars, FaTimes} from "react-icons/fa";
import logo1 from '../images/Udgam Rhombus.png';
import Pass from '../images/BuyPass.png';
import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        console.log("clicked");
        setClick(!click);
    }

  return (
    <div className="header">
            <img src={logo1} alt="" className="img"/>
        <ul className={click ? "nav-menu active": "nav-menu"}>
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
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color:"black"}} />):
        (<FaBars size={30} style={{color:"black"}} />)}
        </div>
    </div>
  )
}

export default Navbar