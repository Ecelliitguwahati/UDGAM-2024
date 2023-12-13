import React from 'react';
import leftclick from './images/Vector 67.png';
import rightclick from './images/Vector 67 (1).png';


const Speakercard = (props) => {
  return (
    <div className="mainspeaker">
      <img className="mainimg" src={props.img} alt={props.title} />

      <div className='mainnamediv'>
      <button className='buttonspeaker' onClick={props.leftclick} src={leftclick}>
       <img src={leftclick}></img>
        </button>
    <div className='maintitlediv' >
      <p className='maintitle'>{props.title}</p>
      <p className='companyname'>{props.company}</p>
      </div>

     
      <button className='buttonspeaker' onClick={props.rightclick} src={rightclick}>
        <img src={rightclick}>
        </img>
        </button>
        </div>
    </div>
   
  );
};

export default Speakercard;
