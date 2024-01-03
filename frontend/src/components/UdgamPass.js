import { useEffect } from 'react';
import UDGAM24Purp from '../images/UDGAM24Purp.png'; 
import '../styles/Udgam.css'
import '../styles/UdgamPass.css'
import arrow from '../images/pass line.svg'
import arrowlonger from '../images/pass line longer.svg'
import arrow1 from '../images/Vector 142.png'
import arrow2 from '../images/Vector 143.png'
import arrow3 from '../images/Vector 144.png'
import arrow4 from '../images/Vector 145.png'
import UdgamPass from '../images/UdgamPass.png'

const Udgam = () => {

    // Tilt Animation
    useEffect(() => {
        const tiltEls = document.querySelectorAll('.tilt')

        const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

        tiltEls.forEach(tilt => {
            const height = tilt.clientHeight
            const width = tilt.clientWidth

            tilt.addEventListener('mousemove', (e) => {
                console.log("mousemove")
                const x = e.layerX
                const y = e.layerY
                const multiplier = 40

                const xRotate = multiplier * ((x - width / 2) / width)
                const yRotate = -multiplier * ((y - height / 2) / height)

                tilt.style.transform = tiltMove(xRotate, yRotate)
            })

            tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
        })
    }
    )

    // Tilt Animation End

    return ( 
        
        <div className="whIsUdg">
            <div className="UdgamPass">
                <div className="benefitleft">
                    <div className="b1">
                        <div className='benefit1'>
                        <p className='benefittitle'>Lecture Series</p>  
                            <p className='benefitdesc'>Entry to a series of lectures, workshops and panel discussions by top entrepreneurs like Ashneer Grover, Narayan Murthy and many more.</p>
                        </div>
                        <img src={arrowlonger} alt="arrow1" className='arrow1'/>
                    </div>
                    <div className="b2">
                        <div className='benefit2'>
                            <p className='benefittitle'>Fun Events</p>
                            <p className='benefitdesc'>
                                Enjoy a series of fun events like IPL Auction, Monopoly, Split & steal, and many more.
                            </p>
                        </div>
                        <img src={arrow} alt="arrow2" className='arrow2'/>
                    </div>
                </div>
                <div className="tilt">
                    <a href='/BuyPass' className="tilt__content">
                        <img src={UdgamPass} alt="UDGAM24Purp"/>
                    </a>
                </div>
                <div className="benefitright">
                    <div className="b3">
                        <img src={arrow} alt="arrow3" className='arrow3'/>
                        <div className='benefit3'>
                        <p className='benefittitle'>Intern Fair</p>
                            <p className='benefitdesc'>
                                An exclusive opportunity for first and second year IIT Guwhati students</p>
                        </div>
                    </div>
                    <div className="b4">
                        <img src={arrowlonger} alt="arrow4" className='arrow4'/>
                        <div className='benefit4'>
                            <p className='benefittitle'>
                                Coupons and Goodies</p>  
                            <p className='benefitdesc'>
                                Exclusive coupons and goodies for all pass holders from our partners</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Udgam;