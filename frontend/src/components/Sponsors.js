import coinpurple from '../images/Coin Purple.png'
import  '../styles/Sponsers.css'
import samosa from "../images/samosa.svg";
import nabard from "../images/nabard logo.png"
import pyrotech from "../images/sponsors/pyrotech.jpeg"
import TOI from "../images/sponsors/TOI.jpg"
import GAIL from "../images/sponsors/Gail.png"
const Sponsers = () => {
    return ( 
        <div className="Sponsers">
            <div className="spon">
            <h1 className="sponText">Our Sponsors</h1>
            {/* <img src={coinpurple} alt="coinpurple" className="coinpurple" /> */}
            </div>
             <div className="SponList">
                <div className='spname'>
                <img src={nabard} alt="mike" className="sponsorimg" />
                {/* <p className="sponsorname">NABARD</p> */}
                    <p className="sponsordes">Title Sponsor</p>
                </div>
                <div className='spname'>
                <img src={pyrotech} alt="mike" className="sponsorimg" />
                {/* <p className="sponsorname">PyroTech</p> */}
                    <p className="sponsordes">Associate Title Sponsor</p>
                </div>
                <div className='spname'>
                <img src={TOI} alt="mike" className="sponsorimg" id="toi"/>
                {/* <p className="sponsorname">The Times of India</p> */}
                    <p className="sponsordes">In Association with</p>
                </div>
             </div>
            {/* <div className="coin">
            <img src={coinpurple} alt="coinpurple" className="coinpurpl" />
            </div> */}
             
             <a href="/Sponsors" className="samosa">
                <div className="viewall">
                View all Sponsors
                </div>
             </a>
        </div>
     );
}
 
export default Sponsers;