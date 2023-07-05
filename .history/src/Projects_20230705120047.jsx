import "./App.css";

function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Project Highlights</h1>
      <h2>Web Design, Software Engineering, and Game Development.</h2>
      <div className="ProjectContainer">
        <div className="Project">
          <div>
            <h2>Web II - The Project</h2>
            <p>
              The Project was a term-long project that I made over the course of my Winter 2023 Semester 
              for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP,
              with a user facing side and an admin side. This site I was using complex queries in SQL to get
              an assortment of images with various filters.
            </p>
            <div className="ProjectTags">
              <div>CSS</div>
              <div>JavaScript</div>
              <div>PHP</div>
              <div>SQL</div>
            </div>
            <a class="ProjectLink" href="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531">
              View Project
            </a>
          </div>
          <img src="https://via.placeholder.com/600" alt="Project 1" />
        </div>
        <div className="Project">
          <img src="https://via.placeholder.com/600" alt="Project 1" />
          <div>
            <h2>AC Robotics Website</h2>
            <p>
              Durign our revamp into a corporation as we have been rapidly expanding, the web team and I decided to make a website from scratch representing AC Robotics.
              This website is built using NextJS, a rapid React Framework.
            </p>
            <div className="ProjectTags">
              <div>React</div>
              <div>Next.js</div>
              <div>Tailwind CSS</div>
              <div>HTML</div>
            </div>
            <a class="ProjectLink" href="https://www.google.com">
              View Project
            </a>
          </div>
        </div>
        <div className="Project">
          <img src="https://via.placeholder.com/600" alt="Project 1" />
          <div>
            <h2>CANIS</h2>
            <p>
              CANIS is an open source project that I worked on at AC Robotics. CANIS is a fully functional robot dog
              that is using inverse kinematics and was modeled after the boston-dynamics dog project. CANIS uses complex
              ROS along with advanced software engineering principles for movement and autonomous functionality. On this project,
              I learned a lot about ROS, along with Software Engineering principles.
            </p>
            <div className="ProjectTags">
              <div>ROS</div>
              <div>C#</div>
              <div>Engineering Principles</div>
            </div>
            <a class="ProjectLink" href="https://www.acrobotics.ca/collegiate/canis">
              View Project
            </a>
          </div>
        </div>
        <div className="Project">
          <img src="https://img.itch.zone/aW1nLzEyNDI5ODQ5LnBuZw==/315x250%23c/im8f89.png" alt="Project 1" />
          <div>
            <h2>Buckey the Bucket</h2>
            <p>
             Buckey, The Bucket was a game I made with 3 other friends of mine for the Godot Wild Jam #53. This game used the themes of Rain and Shrines,
             while successfully incorporating all the wild cards associated with the theme.
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

export default Projects;
