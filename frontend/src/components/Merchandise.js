import ts1 from '../images/Group 34571.png';
import ts2 from '../images/Isolated_back_white_hoodie 1.png';
import ts3 from '../images/Isolated_black_t-shirt_front 2.png';
import ArrowHead from '../images/Arrowhead Blue.png';
import merch from '../images/Selling Merch.png';
import '../styles/Merchandise.css';

const Merchandise = () => {
    return (
        <div className="merch">
            <div className="merchContent">
            <p className="merchHead">MERCHANDISE</p>
            <p className="merchCraft">Crafted by our team</p>
            </div>
           
            <div className="tshirt">
                <img src={merch} alt="merch" className='merchimg'/>
            </div>
            <div className="want">
            <a href='https://forms.gle/VAKTxnEAqPPtZPYU9' className="wantMerch" target='_blank' rel='noreferrer'>I want them !</a>
            <img className="Arrowhead" src={ArrowHead} alt="Logo" />
            </div>
            
        </div>
        

      );
}
 
export default Merchandise;