import './App.css';
import Navbar from './Navbar';
import './WhIsUdgam';
import Udgam from './WhIsUdgam';
import Merchandise from './Merchandise';
import Sponsers from './Spnsers';
 
function App() {
  return (
    <div className="App">
      <div className="HomePage">
      <Navbar />;
       <Udgam />;
       <Merchandise />;
       <Sponsers />;
      </div>
      
    </div>
  );
}

export default App;
