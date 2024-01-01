
import './App.css';

import Navbar from './components/Navbar';
import NavbarNew from './components/NavbarNew';
import {Route,Routes} from "react-router-dom"
import {Schedule} from "./Pages/schedule"
import {Events} from "./Pages/events"
import { Sponsors } from './Pages/sponsors';
import {About_us} from "./Pages/about_us"
import {BuyPass} from "./Pages/buy_pass"
import {Home} from "./Pages/homepage"
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  

  return (
    <div className="App">
        <Helmet>
          <title>UDGAM 2024</title>
          <meta name="description" content="This is the official website of Udgam 2024" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        {/* <Navbar/> */}
        <NavbarNew/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Sponsors" element={<Sponsors/>} />
          <Route path="/About_us" element={<About_us/>} />
          <Route path="/BuyPass" element={<BuyPass/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
