import React, { useState } from 'react';
// import Speakercard from "./speakercard";
import murthy from "../images/narayan.svg";
import ashneer from "../images/ashneer.svg";
import ankush from "../images/ankush.svg";
import charlie from "../images/charlie.svg";
import jimmywales from "../images/jimmywales.svg";
import pulkit from "../images/pulkit.svg";
import kevin from "../images/kevin.svg";
import amod from "../images/amod.svg";
import michael from "../images/michael.svg";
import rohit from "../images/rohit.svg";
import ankur from "../images/ankur.svg";
import ankit from "../images/ankit.svg";





const Pastspeakers = () => {

   const [speakers,SETspeakers] =useState([
    {title:'N.R. Narayan Murthy',img:murthy,designation:'Founder',company:'Infosys',keyid:0},
    {title:'Ashneer Grover',img:ashneer,designation:'Co-Founder',company:'BharatPe',keyid:1},
    {title:'Ankush Singla',img:ankush,designation:'Co-Founder',company:'Coding Ninjas',keyid:2},
    {title:'Charlie Cheever',img:charlie,designation:'Co-Founder',company:'Quora',keyid:3},
    {title:'Jimmy Wales',img:jimmywales,designation:'Founder',company:'Wikipedia',keyid:4},
    {title:'Pulkit Jain',img:pulkit,designation:'Co-Founder',company:'Vedantu',keyid:5},
    {title:'Kevin Harrington',img:kevin,designation:'Orignial Shark',company:'Shark Tank',keyid:6},
    {title:'Amod Malviya',img:amod,designation:'Co-Founder',company:'Udaan',keyid:7},
    {title:'Michael Seibel',img:michael,designation:'CEO',company:'Y Combinator',keyid:8},
    {title:'Rohit Kapoor',img:rohit,designation:'CEO',company:'Swiggy',keyid:9},
    {title:'Ankur Warikoo',img:ankur,designation:'Founder',company:'Nearbuy',keyid:10},
    {title:'Ankit Nagori',img:ankit,designation:'Founder',company:'Cure.Fit',keyid:11},
  ] 
   );
   

    return (
<div className='slider'>
        <div class="past1">
            
            {speakers.map((speaker) => (
              
                    
            <div className="pastspeakerelement1">

           <img src={speaker.img} className="pastimg" alt=''></img>
           <div className="pasttitle" >
           <p className='pastname'> {speaker.title}</p> 
           <p className='designation'>{speaker.designation}</p>
           <p className="pastcompany">{speaker.company}</p>
             
             </div>
             </div>
  
           ))}
           {speakers.map((speaker) => (
              
              
      <div className="pastspeakerelement1">

     <img src={speaker.img} className="pastimg" alt=''></img>
     <div className="pasttitle" >
     <p className='pastname'> {speaker.title}</p> 
      <p className='designation'>{speaker.designation}</p>
     <p className="pastcompany">{speaker.company}</p>
       
       </div>
       </div>
     ))}
           </div>
        </div>
       

        
    )
}
 
export default Pastspeakers;