import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../styles/events.css";
import mike from "../images/Mike1.svg";
import ned from "../images/events/logo/ned.png";
import disrupt from "../images/events/logo/disrupt.png";
import sexpo from "../images/events/logo/sexpo.png";

const Events = () => {
    useEffect(() => {
        const tags = document.querySelectorAll('.tags');

        tags.forEach((tag) => {
            const tl = gsap.timeline({ paused: true });

            tl.to(tag.querySelector('.eventimg'), { y: -120, height: '10rem', duration: 0.5 })
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
                tag.removeEventListener(() => {
                    tl.reverse(0);
                    tag.querySelector('.eventdesc2').style.display = 'none';
                    // tag.querySelector('.register').style.display = 'none';
                }
                );
            };
        });
    }, []);

  return (
    <div className="events">
        <div className="eventlist-home">
            <div className="eventhead-home">
                <div className="eventtitle-home">Our Events</div>
                <a href="/Events" className="more-events">View all Events</a>
            </div>
            <div className="eventgrid-home">
                <div className="tags ned">
                    <img src={ned} alt="mike" className="eventimg" />
                    <p className="eventname">NED</p>
                    <p className="eventdesc1">National Entrepreneurship Drive</p>
                    <p className="eventdesc2">National Entrepreneurship Drive is our latest initiative where we aim to promote the entrepreneur environment and startup urge by helping institutes of India set up their own Entrepreneurship Cells in their institutes.</p>
                    
                </div>
                <div className="tags disrupt">
                    <img src={disrupt} alt="mike" className="eventimg" />
                    <p className="eventname">Disrupt</p>
                    <p className="eventdesc1">North-East India's largest Startup Bootcamp</p>
                    <p className="eventdesc2">DISRUPT is a growth-oriented startup boot camp that adopts an inclusive approach designed to provide a competitive edge accommodating startups of all stages and backgrounds.</p>
                    
                </div>
                <div className="tags sexpo">
                    <img src={sexpo} alt="mike" className="eventimg" />
                    <p className="eventname">Startup Expo</p>
                    <p className="eventdesc1">Connect, Collaborate, and Innovate</p>
                    <p className="eventdesc2">Startup Expo is a unique opportunity for startups to showcase their products or services, receive valuable customer feedback, and connect with potential investors.</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events;