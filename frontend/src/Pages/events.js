import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../styles/events.css";
import mike from "../images/Mike1.svg";
import encode from "../images/events/logo/encode.png";
import internfair from "../images/events/logo/if.png";
import lecseries from "../images/events/logo/ls.png";
import startupexpo from "../images/events/logo/sexpo.png";
import pmx from "../images/events/logo/pmx.png";
import dframe from "../images/events/logo/dframe.png";
import disrupt from "../images/events/logo/disrupt.png";
import ned from "../images/events/logo/ned.png";
import fun from "../images/events/logo/fun.png";
import linkedin from "../images/events/logo/linkedin.png";
import sparkle from "../images/events/logo/sparkle.png";
import nec from "../images/events/logo/nec.png";
import openidea from "../images/events/logo/openidea.png";
// import headset from "../images/VR Headset Purp.svg";
// import puzzle1 from "../images/Puzzle1 Blue.svg";
// import screwpurp from "../images/Screw Purp.svg";
// import screwblue from "../images/Screw Blue.svg";
// import scene1 from "../images/Scene 10031 2.svg";
export const Events = () => {
    useEffect(() => {
        const tags = document.querySelectorAll('.tags');

        tags.forEach((tag) => {
            const tl = gsap.timeline({ paused: true });

            tl.to(tag.querySelector('.eventimg'), { y: -120, height: '13rem', duration: 0.5 })
                .to(tag.querySelector('.eventname'), { y: 10, fontSize: '25px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(tag.querySelector('.eventdesc1'), { y: 10, fontSize: '15px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                // .to(tag, { background: 'linear-gradient(to bottom left, rgba(178, 156, 243, 1),rgba(252, 251, 255, 1))', duration: 0.5 }, '-=0.5')
                // .to(tag.querySelector('.eventdesc2'), { opacity: 1, duration: 0.5 }, '-=0.5s')
                // .to(tag.querySelector('.register'), { opacity: 1, duration: 0.5 }, '-=0.5s');



            tag.addEventListener('mouseenter', () => {
                tl.play();
                tag.querySelector('.eventdesc2').style.display = 'block';
                // tag.querySelector('.register').style.display = 'block';
            }
            
            );
            tag.addEventListener('mouseleave', () => {
                tl.reverse(0);
                tag.querySelector('.eventdesc2').style.display = 'none';
                // tag.querySelector('.register').style.display = 'none';
            }
            );

            return () => {
                tag.removeEventListener('mouseenter', () => {
                    tl.play();
                    tag.querySelector('.eventdesc2').style.display = 'block';
                    // tag.querySelector('.register').style.display = 'block';
                }
                );
                tag.removeEventListener('mouseleave', () => {
                    tl.reverse(0);
                    tag.querySelector('.eventdesc2').style.display = 'none';
                    // tag.querySelector('.register').style.display = 'none';
                }
                );
            };
        });

        const fun = document.querySelector('#fun')
        console.log(fun)
        const tl = gsap.timeline({ paused: true });

            tl.to(fun.querySelector('.eventimg'), { y: -100, height: '6rem', duration: 0.5 })
                .to(fun.querySelector('.eventname'), { y: 10, fontSize: '25px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(fun.querySelector('.eventdesc1'), { y: 10, fontSize: '15px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                // .to(tag, { background: 'linear-gradient(to bottom left, rgba(178, 156, 243, 1),rgba(252, 251, 255, 1))', duration: 0.5 }, '-=0.5')
                // .to(tag.querySelector('.eventdesc2'), { opacity: 1, duration: 0.5 }, '-=0.5s')
                // .to(tag.querySelector('.register'), { opacity: 1, duration: 0.5 }, '-=0.5s');



            fun.addEventListener('mouseenter', () => {
                tl.play();
                fun.querySelector('.eventdesc2').style.display = 'block';
                // tag.querySelector('.register').style.display = 'block';
            }
            
            );
            fun.addEventListener('mouseleave', () => {
                tl.reverse(0);
                fun.querySelector('.eventdesc2').style.display = 'none';
                // tag.querySelector('.register').style.display = 'none';
            }
            );

            return () => {
                fun.removeEventListener('mouseenter', () => {
                    tl.play();
                    fun.querySelector('.eventdesc2').style.display = 'block';
                    // tag.querySelector('.register').style.display = 'block';
                }
                );
                fun.removeEventListener('mouseleave', () => {
                    tl.reverse(0);
                    fun.querySelector('.eventdesc2').style.display = 'none';
                    // tag.querySelector('.register').style.display = 'none';
                }
                );
            };
           
        
    }, []);

    return (
        <div className="eventlist">
            <div className="eventhead">Our Events</div>
            <div className="eventgrid">

                <div className="tags" id="if">
                    <img src={internfair} alt="internfair" className="eventimg" />
                    <p className="eventname">Intern Fair</p>
                    <p className="eventdesc1">Your Gateway to Internships</p>
                    <p className="eventdesc2">An exclusive event for IIT Guwahati peeps, InternFair brings internship opportunities to students in various profiles like Software Development, Analytics, Product Management, and many more..</p>
                    
                </div>
                <div className="tags" id="ls">
                    <img src={lecseries} alt="lecture series" className="eventimg" />
                    <p className="eventname">Lecture Series</p>
                    <p className="eventdesc1">Inspiring sessions by renowned figures</p>
                    <p className="eventdesc2">The Lecture Series brings together the most seasoned and accomplished professionals to impart their wisdom, insights, and experiences on the journey to building a successful startup.</p>
                    
                </div>
                <div className="tags" id="expo">
                    <img src={startupexpo} alt="StartUp Expo" className="eventimg" />
                    <p className="eventname">Startup Expo</p>
                    <p className="eventdesc1">Connect, Collaborate, and Innovate</p>
                    <p className="eventdesc2">Startup Expo is a unique opportunity for startups to showcase their products or services, receive valuable customer feedback, and connect with potential investors.</p>
                    
                </div>
                <div className="tags" id="pmx">
                    <img src={pmx} alt="PMx" className="eventimg" />
                    <p className="eventname">PMx</p>
                    <p className="eventdesc1">The Product Management Expedition</p>
                    <p className="eventdesc2">PMx is India's largest product case study competition. One has to bring out his observational, analytical, and researcher instinct and pour them out on the problem statement we provide.</p>
                    
                </div>
                <div className="tags" id="disrupt">
                    <img src={disrupt} alt="Disrupt" className="eventimg" />
                    <p className="eventname">Disrupt</p>
                    <p className="eventdesc1">North-East India's largest Startup Bootcamp</p>
                    <p className="eventdesc2">DISRUPT is a growth-oriented startup boot camp that adopts an inclusive approach designed to provide a competitive edge accommodating startups of all stages and backgrounds.</p>
                    
                </div>
                <div className="tags" id="ned">
                    <img src={ned} alt="NED" className="eventimg" />
                    <p className="eventname">NED</p>
                    <p className="eventdesc1">National Entrepreneurship Drive</p>
                    <p className="eventdesc2">NED is our latest initiative where we aim to promote the entrepreneur environment and startup urge by helping institutes of India set up their own Entrepreneurship Cells in their institutes.</p>
                    
                </div>
                <div className="tags" id="dframe">
                    <img src={dframe} alt="D-Frame" className="eventimg" />
                    <p className="eventname">D-Frame</p>
                    <p className="eventdesc1">UI/UX challenge blending Creativity & Coherence</p>
                    <p className="eventdesc2">DFrame is aimed to inculcate and enhance one's creativity with the business need of companies, and test the designer's innovative quotient to find technical solutions while staying true to the human-centric approach.</p>
                    
                </div>
                <div className="tags" id="encode">
                    <img src={encode} alt="encode" className="eventimg" />
                    <p className="eventname">Encode</p>
                    <p className="eventdesc1">Code to Innovate</p>
                    <p className="eventdesc2">Encode is a development hackathon where you will be provided with a real-life problem and you have to devise a feasible solution that caters to everyone's needs be it the users or the market.</p>
                    
                </div> 
                {/* <div className="tags" id="fun">
                    <img src={fun} alt="Fun Events" className="eventimg" />
                    <p className="eventname">Fun Events</p>
                    <p className="eventdesc1">Unleasing Thrills of Entrepreneurship</p>
                    <p className="eventdesc2">UDGAM is not only about boring learning and teaching. We also organize various fun events such as Stonks 11, IPL Auction, Monopoly, Split & Steal, Campus Sharks etc.</p>
                    
                </div> */}
                <div className="tags" id="fun">
                    <img src={openidea} alt="Fun Events" className="eventimg" />
                    <p className="eventname">Open Idea Challenge</p>
                    <p className="eventdesc1">IITG TIC-IDEX</p>
                    <p className="eventdesc2">Submit your startup ideas in
                    defence, aerospace, AI, quantum tech, and more. Engage with the military, and showcase your tech.</p>
                    
                </div>
                <div className="tags" id="linkedin">
                    <img src={linkedin} alt="LinkedIn" className="eventimg" />
                    <p className="eventname">LinkedIn Workshop</p>
                    <p className="eventdesc1">Comprehensive guide with industry experts</p>
                    <p className="eventdesc2">Boost your professional skills and network with top industry leaders at the LinkedIn workshop to get mentored from National and International LinkedIn Coaches and Strategist.</p>
                    
                </div>
                <div className="tags" id="sparkle">
                    <img src={sparkle} alt="sparkle" className="eventimg" />
                    <p className="eventname">Sparkle</p>
                    <p className="eventdesc1">A Student Entrepreneurship Bootcamp</p>
                    <p className="eventdesc2">Sparkle is an initiative to provide school students of grade 9-12th with a unique opportunity to delve into the world of entrepreneurship. A chance for young minds to explore and learn.</p>
                    
                </div>
                <div className="tags" id="nec">
                    <img src={nec} alt="NEC" className="eventimg" style={{height:"20%"}}/>
                    <p className="eventname">NEC</p>
                    <p className="eventdesc1">North East Conference</p>
                    <p className="eventdesc2">A platform for all the Northeast E-Cells to discuss on building a community of like-minded individuals, planning initiatives and programs to boost the startup ecosystem in the region, and discussing the impacts and prospects of entrepreneurship in the Northeast.</p>
                    
                </div>
            </div>
            {/* <img src={screwpurp} alt="screwpurp" className="screwpurp" />
            <img src={screwblue} alt="screblue" className="screwblue" />
            <img src={headset} alt="headset" className="headset" />
            <img src={puzzle1} alt="puzzle1" className="puzzle1" /> */}
            {/* <img src={scene1} alt="scene1" className="scene1" /> */}


        </div>
    );
};
