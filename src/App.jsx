import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import Volunteering from "./Volunteering";
import Footer from "./Footer";
import GameDev from "./GameDev";

function HomePage() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Volunteering />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gamedev" element={<GameDev />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;