import ts1 from './assetsFront/Group 34571.png';
import ts2 from './assetsFront/Isolated_back_white_hoodie 1.png';
import ts3 from './assetsFront/Isolated_black_t-shirt_front 2.png';
import ArrowHead from './assetsFront/Arrowhead Blue.png';
const Merchandise = () => {
    return (
        <div className="merch">
            <div className="merchContent">
            <p className="merchHead">MERCHANDISE</p>
            <p className="merchCraft">Crafted by our team</p>
            </div>
           
            <div className="tshirt">
            <img className='ts2' src={ts2} alt="logo1" />
            <img className='ts1' src={ts1} alt="logo1" />
            <img className='ts3' src={ts3} alt="logo1" />
            </div>
            <div className="want">
            <button className="wantMerch">I want them !</button>
            <img className="Arrowhead" src={ArrowHead} alt="Logo" />
            </div>
            
        </div>
        

      );
}
 
export default Merchandise;