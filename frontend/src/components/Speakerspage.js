import Speakers from './speakers';
import Pastspeakers from './Pastspeakers'
import  '../styles/Speakers.css'

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
<img className='mic' src="https://s3-alpha-sig.figma.com/img/2b0a/f81b/ff4cecc08c18a5a434c53bd7dab2593a?Expires=1703462400&Signature=qrPQYuIPw3BeOy6oW7JZtGcAFzGLAJna1ocpw5LD9jOPIbvr9GI7Pv5NgR~Qb1g6VIRRKAX6MmPnG5DZpft46tkXB6WccmZXg5Fs9yVNWGy5KLtUBkx-6tY552EDmkeHGBQhh6xjpiLOb9k6ZZJOo~Ej58l-bmIdHZu4hnNfZh-tnv0bcngXL9rbuLVCJw11YQqtlcC3CFxKrumsQrKosShjHk9YB4R-uXaMYvfrYqY21AOyj0xWh~ggviWiEdwVfGsVPDMIgFVcs4oLbYWDYnVG7YQuwPKiQq1MdMOJmDbqJd2U5xxSLYt4CJHQeROlHZqXo5GpHc~D8LQ4NQrg2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:'700px',height:'400px',zIndex:'-1',position:"relative",top:'-800px',left:'300px'}} alt="" />
</div>
</div>
<Pastspeakers/>
    </div>
    </div> );
}
 
export default Speakerspage;