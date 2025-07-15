import "./App.css";
import ResumeButton from "./ResumeButton"; // Importing the ResumeButton component

function Navbar() {
  return (
    <div className="Navbar bg-gradient-to-r from-lavender-pink to-light-cyan">
     <div className="Navbarlogo text-2xl font-semibold text-gray-800 leading-tight">
  <h4>Nik</h4>
  <h4> Software + Data Developer</h4>
</div>

      <div className="Navbarlinks text-gray-800">
        <a href="#landing">Home</a>
        <a href="#projects">Projects</a>
        <ResumeButton /> {/* Using the ResumeButton component */}
      </div>
    </div>
  );
}

export default Navbar;
