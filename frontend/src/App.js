
import './App.css';

import Navbar from './components/Navbar';

import {Route,Routes} from "react-router-dom"
import {Schedule} from "./components/navbar_pages/schedule"
import {Events} from "./components/navbar_pages/events"
import {Merch} from "./components/navbar_pages/merch"
import {About_us} from "./components/navbar_pages/about_us"
import {BuyPass} from "./components/navbar_pages/buy_pass"
import {Home} from "./components/homepage"
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
    </div>
  );
}

export default App;
