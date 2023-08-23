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
          <img src="data:image/png;base64,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" alt="Project 1" />
        </div>
        <div className="Project">
          <img src="https://inventurescanada.com/wp-content/uploads/2023/03/ac_robotics_logo.png" alt="Project 1" />
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
            <a class="ProjectLink" href="https://www.acrobotics.ca/">
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
