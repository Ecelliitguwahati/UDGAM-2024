
import './App.css';

import Navbar from './components/Navbar';
import NavbarNew from './components/NavbarNew';
import {Route,Routes} from "react-router-dom"
import {Schedule} from "./Pages/schedule"
import {Events} from "./Pages/events"
import { Sponsors } from './Pages/sponsors';
import {AboutUs} from "./Pages/about_us"
import {BuyPass} from "./Pages/buy_pass"
import {Home} from "./Pages/homepage"
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import TnC from './Pages/TnC';
import Refund from './Pages/Refund';
import Privacy from './Pages/Privacy';

function App() {
  

  return (
    <div className="App">
        <Helmet>
          <title>UDGAM 2024</title>
          <meta name="description" content="This is the official website of Udgam 2024, IIT Guwahati." />
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:title" content="UDGAM 2024"/>
          <meta property="og:image" content="/images/Udgam Rhombus.png"/>
          <meta property="og:description" content="This is the official website of UDGAM 2024, IIT Guwahati."/>
          <meta property="og:url" content="https://www.udgamiitg.com"/>
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        {/* <Navbar/> */}
        <NavbarNew/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Sponsors" element={<Sponsors/>} />
          <Route path="/About_us" element={<AboutUs/>} />
          <Route path="/BuyPass" element={<BuyPass/>} />
          <Route path="/TnC" element={<TnC/>} />
          <Route path="/Refund" element={<Refund/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
