//import { Link } from "react-router-dom";
//import React, { useState } from 'react';
import logo from './assetsFront/Frame 3.png'
import logo1 from './assetsFront/Udgam Rhombus.png';
import Pass from './assetsFront/BuyPass.png';
const Navbar = () => {
    
     
const handleclick=()=>{

}
     

     

  return (
    <nav className="navbar">
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
        </div>
        <div className="Menu" OnClick={()=>handleclick()}>
        <img src={logo} alt="Logo" />
        </div>         
        <a className="BuyPass"href="/BuyPass">
             <img src={Pass} alt="Buy pass" />
        </a>
        
    </nav>
  );
}
 
export default Navbar;