import { Navbar } from './Components/Navbar';
import { MainArea } from './Components/MainArea';
import { TrustedComp } from './Components/TrustedComp';
import './App.css';
import './Styles/Navbar.css'
import './Styles/MainArea.css'
import './Styles/TrustedComp.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainArea/>
      <TrustedComp/>
    </div>
  );
}

export default App;
