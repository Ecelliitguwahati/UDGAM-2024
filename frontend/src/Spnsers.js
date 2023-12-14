import coinpurple1 from './assetsFront/Coin Purple1.png'
import ArrowSpon from './assetsFront/Vector 141.png'
import coinpurple2 from './assetsFront/Coin Purple2.png'
const Sponsers = () => {
    return ( 
        <div className="Sponsers">
            <div className="spon">
            <h1 className="sponText">Our Sponsers</h1>
            <img src={coinpurple1} alt="coinpurple1" className="coinpurple1" />
            </div>
            <div className="rectFrame">
                <div className="sponFrame1"></div>
                <div className="sponFrame2"></div>
                <div className="sponFrame3"></div>
            </div>
            <div className="sponlist">
            <img src={coinpurple2} alt="coinpurple2" className="coinpurple2" />
                <button className="allSpon">View all sponsers</button>
              <img src={ArrowSpon} alt="ArrowSpon" className="ArrowSpon" />
            </div>
              
        </div>
     );
}
 
export default Sponsers;