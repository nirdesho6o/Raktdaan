import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from  './pages/Home';
import Router,{BrowserRouter, Route, Routes} from 'react-router-dom' ;
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import Contact from './pages/Contact';
import 'jquery'; import 'popper.js'; import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import DonorRequest from './pages/DonorRequest';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donor-request" element={<DonorRequest />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
