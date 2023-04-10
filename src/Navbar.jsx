import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbarlogo">
        <h4>Nikhil</h4>
        <h5>Software Developer</h5>
      </div>
      <div className="Navbarlinks">
        <a href="#landing">Home</a>
        <a href="#projects">Projects</a>
        <a href="#hireme">Hire Me</a>
      </div>
    </div>
  );
}

export default Navbar;
