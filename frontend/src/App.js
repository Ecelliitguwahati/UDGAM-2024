
import './App.css';

import Navbar from './components/Navbar';

import {Route,Routes} from "react-router-dom"
import {Schedule} from "./Pages/schedule"
import {Events} from "./Pages/events"
import {Merch} from "./Pages/merch"
import {About_us} from "./Pages/about_us"
import {BuyPass} from "./Pages/buy_pass"
import {Home} from "./Pages/homepage"
import Footer from './components/Footer';
function App() {
  

  return (
    <div className="App">

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Merch" element={<Merch/>} />
          <Route path="/About_us" element={<About_us/>} />
          <Route path="/BuyPass" element={<BuyPass/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
