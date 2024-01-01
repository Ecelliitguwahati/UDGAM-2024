import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../styles/events.css";
import mike from "../images/Mike1.svg";
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
        <div className="eventlist">
            <div className="eventhead">Our Events</div>
            <div className="eventgrid">

                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Intern Fair</p>
                    <p className="eventdesc1">A platform for Start-ups to hire talented interns</p>
                    <p className="eventdesc2">An exclusive event for IIT Guwahati peeps, InternFair brings internship opportunities to students in various profiles like Software Development, Analytics, Product Management, and many more. This is a top-notch opportunity for the students to gain industry experience and also prepares them for the upcoming internship and placement processes.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Lecture Series</p>
                    <p className="eventdesc1">Inspiring sessions with accomplished personalities</p>
                    <p className="eventdesc2">The Lecture Series brings together the most seasoned and accomplished professionals to impart their wisdom, insights, and experiences on the journey to building a successful startup. Gives you a chance to learn from the best, grow as an entrepreneur, and turn your ideas into a thriving business.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Startup Expo</p>
                    <p className="eventdesc1">Connect, Collaborate, and Innovate</p>
                    <p className="eventdesc2">Startup Expo is a unique opportunity for startups to showcase their products or services, receive valuable customer feedback, and connect with potential investors. It is being organised with the goal of promoting innovation and entrepreneurship and providing a platform for startups to exchange ideas and explore research and development opportunities.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">PMx</p>
                    <p className="eventdesc1">The Product Management Expedition</p>
                    <p className="eventdesc2">PMx is India's largest product case study competition. One has to bring out his observational, analytical, and researcher instinct and pour them out on the problem statement we provide. It is an item contextual analysis rivalry where you will encounter the adventure of chipping away at an item, rowing the product cycle, and making an incredible product that your clients will adore.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Disrupt</p>
                    <p className="eventdesc1">North-East India's largest Startup Bootcamp</p>
                    <p className="eventdesc2">DISRUPT is a growth-oriented startup boot camp that adopts an inclusive approach designed to provide a competitive edge accommodating startups of all stages and backgrounds. Disrupt has handheld over 500 startups in its journey, aiming to quickly equip participants with essential topics such as business development, marketing, GTM, and product development having our structure aligned with track specifications</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">NED</p>
                    <p className="eventdesc1">National Entrepreneurship Drive</p>
                    <p className="eventdesc2">National Entrepreneurship Drive is our latest initiative where we aim to promote the entrepreneur environment and startup urge by helping institutes of India set up their own Entrepreneurship Cells in their institutes.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">D-Frame</p>
                    <p className="eventdesc1">A UI/UX challenge blending creativity and coherence</p>
                    <p className="eventdesc2">DFrame is a one of its kind UI/UX competition. Aimed to inculcate and enhance one's creativity with the business need of companies, DFrame tests the designer's innovative quotient by flexing their design muscle to find technical solutions while staying true to the human-centric approach.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Encode</p>
                    <p className="eventdesc1">Code to Innovate</p>
                    <p className="eventdesc2">An entrepreneur's task is to solve real-life real-world problems by developing a feasible solution that caters to everyone's needs be it the users or the market. Focussing on this, Encode is a development hackathon where you will be provided with a real-life problem and you have to devise a solution for it.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Fun Events</p>
                    <p className="eventdesc1">Unleasing Thrills of Entrepreneurship</p>
                    <p className="eventdesc2">UDGAM is not only about boring learning and teaching. We also organize various fun events such as Stonks 11, IPL Auction, Monopoly, etc.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">LinkedIn Workshop</p>
                    <p className="eventdesc1">Comprehensive guide with industry experts</p>
                    <p className="eventdesc2">Boost your professional skills and network with top industry leaders at the LinkedIn workshop to get mentored from National and International LinkedIn Coaches and Strategist. Join us for a three-day workshop on 5-6-7th January from 6.30 pm onwards and learn the latest tips and tricks. It will be a Certified Workshop.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">Sparkle</p>
                    <p className="eventdesc1">A pitching platform for young aspiring entrepreneurs</p>
                    <p className="eventdesc2">Minutes of the spotlight to showcase your entrepreneurship and pitching skills exclusive for young teenagers. Sparkle is a pitching ground for school students and an opportunity to show themselves under the unwavering attention of the whole panel, including various Angel Investors and Venture Capitalists, to put their startup idea.</p>
                    <a href="#" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">NEC</p>
                    <p className="eventdesc1">North East Conference</p>
                    <p className="eventdesc2">Minutes of the spotlight to showcase your entrepreneurship and pitching skills exclusive for young teenagers. Sparkle is a pitching ground for school students and an opportunity to show themselves under the unwavering attention of the whole panel, including various Angel Investors and Venture Capitalists, to put their startup idea.</p>
                    <a href="#" alt="" className='register'>Register</a>
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
