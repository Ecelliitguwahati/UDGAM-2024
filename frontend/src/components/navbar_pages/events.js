import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../../styles/events.css";
import mike from "../../images/Mike1.svg";
import headset from "../../images/VR Headset Purp.svg";
import puzzle1 from "../../images/Puzzle1 Blue.svg";
import screwpurp from "../../images/Screw Purp.svg";
import screwblue from "../../images/Screw Blue.svg";
import scene1 from "../../images/Scene 10031 2.svg";
export const Events = () => {
    useEffect(() => {
        const tags = document.querySelectorAll('.tags');

        tags.forEach((tag) => {
            const tl = gsap.timeline({ paused: true });

            tl.to(tag.querySelector('.eventimg'), { y: -120, height: '13rem', duration: 0.5 })
                .to(tag.querySelector('.eventname'), { y: 10, fontSize: '25px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(tag.querySelector('.eventdesc1'), { y: 10, fontSize: '15px', duration: 0.5, backgroundColor: 'rgba(206, 197, 236, 0)' , ease: 'ease' }, '-=0.5')
                .to(tag, { background: 'linear-gradient(to bottom left, rgba(178, 156, 243, 1),rgba(252, 251, 255, 1))', duration: 0.5 }, '-=0.5')
                .to(tag.querySelector('.eventdesc2'), { opacity: 1, duration: 0.5 }, '-=0.5s')
                .to(tag.querySelector('.register'), { opacity: 1, duration: 0.5 }, '-=0.5s');



            tag.addEventListener('mouseenter', () => tl.play());
            tag.addEventListener('mouseleave', () => tl.reverse(0));

            return () => {
                tag.removeEventListener('mouseenter', () => tl.play());
                tag.removeEventListener('mouseleave', () => tl.reverse(0));
            };
        });
    }, []);

    return (
        <div className="eventlist">
            <div className="eventhead">Events List</div>
            <div className="eventgrid">

                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
                <div className="tags">
                    <img src={mike} alt="mike" className="eventimg" />
                    <p className="eventname">DISRUPT</p>
                    <p className="eventdesc1">Internship, Internship, Internship</p>
                    <p className="eventdesc2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus cum odio dolores autem eligendi praesentium provident fuga sed distinctio modi recusandae culpa assumenda ab maxime repellendus minima, laboriosam vitae eveniet! Ullam beatae eius, laborum quam dicta minima necessitatibus ratione facilis eveniet ad. Neque cupiditate laborum alias mollitia rerum error.</p>
                    <a href="/" alt="" className='register'>Register</a>
                </div>
            </div>
            <img src={screwpurp} alt="screwpurp" className="screwpurp" />
            <img src={screwblue} alt="screblue" className="screwblue" />
            <img src={headset} alt="headset" className="headset" />
            <img src={puzzle1} alt="puzzle1" className="puzzle1" />
            {/* <img src={scene1} alt="scene1" className="scene1" /> */}


        </div>
    );
};
