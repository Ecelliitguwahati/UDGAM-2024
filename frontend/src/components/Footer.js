import React from 'react'
import { Link } from 'react-router-dom'
import ecell from '../images/E-Cell logo.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/Vector.svg'
import facebook from '../images/icons8-facebook 1.svg'
import twitter from '../images/icons8-twitterx 1.svg'
import udgamlogo from '../images/Udgam Footer Logo.svg'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
     <div className="left">
     <img src={udgamlogo} alt="" />
      <div className="name">
      <b>E-Cell, IIT Guwahati</b><br/>
       Assam - 781039<br/>
       <div className='contact'>edc@iitg.ac.in<br/>
       udgam@iitg.ac.in<br/>
       +91 8299017125</div>
      </div>
     </div>
      <div className="right">
        <div className="upper">
        Follow us to get frequent updates!
        </div>
        <div className="images">
          <a className="linkedin" href='https://www.linkedin.com/company/ecell-iitg/' target='_blank'>
            <img width={40} height={30} src={linkedin} alt="" />
          </a>
          <a className="instagram" href='https://www.instagram.com/ecell_iitg/' target='_blank'>
            <img width={40} height={30} src={instagram} alt="" />
          </a>
          <a className="facebook" href='https://www.facebook.com/ecell.iitg/' target='_blank'>
            <img width={40} height={30} src={facebook} alt="" />
          </a>
          <a className="twitter" href='https://twitter.com/ecelliitg' target='_blank'>
            <img width={40} height={30} src={twitter} alt="" />
          </a>
        </div>

      </div>
     
    </div>
     <div className="lower">
        <a href="/TnC" target='_blank'>Terms & Conditions</a>
        <a href="/Privacy" target='_blank'>Privacy Policy</a>
        <a href="/Refund" target='_blank'>Refund Policy</a>
      </div>
   </>
  )
}

export default Footer
