import Speakers from './speakers';
import Pastspeakers from './Pastspeakers'
import  '../styles/Speakers.css'
import mic from '../images/Mike Blue.svg'

const Speakerspage = () => {
    return ( <div>
        <div className="speakdiv1">
            <div className="speakdiv2">
<div className="Speakerspagetitle">
Our Speakers
</div>
<Speakers/>
</div>
</div>
<div className='pastspeakersection'>
<div className='pastspeakers'>
<div className="pastspeakersheading">
    Past Speakers
</div>
<div className="img" style={{width:'2px',height:'2px'}}>
<img className='mic' src={mic} style={{width:'700px',height:'400px',zIndex:'-1',position:"relative",top:'-800px',left:'300px'}} alt="" />
</div>
</div>
<Pastspeakers/>
    </div>
    </div> );
}
 
export default Speakerspage;