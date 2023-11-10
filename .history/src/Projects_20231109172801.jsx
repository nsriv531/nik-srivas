import "./App.css";
import Project from "./Project";
import ProjectLeft from "./ProjectLeft";


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
        <ProjectLeft 
        title = "AC Robotics Website"
        description = " Durign our revamp to a non-for-profit student run organization, the web team and I decided to make a website from scratch representing AC Robotics. This website is built using NextJS, a rapid React Framework, as well as Tailwind CSS for styling and design. This site was very important as it allows many members to  gain information about our projects, as well as potential First Recruits on our FIRST Robotics teams that I help run with The Hive. "
        tags={["Next.js","React", "Tailwind CSS", "HTML"]}
        link="https://www.acrobotics.ca/"
        projectimage="https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/Institutes/InstituteInnovationEntrepreneurship/_images/ac_robotics_logo.png"
      />
      <Project 
       title = "Ahinke's Kitchen"
        description = "Ahinkes' Kitchen is a local business that runs in the Forest Lawn area of Calgary. During the period of September 2023 and December 2023, I was hired as a web developer intern with the task of maintaing Ahinke's site through SquareSpace. Thisgot me very familar with SqaureSpace as a tool while, allowing me to learn how to work in a dynamic team environment. Through this process I also learned various plugins that are used in a business setting for websites, such as google plugins and others."  
        tags={["HTML", "SquareSpace", "Clover", "Google Plugins"]}
        link="https://www.ahinkeskitchen.com/"
        projectimage="https://media.swipepages.com/2021/6/ahinkes_logo2-3xhr-1-750.png"
      />    
        <ProjectLeft 
        title = "The Project - COMP 3512"
        description = "The Project was a term-long project that I made over the course of my Winter 2023 Semester for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP, with a user facing side and an admin side. This site I was using complex queries in SQL to get an assortment of images with various filters."        
        tags={["Javascipt","PHP", "CSS", "MySQL"]}
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
      />
        <Project 
        title = "CANIS"
        description = "CANIS is an open source project that I worked on at AC Robotics. CANIS is a fully functional robot dogthat is using inverse kinematics and was modeled after the boston-dynamics dog project. CANIS uses complex ROS along with advanced software engineering principles for movement and autonomous functionality. On this project, I learned a lot about ROS, along with Software Engineering principles."
        tags={["C++", "ROS", "Software Engineering"]}
        link="https://github.com/AC-Robotics-uofc/canis_mini_firmware"
        projectimage="https://hips.hearstapps.com/hmg-prod/images/boston-dynamics-spot-1581450774.jpg"
      />
        <ProjectLeft 
        title = "Hashmap Assignment - COMP 2503"
        description = "This assignment for my advanced data structures class was an assignment made with the goal of implementing hashmaps. This assignment involves finding an appropiate key for a word puzzle. It was a very complex assignment which I recieved an A on, and required a deep understanding of advanced data structures using Java."
        tags={["Java"]}
        link="https://github.com/nsriv531/2503Assignment5"
        projectimage="https://logowik.com/content/uploads/images/java1655.logowik.com.webp"
      />
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
