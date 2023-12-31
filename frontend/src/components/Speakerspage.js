import Speakers from './speakers';
import Pastspeakers from './Pastspeakers'
import '../styles/Speakerspage.css'

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
            </div>
            <Pastspeakers/>
        </div>
    </div> );
}
 
export default Speakerspage;