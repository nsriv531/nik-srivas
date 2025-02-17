import "./App.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div>
          <h4>Nik</h4>
          <h5>Software Developer</h5>
        </div>
        <div>
          <h4>Home</h4>
          <h5>Projects</h5>
        </div>
        <div className="socials">
          {/* Itch.io Link */}
          <a href="https://nashdashin.itch.io/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://static.itch.io/images/itchio-textless-black.svg" 
              alt="Itch.io" 
              width="40" 
              height="40" 
            />
          </a>
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/nik-srivastava/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="LinkedIn" 
              width="40" 
              height="40" 
            />
          </a>
        </div>
      </div>
      <small>2024 © Nik. All rights reserved.</small>
    </>
  );
}

export default Footer;
