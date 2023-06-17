import "./App.css";

function Volunteering() {

    return (
        <div className="Volunteering">
        <h1 id="projects">Volunteering</h1>
        <h2>AC Robotics and Game Development</h2>
        <div className="ProjectContainer">
          <div className="Project">
            <div>
              <h2>Director of Education - AC Robotics
              </h2>
              <p>
                At AC Robotics, I lead the entire educataion team for the non-profit organization of AC Robotics.
                We're an organization that has extended into all post secondary schools here in Calgary. I run all our teams in
                the name of First Robotics. As of last year, our first FTC reached the provincial championships, where we placed 
                top 20 in a team of 100 people.
                </p>
              <div className="ProjectTags">
                <div>Leadership</div>
                <div>Creativity</div>
                <div>Initiative</div>
                <div>Java</div>
              </div>
              <a class="ProjectLink" href="https://www.google.com">
                View Project
              </a>
            </div>
            <img src="https://via.placeholder.com/600" alt="Project 1" />
          </div>
          <div className="Project">
            <img src="https://img.itch.zone/aW1nLzEyNDI5ODQ5LnBuZw==/315x250%23c/im8f89.png" alt="Project 1" />
            <div>
              <h2>President - MRU GDDC</h2>
              <p>
               Buckey, The Bucket was a game I made with 3 other friends of mine for the Godot Wild Jam #53. This game used the themes of Rain and Shrines,
               while successfuly incoporating all the wild cards associated with the theme.
              </p>
              <div className="ProjectTags">
                <div>GDScript</div>
                <div>Aseprite</div>
                <div>Audacity</div>
              </div>
              <a class="ProjectLink" href="https://nashdashin.itch.io/buckythebucket">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Volunteering;