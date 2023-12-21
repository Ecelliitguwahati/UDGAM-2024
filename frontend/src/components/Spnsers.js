import coinpurple from '../images/Coin Purple.png'
import  '../styles/Sponsers.css'
import samosa from "../images/samosa.svg";
const Sponsers = () => {
    return ( 
        <div className="Sponsers">
            <div className="spon">
            <h1 className="sponText">Our Sponsers</h1>
            <img src={coinpurple} alt="coinpurple" className="coinpurple" />
            </div>
             <div className="SponList">
                <div className='spname'></div>
                <div className='spname'></div>
                <div className='spname'></div>
             </div>
            <div className="coin">
            <img src={coinpurple} alt="coinpurple" className="coinpurpl" />
            </div>
             
             <div className="samosa">
                <div className="viewall">
                View all Sponsors
                </div>
                <img src={samosa} alt="" />
             </div>
        </div>
     );
}
 
export default Sponsers;