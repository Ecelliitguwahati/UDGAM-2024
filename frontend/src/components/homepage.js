import React, { useState, useEffect } from 'react';
import Speakerspage from './Speakerspage';
import Navbar from './Navbar';
import '../styles/Speakerspage.css'
import Udgam from './WhIsUdgam';
import Merchandise from './Merchandise';
import Sponsers from './Spnsers';
import FAQs from './FAQs';
import Footer from './Footer';
import { Preloader } from './preloader';

export const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {

        // Disable scrolling during animation
        document.body.style.overflow = 'hidden';

        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
            // Enable scrolling after animation is complete
            document.body.style.overflow = 'visible';
        }, 9700);

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
                    <Speakerspage />
                    <Merchandise />
                    <Sponsers />
                    <FAQs />
                    <Footer />
                </>
            )}
        </div>
    )
}