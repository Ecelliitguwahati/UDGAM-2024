import React, { useState, useEffect } from 'react';
import './App.css';
import Speakerspage from './components/Speakerspage';
import './styles/Speakerspage.css'
import Navbar from './components/Navbar';
import './components/WhIsUdgam';
import Udgam from './components/WhIsUdgam';
import Merchandise from './components/Merchandise';
import Sponsers from './components/Spnsers';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import { Preloader } from './components/preloader';

function App() {
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
    <div className={`App ${animationComplete ? 'showContent' : 'hideContent'}`}>
      <div className="HomePage" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Navbar setAnimationComplete={setAnimationComplete} />
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
    </div>
  );
}

export default App;
