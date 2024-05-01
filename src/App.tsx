import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import Home from "./components/pages/Home";
import Swap from "./components/pages/Swap";
import Pool from "./components/pages/Pool";

function App() {
  return (
    <Router>
      <div>
        <div className="relative z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/pool" element={<Pool />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
