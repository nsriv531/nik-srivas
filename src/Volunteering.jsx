import "./App.css";

function Volunteering() {

    return (

        <div className="Projects">
        <h1 id="projects">Volunteering</h1>
        <h2>AC Robotics and Game Development</h2>
        <div className="ProjectContainer">
          <div className="Project">
            <div>
              <h2>Director of Education - AC Robotics
              </h2>
              <p>
                "IT'S ROBOTICS, WE'RE ALL GAY HERE" - some kid named Gavin from Crescent
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
            <img src="https://via.placeholder.com/600" alt="Project 1" />
            <div>
              <h2>Dosage Calculator</h2>
              <p>
                This is a dosage Calculator that performs simple calculations for a dental practise in Northern Manitoba.
                This simple mobile app that I developed through android studio allows a user to input a patients weight,
                for which a calculation will appear showcasing the the dosages for tylenol and amoxicillan for that persons
                weight amount. Over 20 people use this app and it has been used to help thousands of patients in a clinical sense,
                providing fast and easy means of calculating medical dosages.
              </p>
              <div className="ProjectTags">
                <div>Java</div>
                <div>Android Studio</div>
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
                ROS along with advanced software engieering princples for movement and autonomous functionality. On this project,
                I learned a lot about ROS, along with Software Engineering princples.
              </p>
              <div className="ProjectTags">
                <div>ROS</div>
                <div>C#</div>
                <div>Engineering Principles</div>
              </div>
              <a class="ProjectLink" href="https://www.acrobotics.ca/project-xp1-canis">
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