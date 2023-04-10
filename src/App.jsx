import "./App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import HireMe from "./HireMe";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
