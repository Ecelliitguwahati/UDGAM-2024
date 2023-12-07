import React, { useState } from 'react';

import Speakercard from "./speakercard";
import speak2 from "./images/ashneer.png";
import speak0 from "./images/1673527877-anupammittal 2.png"
import speak1 from "./images/image 29979.png";




const Pastspeakers = () => {

   const [speakers,SETspeakers] =useState([{
    title:'Anupam Mittal',img:speak2,company:'Co founder,Shaadi.com',keyid:0
   },{title:'Narayana Murthy',img:'https://m.media-amazon.com/images/M/MV5BMGM3ZmY4YWItOTMyZC00ZjVjLWE5ZjMtNjE2M2Q3NmY2NzI1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg',company:'Co founder,Bharatpe',keyid:1},
   {title:'Ashneer Grover',img:'https://upload.wikimedia.org/wikipedia/commons/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG',company:'Co founder,Bharatpe',keyid:2},
   {title:'Ashneer Grover',img:'https://m.media-amazon.com/images/M/MV5BMGM3ZmY4YWItOTMyZC00ZjVjLWE5ZjMtNjE2M2Q3NmY2NzI1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg',company:'Co founder,Bharatpe',keyid:3},
   {title:'Ashneer Grover',img:'https://upload.wikimedia.org/wikipedia/commons/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG',company:'Co founder,Bharatpe',keyid:4}] );





    return (
<div>
        <div class="past1">
            
            {speakers.map((speaker) => (
              
                    <div>
            <div className="pastspeakerelement1">

           <img src={speaker.img} className="pastimg"></img>
           <div className="pasttitle" >
           <p className='pastname'> {speaker.title}</p> 
           <p className="pastcompany">{speaker.company}</p>
             
             </div>
             </div>


          

            

            


 </div>


  
           ))}
<div className="past2">

{speakers.map((speaker) => (
              
                    <div >
            <div className="pastspeakerelement2">

           <img src={speaker.img} className="pastimg"></img>
           <div className="pasttitle" >
           <p className='pastname'> {speaker.title}</p> 
           <p className="pastcompany">{speaker.company}</p>
             
             </div>
             </div>
             


            

            

            


 </div>


  
           ))}
           </div>
        </div>
        </div>

        
    )
}
 
export default Pastspeakers;