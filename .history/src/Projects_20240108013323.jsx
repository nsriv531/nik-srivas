import "./App.css";
import Project from "./Project";
import ProjectLeft from "./ProjectLeft";


function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Project Highlights</h1>
      <h2>Web Development, Game Development, Software Engineering, and Project Management.</h2>
      <div className="ProjectContainer">
      <Project 
        title = "DentrisDMS -  Inventory Management System"
        description = "DentrisDMS is an Inventory Management System I built using the CodeIgnitor framework in PHP. This website helps this dental clinic manage their inventory for a catalogue of over 100 items. With some basic Javascript and simple styling with CSS, I was able to build this system. To inspect this application, login with Username: subadmin@admin.com, Password: 123456."
        tags={["HTML","CodeIgnitor PHP Framework", "MySQL"]}
        link="http://dentrisdms.com/"
        projectimage="https://i.ibb.co/M6CRSy9/dentris-square-ver2.png"
      />
       <ProjectLeft 
        title = "Propel Alberta Game Jam"
        description = "This was a game jam I organized for students across Alberta. With both the GDDC from Mount Royal University and the Game Design Club at the University of Calgary, I managed a team of executives. where we worked and made a a successful event for aspiring game developers. Through this event, my team and I were able to secure multiple sponsors that accumulated to a prize pool of over $2000. These sponsors were from the video game industry, and beyond."
        tags={["Project Management", "Marketing", "Communication"]}
        link="https://www.propelalberta.ca/streams/food-fight"
        projectimage="https://cdn.discordapp.com/attachments/1076739832568627342/1177829494007021630/PropelAlberta_Colours1.png?ex=6573ee32&is=65617932&hm=65ced315969b2443f574e7c6adef4af0657e536bf853053c02cda27d31aad8e4&"
      />
      <Project 
        title = "AC Robotics Website"
        description = "During our revamp into a non-for-profit student run organization, the web team and I decided to make a website from scratch representing AC Robotics. This website is built using Next.js, a React Framework with it's own back-end component, as well as Tailwind CSS for styling and design. This site was very important as it allows many members to  gain information about our projects, as well as potential FIRST Robotics Recruits on our FIRST Robotics teams that I help run in the name of The Hive."
        tags={["Next.js","React.js", "Tailwind CSS", "HTML"]}
        link="https://www.acrobotics.ca/"
        projectimage="https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/Institutes/InstituteInnovationEntrepreneurship/_images/ac_robotics_logo.png"
      />
      <ProjectLeft 
       title = "Ahinke's Kitchen"
        description = "Ahinkes' Kitchen is a local business that runs in the Forest Lawn area of Calgary. During the period of September 2023 and December 2023, I was hired as a web developer intern with the task of maintaining Ahinke's site through Square and WordPress. This got me very familiar with Sqaure as a tool while, allowing me to learn how to work in a dynamic team environment with chefs and graphic designers. Through this process I also learned various plugins that are used in a business setting for websites, such as google plugins and others."  
        tags={["HTML", "Square", "Clover", "Google Plugins", "React.js"]}
        link="https://www.ahinkeskitchen.com/"
        projectimage="https://media.swipepages.com/2021/6/ahinkes_logo2-3xhr-1-750.png"
      />    
        <Project 
        title = "The Project - COMP 3512"
        description = "The Project was a term-long project that I made over the course of my Winter 2023 Semester for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP, with a user facing side and an admin side. This site I was using complex queries in SQL to get an assortment of images with various filters."        
        tags={["Javascipt","PHP", "CSS", "MySQL"]}
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
      />
        <ProjectLeft 
        title = "CANIS"
        description = "CANIS is an open source project that I worked on at AC Robotics. CANIS is a work in-progress robot dog that is using inverse kinematics and was modeled after the boston-dynamics dog project. This project uses ROS commands along with advanced software engineering principles for movement and autonomous functionality."
        tags={["C++", "ROS", "Software Engineering"]}
        link="https://github.com/AC-Robotics-uofc/canis_mini_firmware"
        projectimage="https://hips.hearstapps.com/hmg-prod/images/boston-dynamics-spot-1581450774.jpg"
      />
        <Project 
        title = "Hashmap Assignment - COMP 2503"
        description = "This assignment is from my advanced data structures class, where we were instructed to implement hash maps. This assignment involves finding an appropriate key for a word puzzle. It was a very complex assignment which I received an A on and required a deep understanding of hash map implementation using Java. I worked on this with another partner of mine where we collaboratively programmed using git."
        tags={["Java", "Git", "Teamwork"]}
        link="https://github.com/nsriv531/2503Assignment5"
        projectimage="https://logowik.com/content/uploads/images/java1655.logowik.com.webp"
      />
      <ProjectLeft 
        title = "Buckey The Bucket"
        description = "Buckey, The Bucket was a game I made with 3 other friends of mine for the Godot Wild Jam #53. This game used the themes of Rain and Shrines, while successfully incorporating all the wild cards associated with the theme."
        tags={["GDScript", "Aseprite", "Audacity"]}
        link="https://nashdashin.itch.io/buckythebucket"
        projectimage="https://img.itch.zone/aW1nLzEyNDI5ODQ5LnBuZw==/315x250%23c/im8f89.png"
      />
      <Project 
        title = "Freddy's Escape"
        description = "This game I made in unity with two friends of mine. This was an after project after the GMTK game jam."
        tags={["Unity", "Aseprite", "C#"]}
        link="https://nashdashin.itch.io/freddys-escape"
        projectimage="https://i.etsystatic.com/37643300/r/il/15430a/4842016610/il_794xN.4842016610_fefb.jpg"
      />
      </div>
    </div>
  );
}

export default Projects;
