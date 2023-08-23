import "./App.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Project Highlights</h1>
      <h2>Web Design, Software Engineering, and Game Development.</h2>
      <div className="ProjectContainer">
      <Project 
        title = "Tasks DentrisDMS"
        description = "Tasks.dentrisDMS is a task system built using the CodeIgnitor framework in PHP. With some basic Javascript and simple styling with CSS was I able to build a simple to-do-list feature allowing users who work for The Pas Dental Clinic to make task assigning easy and practical for business use. This website helps 30 active employees manage their tasks for this dental clinic, making their work extremly efficent."
        tags={["HTML","CodeIgnitor PHP Framework", "MySQL"]}
        link="http://tasks.dentrisdms.com/"
        projectimage="https://i.ibb.co/cQrJkSg/dentris-square.png"
      />
         <div className="Project">
          <img src="https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/Institutes/InstituteInnovationEntrepreneurship/_images/ac_robotics_logo.png" alt="Project 1" />
          <div>
            <h2>AC Robotics Website</h2>
            <p>
              Durign our revamp to a non-for-profit student run organization, the web team and I decided to make a website from scratch representing AC Robotics.
              This website is built using NextJS, a rapid React Framework, as well as Tailwind CSS for styling and design. This site was very important as it allows many members to 
              gain information about our projects, as well as potential First Recruits on our FIRST Robotics teams that I help run with The Hive. 
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
      <Project 
       title = "Ahinke's Kitchen"
        description = "Ahinkes' Kitchen is a local business that runs in the Forest Lawn area of Calgary. During the period of September 2023 and December 2023, I was hired as a web developer intern with the task of maintaing Ahinke's site through SquareSpace. Thisgot me very familar with SqaureSpace as a tool while, allowing me to learn how to work in a dynamic team environment. Through this process I also learned various plugins that are used in a business setting for websites, such as google plugins and others."  
        tags={["HTML", "SquareSpace", "Clover", "Google Plugins"]}
        link="https://www.ahinkeskitchen.com/"
        projectimage="https://media.swipepages.com/2021/6/ahinkes_logo2-3xhr-1-750.png"
      />
     
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
              <div>MySQL</div>
            </div>
            <a class="ProjectLink" href="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531">
              View Project
            </a>
          </div>
          <img src="data:image/png;base64,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" alt="Project 1" />
        </div>
        
        <div className="Project">
          <img src="data:image/jpeg;base64,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" alt="Project 1" />
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
          <div>
            <h2>HashMap Assignment - COMP 2503</h2>
            <p>
              This assignment for my advanced data structures class was an assignment made with the goal of implementing hashmaps. This 
              assignment involves finding an appropiate key for a word puzzle. It was a very complex assignment which I recieved an A on, and 
              required a deep understanding of advanced data structures using Java.
            </p>
            <div className="ProjectTags">
              <div>Java</div>
            </div>
            <a class="ProjectLink" href="https://github.com/nsriv531/2503Assignment5">
              View Project
            </a>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1E_XhjLy_qAB7UK9SjP6ZQkABYxZT_3bj5t9CNVo&s" />
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
