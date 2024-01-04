import React, { useState, useEffect } from 'react';
import Speakerspage from '../components/Speakerspage';
import Navbar from '../components/Navbar';
import '../styles/Speakerspage.css'
import Udgam from '../components/UdgamPass';
import Merchandise from '../components/Merchandise';
import Sponsers from '../components/Sponsors';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import { Preloader } from '../components/preloader';
import Events from '../components/Events';

export const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    // const [animationComplete, setAnimationComplete] = useState(true);

    useEffect(() => {

        // Disable scrolling during animation
        document.body.style.overflow = 'hidden';

        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
            // Enable scrolling after animation is complete
            document.body.style.overflow = 'visible';
        }, 5700);

        // Clear the timeout to prevent memory leaks
        return () => {
            clearTimeout(animationTimeout);
            // Ensure scrolling is re-enabled in case the component unmounts before the animation completes
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (

        <div className="HomePage" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Preloader setAnimationComplete={setAnimationComplete} />
            {animationComplete && (
                <>
                    <Udgam />
                    <Events />
                    <Speakerspage />
                    <Merchandise />
                    {/* <Sponsers /> */}
                    {/* <FAQs /> */}
                </>
            )}
        </div>
    )
}