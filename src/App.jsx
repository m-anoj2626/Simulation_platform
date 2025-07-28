import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MissionPage from "./components/About-page/MissionPage";
import TeamPage from "./components/About-page/TeamPage";
import StoryPage from "./components/About-page/StoryPage";
import PartnersPage from "./components/About-page/PartnersPage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Blog from "./pages/Blog";
// import SimulationType from "./components/simulation-page/simulation_type";
import Simulations from "./pages/Simulations";
import AdminDashboard from "./pages/Admin";
// import SimulationCompletion from "./components/simulation-page/SimulationCompletion";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Help />} />
        <Route path="/Blog" element={<Blog />} />
         <Route path="/admin" element={<AdminDashboard/>} />
        {/* <Route path="/simulations/types" element={<Simulations />} />
        <Route path="/simulations/SimulationComp" element={<SimulationCompletion/>} /> */}
        
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/story" element={<StoryPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/about/partners" element={<PartnersPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
