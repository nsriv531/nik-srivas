import "./App.css";

function Navbar() {
  return (
    <div className="Navbar bg-gradient-to-r from-lavender-pink to-light-cyan">
      <div className="Navbarlogo text-3xl font-bold mb-1 text-gray-800">
        <h2>Nik</h2>
        <h2>Software Developer</h2>
      </div>
      <div className="Navbarlinks text-gray-800">
        <a href="#landing">Home</a>
        <a href="#projects">Projects</a>
        <a href="#hireme">My Resume</a>
      </div>
    </div>
  );
}

export default Navbar;
