import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../styles/events.css";
import mike from "../images/Mike1.svg";
import pmx from "../images/PMx.svg";
import encode from "../images/Encode.svg";
import ned from "../images/NED.svg";

const Events = () => {
    useEffect(() => {
        const tags = document.querySelectorAll('.tags');

        tags.forEach((tag) => {
            const tl = gsap.timeline({ paused: true });

            tl.to(tag.querySelector('.eventimg'), { y: -120, height: '13rem', duration: 0.5 })
                .to(tag.querySelector('.eventname'), { y: 10, fontSize: '25px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(tag.querySelector('.eventdesc1'), { y: 10, fontSize: '15px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(tag, { background: 'linear-gradient(to bottom left, rgba(178, 156, 243, 1),rgba(252, 251, 255, 1))', duration: 0.5 }, '-=0.5')
                // .to(tag.querySelector('.eventdesc2'), { opacity: 1, duration: 0.5 }, '-=0.5s')
                // .to(tag.querySelector('.register'), { opacity: 1, duration: 0.5 }, '-=0.5s');



            tag.addEventListener('mouseenter', () => {
                tl.play();
                tag.querySelector('.eventdesc2').style.display = 'block';
                tag.querySelector('.register').style.display = 'block';
            }
            
            );
            tag.addEventListener('mouseleave', () => {
                tl.reverse(0);
                tag.querySelector('.eventdesc2').style.display = 'none';
                tag.querySelector('.register').style.display = 'none';
            }
            );

            return () => {
                tag.removeEventListener('mouseenter', () => {
                    tl.play();
                    tag.querySelector('.eventdesc2').style.display = 'block';
                    tag.querySelector('.register').style.display = 'block';
                }
                );
                tag.removeEventListener(() => {
                    tl.reverse(0);
                    tag.querySelector('.eventdesc2').style.display = 'none';
                    tag.querySelector('.register').style.display = 'none';
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
                <div className="tags">
                    <img src={ned} alt="mike" className="eventimg" />
                    <p className="eventname">NED</p>
                    <p className="eventdesc1">National Entrepreneurship Drive</p>
                    <p className="eventdesc2">National Entrepreneurship Drive is our latest initiative where we aim to promote the entrepreneur environment and startup urge by helping institutes of India set up their own Entrepreneurship Cells in their institutes.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={pmx} alt="mike" className="eventimg" />
                    <p className="eventname">PMx</p>
                    <p className="eventdesc1">The Product Management Expedition</p>
                    <p className="eventdesc2">PMx is India's largest product case study competition. One has to bring out his observational, analytical, and researcher instinct and pour them out on the problem statement we provide. It is an item contextual analysis rivalry where you will encounter the adventure of chipping away at an item, rowing the product cycle, and making an incredible product that your clients will adore.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={encode} alt="mike" className="eventimg" />
                    <p className="eventname">Encode</p>
                    <p className="eventdesc1">Code to Innovate</p>
                    <p className="eventdesc2">An entrepreneur's task is to solve real-life real-world problems by developing a feasible solution that caters to everyone's needs be it the users or the market. Focussing on this, Encode is a development hackathon where you will be provided with a real-life problem and you have to devise a solution for it.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events;