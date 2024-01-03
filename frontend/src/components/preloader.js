import logo from '../images/Loading screen_VP9.webm'
import '../styles/preloader.css'
import Screw from '../images/Screw Purp.svg'
import Keyboard from '../images/KeyBoard Purp.svg'
import Arrow from '../images/Arrowhead Blue.svg'
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import {gsap,CSSPlugin} from 'gsap';
import udgamvideo from '../images/platform loop_VP9.webm'
import UdgamPass from '../images/UdgamPass.png'
gsap.registerPlugin(CSSPlugin);



export const Preloader =()=>{
    const [counter,setCounter]=useState(0);
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // useEffect(() => {
    //     const tiltEls = document.querySelectorAll('.tilts')

    //     const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

    //     tiltEls.forEach(tilt => {
    //         const height = tilt.clientHeight
    //         const width = tilt.clientWidth

    //         tilt.addEventListener('mousemove', (e) => {
    //             console.log("mousemove")
    //             const x = e.layerX
    //             const y = e.layerY
    //             const multiplier = 40

    //             const xRotate = multiplier * ((x - width / 2) / width)
    //             const yRotate = -multiplier * ((y - height / 2) / height)

    //             tilt.style.transform = tiltMove(xRotate, yRotate)
    //         })

    //         tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
    //     })
    // }
    // )

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
        // gsap.set('.tilts',{opacity:0});
        // gsap.set('.box1',{opacity:0,y:150,display:'none'});
        // gsap.set('.box2',{opacity:0,y:150,display:'none'});
        // gsap.set('.box3',{opacity:0,y:150,display:'none'});
        // gsap.set('.box4',{opacity:0,y:150,display:'none'});

       gsap.set('.backgroundvideo',{y:470});

        const video1 = document.querySelector('.UDGAM');
        // const video2 = document.querySelector('.backgroundvideo');

        // Animation timeline
        
        const timeline = gsap.timeline();
        const counterTimeline = gsap.timeline();


        // Animation for the loading width
        timeline.to('.loading', { opacity: 1,scale:1,width: mediaQuery.matches ? '330px' : '680px', duration: 0.75, ease: 'linear' });
                
                
        //Animation for video and ProgressBar
        timeline.to(video1,{onStart: () => video1.play()})
                .to('.ProgressBar', { width: mediaQuery.matches ? '328px' : '678px', duration: 2.5, ease: 'linear' })
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
        timeline.to(video1,(mediaQuery.matches?{scale:1,duration:1,y:-200}:{scale:0.5,duration:1,y:-160}));
        timeline.to('.navbar',{opacity:1,duration: 0.5,y:0});
        timeline.to('.preloader',(mediaQuery.matches?{height:"20vh"}:{}),"-=0.5");
        timeline.to('.backgroundvideo',{y:20},'-=1');
        timeline.to('.keyboard',{duration:1,y:0,display:mediaQuery.matches ? 'none' : 'inline'},'-=1');
        timeline.to('.screw1',{duration:1,y:0,display:mediaQuery.matches ? 'none' : 'inline'},'-=1');
        timeline.to('.screw2',{duration:1,y:0,display:mediaQuery.matches ? 'none' : 'inline'},'-=1');
        timeline.to('.arrow',{duration:1,y:0,display:mediaQuery.matches ? 'none' : 'inline'},'-=1');
        // timeline.to(video1,{duration:1.5,y:-200},'+=2.75');
        // timeline.to('.tilts',{opacity:1,duration:0.5},'-=1');
        // timeline.to('.arrow',{duration:1,y:-1000},'-=1');
        // timeline.to('.screw2',{duration:1,y:-1000},'-=1');
        // timeline.to('.screw1',{duration:1,y:-1000},'-=1');
        // timeline.to('.keyboard',{duration:1,y:-1000},'-=1');
        // timeline.to('.box1',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        // timeline.to('.box2',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        // timeline.to('.box3',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');
        // timeline.to('.box4',{duration:1,y:0,opacity:1,display:'block',ease:"Power3.easeOut"},'-=1');

        return () => {
          timeline.kill(); 
          counterTimeline.kill();// Kill the timeline on component
          
        };
      }, []);

    return(
        <div className="preloader">
            <video src ={udgamvideo} type="video/webm" alt='video' className='backgroundvideo' autoPlay muted loop></video>
            <video src ={logo} alt='Udgam' type="video/webm" className='UDGAM' muted ></video>
            <img src={Keyboard} alt='keyboard' className='keyboard'></img>
            <img src={Screw} alt='screw1' className='screw1'></img>
            <img src={Screw} alt='screw2' className='screw2'></img>
            <img src={Arrow} alt='arrow' className='arrow'></img>
        
            
            <div className = 'loading'>
                <div className='ProgressBar' ></div>
            </div>
            <p className='count'>{counter}</p>

            {/* <div className="tilts">
                    <div className="tilts__content">
                        <img src={UdgamPass} alt="UDGAM24Purp"/>
                    </div>
            </div>
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
            </div> */}
        </div>
    )
}




