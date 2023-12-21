//import { Link } from "react-router-dom";
//import React, { useState } from 'react';
import logo from '../images/Frame 3.png'
import logo1 from '../images/Udgam Rhombus.png';
import Pass from '../images/BuyPass.png';
import moduleName from '../styles/Navbar.css'
const Navbar = () => {
    
     
const handleclick=()=>{
    
}
     

     

  return (
    <>
    <nav className="navbar" style={{position:'relative', zIndex: 2,border:0}}>
    <div className="udgRhom">
        <img src={logo1} alt="logo1" />
        </div>
        <div className="links">
       
        <a href="/Schedule" style={{ 
          color: 'Black', 
          borderRadius: '8px' 
        }}>Schedule</a>

        <a href="/Events" style={{ 
          color: 'Black', 
           
          borderRadius: '8px' 
        }}>Events</a>

        <a href="/Merch" style={{ 
          color: 'Black',   
          borderRadius: '8px' 
        }}>Merch</a>
        
        {/* <img src={logo} alt="Logo" /> */}
        <a className="BuyPass"href="/BuyPass">
             <img src={Pass} alt="Buy pass" />
        </a>
        </div>
        


              
      
        
    </nav>
    <nav className="phonenav">
        
    </nav>

    </>
  );
}
 
export default Navbar;