import React, { useState } from 'react';
import Speakercard from "./speakercard";
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

   const [speakers,SETspeakers] =useState([{
    title:'N.R. Narayan Murthy',img:murthy,company:'Founder, Infosys',keyid:0},
   {title:'Ashneer Grover',img:ashneer,company:'Co founder, Bharatpe',keyid:1},
   {title:'Ankush Singhla',img:ankush,company:'Co founder, Coding Ninjas',keyid:2},
   {title:'Charlie Cheever',img:charlie,company:'Co founder, Quora',keyid:3},
   {title:'Jimmy Wales',img:jimmywales,company:'Founder, Wikipedia',keyid:4},
   {title:'Pulkit Jain',img:pulkit,company:'Co founder, Vedantu',keyid:5},
   {title:'Kevin Harrington',img:kevin,company:'Original Shark, Shark Tank',keyid:6},
   {title:'Amod Malviya',img:amod,company:'Co founder, Udaan',keyid:7},
   {title:'Michael Siebel',img:michael,company:'CEO, Y-Contributor',keyid:8},
   {title:'Rohit Kapoor',img:rohit,company:'CEO, Swiggy',keyid:9},
   {title:'Ankur Warikoo',img:ankur,company:'Founder, Nearbuy',keyid:10},
   {title:'Ankit Nagori',img:ankit,company:'Founder, Cure.Fit',keyid:11}] );
   

    return (
<div className='slider'>
        <div class="past1">
            
            {speakers.map((speaker) => (
              
                    
            <div className="pastspeakerelement1">

           <img src={speaker.img} className="pastimg"></img>
           <div className="pasttitle" >
           <p className='pastname'> {speaker.title}</p> 
           <p className="pastcompany">{speaker.company}</p>
             
             </div>
             </div>
  
           ))}
           {speakers.map((speaker) => (
              
              
      <div className="pastspeakerelement1">

     <img src={speaker.img} className="pastimg"></img>
     <div className="pasttitle" >
     <p className='pastname'> {speaker.title}</p> 
     <p className="pastcompany">{speaker.company}</p>
       
       </div>
       </div>
     ))}
           </div>
        </div>
       

        
    )
}
 
export default Pastspeakers;