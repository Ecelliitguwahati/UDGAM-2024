import React, { useState } from 'react';

import Speakercard from "./speakercard";
import speak2 from "./images/ashneer.png";
import speak0 from "./images/1673527877-anupammittal 2.png"
import speak1 from "./images/image 29979.png";




const Speakers = () => {

   const [speakers,SETspeakers] =useState([{
    title:'Anupam Mittal',img:speak2,company:'Co founder,Shaadi.com',keyid:0
   },{title:'Narayana Murthy',img:'https://m.media-amazon.com/images/M/MV5BMGM3ZmY4YWItOTMyZC00ZjVjLWE5ZjMtNjE2M2Q3NmY2NzI1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg',company:'Co founder,Bharatpe',keyid:1},
   {title:'Ashneer Grover',img:'https://upload.wikimedia.org/wikipedia/commons/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG',company:'Co founder,Bharatpe',keyid:2},
   {title:'Ashneer Grover',img:'https://m.media-amazon.com/images/M/MV5BMGM3ZmY4YWItOTMyZC00ZjVjLWE5ZjMtNjE2M2Q3NmY2NzI1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg',company:'Co founder,Bharatpe',keyid:3},
   {title:'Ashneer Grover',img:'https://upload.wikimedia.org/wikipedia/commons/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG',company:'Co founder,Bharatpe',keyid:4}] );



const rightclick = () => {
    setTimeout(()=>{ SETspeakers([speakers[1],speakers[2],speakers[3],speakers[4],speakers[0],]);},100)
   
    
}

const leftclick = () => {
    setTimeout(()=>{ SETspeakers([speakers[4],speakers[0],speakers[1],speakers[2],speakers[3],]);},100)
   
    
}


const mainspeaker = speakers[2];
const speaker0 = speakers[0];
const speaker1 = speakers[1];
const speaker3 = speakers[3];
const speaker4 = speakers[4];


   console.log(speakers);


    return (<div className="Speakers">
        <div className="sidespeaker" >
            <img className="sideimg" src={speaker0.img}>
            </img>

        </div>
        <div className="sidespeaker">
        <img  className="sideimg" src={speaker1.img}>
            </img>
            </div>


          <Speakercard
           key={mainspeaker.keyid}
           title={mainspeaker.title}
           img={mainspeaker.img}
           company={mainspeaker.company}
           leftclick = {leftclick}
           rightclick = {rightclick}
          />

     <div className="sidespeaker">
     <img  className="sideimg" src={speaker3.img}>
            </img>
            </div>
            <div className="sidespeaker">
            <img  className="sideimg" src={speaker4.img}>
            </img>
            </div>
    </div>  );
}
 
export default Speakers;