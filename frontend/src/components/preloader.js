import logo from '../images/udgamvideo-24.mp4'
import '../styles/preloader.css'
import Screw from '../images/Screw Purp.svg'
import Keyboard from '../images/KeyBoard Purp.svg'
import Arrow from '../images/Arrowhead Blue.svg'
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import {gsap,CSSPlugin} from 'gsap';
import udgamvideo from '../images/Comp 3.webm'
gsap.registerPlugin(CSSPlugin);



export const Preloader =()=>{
    const [counter,setCounter]=useState(0)

    useEffect(() => {

        
        
        gsap.set('.loading', { width: 0 ,opacity:0});
        gsap.set('.ProgressBar', { width: 0 });
        gsap.set('.count', { opacity: 0 });
        //this navbar belongs to Navbar.js
        gsap.set('.navbar',{opacity: 0 ,y: -50});
        gsap.set('.keyboard',{y:400,display:'none'});
        gsap.set('.screw1',{y:400,display:'none'});
        gsap.set('.screw2',{y:650,display:'none'});
        gsap.set('.arrow',{y:650,display:'none'});
        gsap.set('.box1',{opacity:0,y:150,display:'none'});
        gsap.set('.box2',{opacity:0,y:150,display:'none'});
        gsap.set('.box3',{opacity:0,y:150,display:'none'});
        gsap.set('.box4',{opacity:0,y:150,display:'none'});

       

        const video1 = document.querySelector('.UDGAM');
        const video2 = document.querySelector('.backgroundvideo');

        // Animation timeline
        
        const timeline = gsap.timeline();
        const counterTimeline = gsap.timeline();


        // Animation for the loading width
        timeline.to('.loading', { opacity: 1,scale:1, width: '680px', duration: 0.75, ease: 'linear' });
                
                
        //Animation for video and ProgressBar
        timeline.to(video1,{onStart: () => video1.play()})
                .to('.ProgressBar', { width: '678px', duration: 2.5, ease: 'linear' })
                .to('.count', { opacity: 1, duration: 1, ease: 'linear'},'-=2.75')
                .add(counterTimeline,'-=2.75');


        counterTimeline.to('.count', {
            duration: 2.75,
            ease: 'linear',
            onUpdate: () => {
                const value = Math.round(counterTimeline.progress() * 100);
                setCounter(Math.min(value, 100));
            },
        });      
            
        timeline.to(['.loading','.ProgressBar','.count'],{opacity:0,duration:1,onComplete: () => {
            // Remove elements from the DOM after the animation is complete
            const elementsToRemove = document.querySelectorAll('.loading, .ProgressBar, .count');
            elementsToRemove.forEach((element) => element.remove());
          },});
        timeline.to(video1,{scale:0.8,duration:1,y:-80});
        timeline.to('.navbar',{opacity:1,duration: 0.5,y:0});
        timeline.to(video2,{onStart: () => video2.play()},'-=1');
        timeline.to('.keyboard',{duration:1,y:0,display:'inline'},'-=1');
        timeline.to('.screw1',{duration:1,y:0,display:'inline'},'-=1');
        timeline.to('.screw2',{duration:1,y:0,display:'inline'},'-=1');
        timeline.to('.arrow',{duration:1,y:0,display:'inline'},'-=1');
        timeline.to(video1,{duration:1.5,y:-1000},'+=2.75');
        timeline.to('.arrow',{duration:1,y:-1000},'-=1');
        timeline.to('.screw2',{duration:1,y:-1000},'-=1');
        timeline.to('.screw1',{duration:1,y:-1000},'-=0.75');
        timeline.to('.keyboard',{duration:1,y:-1000},'-=1');
        timeline.to('.box1',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        timeline.to('.box2',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        timeline.to('.box3',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        timeline.to('.box4',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');

        return () => {
          timeline.kill(); 
          counterTimeline.kill();// Kill the timeline on component
          
        };
      }, []);

    return(
        <div className="preloader">
            <video src ={udgamvideo}  alt='video' className='backgroundvideo' muted loop></video>
            <video src ={logo} alt='Udgam'  className='UDGAM' muted></video>
            <img src={Keyboard} alt='keyboard' className='keyboard'></img>
            <img src={Screw} alt='screw1' className='screw1'></img>
            <img src={Screw} alt='screw2' className='screw2'></img>
            <img src={Arrow} alt='arrow' className='arrow'></img>
        
            
            <div className = 'loading'>
                <div className='ProgressBar' ></div>
            </div>
            <p className='count'>{counter}</p>
            <div className='box1'>
             <p style={{fontSize:'20px',fontWeight:'bolder',marginTop:'0px',marginBottom:'6px'}}>Quality 1</p>  
                <p style={{fontSize:'15px',fontWeight:'300',marginTop:'0px',marginBottom:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='box2'>
                <p style={{fontSize:'20px',fontWeight:'bolder',marginTop:'0px',marginBottom:'6px'}}>Quality 2</p>
                <p style={{fontSize:'15px',fontWeight:'300',marginTop:'0px',marginBottom:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit perspiciatis ad, possimus commodi explicabo.</p>
            </div>
            <div className='box3'>
              <p style={{fontSize:'20px',fontWeight:'bolder',marginTop:'0px',marginBottom:'6px'}}>Quality 3</p>
                <p style={{fontSize:'15px',fontWeight:'300',marginTop:'0px',marginBottom:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehendert.</p>
            </div>
            <div className='box4'>
                <p style={{fontSize:'20px',fontWeight:'bolder',marginTop:'0px',marginBottom:'6px'}}>Quality 4</p>  
                <p style={{fontSize:'15px',fontWeight:'300',marginTop:'0px',marginBottom:'2px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit perspiciatis ad, possimus commodi explicabo.</p>
            </div>
        </div>
    )
}




