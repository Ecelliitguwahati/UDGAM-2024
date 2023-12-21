import React from 'react'
import ecell from '../images/E-Cell logo.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/Vector.svg'
import facebook from '../images/icons8-facebook 1.svg'
import twitter from '../images/icons8-twitterx 1.svg'

const Footer = () => {
  return (
    <>
    <div className='footer'>
     <div className="left">
     <img src={ecell} alt="" />
      <div className="name">
      E-Cell, IIT Guwahati <br/>
       Assam - 781039<br/>
       edc@iitg.ac.in<br></br>
       +91 7637833974
      </div>
     </div>
      <div className="right">
        <div className="upper">
        Follow us to get<br/>
        frequent updates!
        </div>
        <div className="images">
            <img width={40} height={30} src={linkedin} alt="" />
            <img width={40} height={30} src={twitter} alt="" />
            <img width={40} height={30} src={instagram} alt="" />
            <img width={40} height={30} src={facebook} alt="" />
        </div>

      </div>
     
    </div>
     <div className="lower">
     <span>
     terms and conditions*</span>
     <span>
     terms and conditions*
         </span>
         <span>
         refund policy* 
         </span>
   </div>
   </>
  )
}

export default Footer
