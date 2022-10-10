import { Navbar } from './Components/Navbar';
import { MainArea } from './Components/MainArea';
import { TrustedComp } from './Components/MainPageComponents';
import { WorkExperience } from './Components/MainPageComponents';
import { PlacementOffers } from './Components/MainPageComponents';
import { HowItWorks } from './Components/MainPageComponents';
import { UniqueFeatures } from './Components/MainPageComponents';
import './App.css';
import './Styles/Navbar.css'
import './Styles/MainArea.css'
import './Styles/TrustedComp.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainArea />
      <TrustedComp />
      <WorkExperience />
      <PlacementOffers />
      <HowItWorks />
      <UniqueFeatures />
    </div>
  );
}

export default App;
