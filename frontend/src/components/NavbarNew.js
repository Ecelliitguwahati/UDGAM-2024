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
        <Link to="/" onClick={handleClick} style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Home</Link>

        <NavLink to="/Schedule" onClick={handleClick} style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Schedule</NavLink>

        <NavLink to="/Events" onClick={handleClick} style={{
          color: 'Black',

          borderRadius: '8px'
        }}>Events</NavLink>

        <NavLink to="/Sponsors" onClick={handleClick} style={{
          color: 'Black',
          borderRadius: '8px'
        }}>Sponsors</NavLink>

        <NavLink to="/About_us" onClick={handleClick} style={{
          color: 'Black',
          borderRadius: '8px'
        }}>About us</NavLink>

        {/* <img src={logo} alt="Logo" /> */}
        <NavLink className="BuyPass" to="/BuyPass" onClick={handleClick}>
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