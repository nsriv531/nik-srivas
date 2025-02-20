import "./App.css";
import Project from "./Project";
import ProjectLeft from "./ProjectLeft";

function Projects() {
  return (
    <div className="bg-gradient-to-r from-lavender-pink to-light-cyan min-h-screen py-10">
      <h1 id="projects" className="text-4xl font-bold text-center text-gray-800 mb-4">
        Project Highlights
      </h1>
      <h2 className="text-lg text-center text-gray-600 mb-8">
        Web Development, Game Development, Data Projects, and Software Engineering.
      </h2>
      
      {/* ProjectContainer with Tailwind classes */}
      <div className="ProjectContainer max-w-6xl mx-auto space-y-8 px-4">
        
      <Project 
        title = "Promenade - Hack The Change 2024"
        description = "This was a hackathon project I did with 4 others. Promenade is a real time App made for any mobile phone, with a React.js prototype as well as a Swift IOS Prototype. This app allows anyone to walk safely at night and connect them users based on a matching algorithm. This applications helps with safety as well as connecting like-minded individuals to promote peace and inclusion."
        tags={["React.js","Tailwind CSS", "Swift", "Vercel", "Google Firebase"]}
        link="https://devpost.com/software/promenade"
        projectimage="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/123/813/datas/medium.png"
      /> 
      
      <Project 
        title = "shelf'd - nwHacks 2025"
        description = "Shelf'd is a gamified way of logging your entire book catalouge. This was my submission for nwHacks 2025. I worked on a team of four for this project, and learned how to use Next.js along with supabase in a team setting."
        tags={["Next.js", "Node.js", "Supabase", "Docker", "Nix", "OpenLibraryAPI", "Aseprite"]}
        link="https://devpost.com/software/shelf-d"
        projectimage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/225/719/datas/gallery.jpg"
      />

      <Project 
        title = "DentrisDMS -  Inventory Management System"
        description = "DentrisDMS is an Inventory Management System I built using the CodeIgnitor framework in PHP. This website helps this dental clinic manage their inventory for a catalogue of over 100 items. With some basic Javascript and simple styling with CSS, I was able to build this system. To inspect this application, login with Username: subadmin@admin.com, Password: 123456."
        tags={["HTML","CodeIgnitor PHP Framework", "MySQL"]}
        link="http://dentrisdms.com/"
        projectimage="https://i.ibb.co/M6CRSy9/dentris-square-ver2.png"
      />
  
      <Project 
        title = "Handle - Workshop Studios"
        description = "Handle is a website I worked on primarily on the back-end. This website is responsible for organizing and managing user's art studios around ceramics and other crafts. Through this software, a user admin can manage their kilns, user experience, members, and other aspects of their business. I worked on this project collaboratively with another programmer, and used technologies like Git for collaborative programming."
        tags={["Django","JavaScript", "React"]}
        link="https://github.com/nsriv531/Handle-Public-Repository"
        projectimage="https://workshopstudios.ca/wp-content/uploads/2020/03/workshop-studios-logo.png"
      /> 

      <Project 
        title = "ConQuest"
        description = "A gamified way of completing tasks, built with a React.js front end and a Postgres back end. Art done all with Aseprite."
        tags={["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"]}
        link="https://conquest-nine.vercel.app/"
        projectimage="https://conquest-nine.vercel.app/static/media/conQuest_logo_with_banner.7cb99635796f1614479a.png"
      />
    
      <Project 
       title = "Ahinke's Kitchen"
        description = "Ahinkes' Kitchen is a local business that runs in the Forest Lawn area of Calgary. During the period of September 2023 and December 2023, I was hired as a IT Developer intern with the task of maintaining Ahinke's site through the POS system Square and WordPress. This got me very familiar with Sqaure as a tool while, allowing me to learn how to work in a dynamic team environment with chefs and graphic designers. Through this process I also learned various plugins that are used in a business setting for websites, such as google plugins and others."  
        tags={["HTML", "Square", "Clover", "Google Plugins", "React.js"]}
        link="https://www.ahinkeskitchen.com/"
        projectimage="https://media.swipepages.com/2021/6/ahinkes_logo2-3xhr-1-750.png"
      />

      <Project 
        title = "Health Tech Challenge 2024 - Team Mobility"
        description = "With a team of three others, we participated in the Health Tech Challenge offered by the Institute of Innovation and Entrepreneurship. For this challenge we developed a mobile knee brace that would gather data that health professionals could use for assestments and injuries related to the knee. On my team I was responsible for developing the web companion app."        
        tags={["React.js","Tailwind CSS", "Supabase", "SQLite", "PowerBI", "Tableau"]}
        link="https://htc-2024-team-mobility.vercel.app/"
        projectimage="https://raw.githubusercontent.com/nsriv531/image_hosting/refs/heads/main/kneeflex.png?token=GHSAT0AAAAAACZR67HZJWE7TODYDWTRBXMIZZTVIVA"
      />

    <Project 
        title = "CalgaryHacks 2023 - Jurrasic Park"
        description = "For the CalgaryHacks Hackathon for 2023, I worked with three others to develop a mobile app that would find available parking spots in the vicinity of Mount Royal University. This app in concept can also work for the University of Calgary for it's parking lot, and we pitched a successful app that advanced us in the rankings."        
        tags={["Java", "Android Studio"]}
        link="https://devpost.com/software/jurassic-park"
        projectimage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/393/187/datas/gallery.jpg"
      />
      
      <Project
        title = "COMP 3512 - Assignment 2 - F1 Dashboard"
        description = "My second assignment for COMP3512, built purely on JS and HTML to access the F1 Dashboard API's. "
        tags={["JavaScript", "HTML"]}
        link="https://github.com/nsriv531/COMP3512-Assignment_2"
        projectimage="https://images.stockcake.com/public/4/3/8/43851159-a381-428e-a3b6-1a3caf7ed642_large/speeding-race-car-stockcake.jpg"
      />

      <Project
        title = "TensorFlow Project"
        description = "This is a personal project of mine where I got familar with the TensorFlow ML Framework."
        tags={["Python", "TensorFlow"]}
        link="https://github.com/nsriv531/TensorFlow-Personal-Project"
        projectimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsqbuvRgmIsxTT1R_bCdv8txFKkw2ylx5Lg&s"
      />

      <Project
        title = "PyTorch Project"
        description = "This is a personal project of mine where I got familar with the PyTorch ML Framework."
        tags={["Python", "PyTorch"]}
        link="https://github.com/nsriv531/PyTorch-Personal-Project"
        projectimage="https://miro.medium.com/v2/resize:fit:512/1*IMGOKBIN8qkOBt5CH55NSw.png"
      />

    <Project 
        title = "Ruby Fundamentals - Book Management System"
        description = "This is a simple project I put together to practise and harness my skills in Ruby. This is a simple book management system that uses advanced data structures written in the Ruby stack."        
        tags={["Ruby"]}
        link="https://github.com/nsriv531/Ruby-Fundamentals"
        projectimage="https://sumatosoft.com/wp-content/uploads/2023/03/ruby-lang-ar21.png"
      />

    <Project 
        title = "Assignment 2 - COMP 4513 (Web III)"
        description = "This assignment uses a custom API built in Node.js to make various cells of data appear in a basic website built in React. I made this in collaboration with a partner where I helped create the API's, as well as implemeting TailWind CSS into the project itself."        
        tags={["React.js", "Node.js", "Tailwind CSS"]}
        link="https://comp-4513-assignment-2-7vu1.vercel.app/"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
      />
  
    <Project
        title = "Assignment 1 - COMP 4513 (Web III)"
        description = "For my advanced web class, I created an API using Node.js. The associated tables were in the form of CSV Files, that were then uploaded and maintained through Supabase."
        tags={["Node.js", "Glitch", "Supabase"]}
        link="https://github.com/nsriv531/COMP4513-Assignment-1"
        projectimage="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"
      />
  
      <Project
        title = "Assignment 3 - COMP 4522 (Databases II)"
        description = "This assignment involved cleansing data that were given in the form of CSV files, while also finding certain calculations by using the proper libaries."        
        tags={["Python", "Pandas", "Linear Regression"]}
        link="https://github.com/nsriv531/COMP-4522-Assignment3"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png"
      />
      
      <Project
        title = " Assignment 2 - COMP 4522 (Databases II)"
        description = "Additionally for my advanced data base class, I worked in Pandas and Prolog to analyze their effectiveness with query construction. This assignment gave me a deeper understanding how to use Pandas, and gave me context through my understanding in prolog. I also did this assignment in a team of two which helped foster my skills in teamwork and collaboration."        
        tags={["Python", "Pandas", "SQLite"]}
        link="https://github.com/nsriv531/COMP4522-Assignment2_Jupyter"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png"
      />
      
      <Project
        title = "Assignment 1 - COMP 4522 (Databases II)"
        description = "For my advanced database class, I implemented a Roll-Back system using Python. This assignment simulates a roll-back system with the use of a CSV file upon execution of the script. I did this assignment in a team of two which helped foster my skills in teamwork and collaboration."
        tags={["Python"]}
        link="https://github.com/nsriv531/COMP4522-Assignment1"
        projectimage="https://www.svgrepo.com/show/376344/python.svg"
      />

    <Project 
        title = "The Project - COMP 3512 (Web II)"
        description = "The Project was a term-long project that I made over the course of my Winter 2023 Semester for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP, with a user facing side and an admin side. This site I was using complex queries in SQL to get an assortment of images with various filters."        
        tags={["JavaScipt","PHP", "CSS", "MySQL"]}
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
      />
      
    <Project 
        title = "CANIS"
        description = "CANIS is an open source project that I worked on at AC Robotics. CANIS is a work in-progress robot dog that is using inverse kinematics and was modeled after the boston-dynamics dog project. This project uses ROS commands along with advanced software engineering principles for movement and autonomous functionality."
        tags={["C++", "ROS", "Software Engineering"]}
        link="https://github.com/AC-Robotics-uofc/canis_mini_firmware"
        projectimage="https://hips.hearstapps.com/hmg-prod/images/boston-dynamics-spot-1581450774.jpg"
      />
    
    <Project 
        title = "Hashmap Assignment - COMP 2503 (Advanced Data Structures)"
        description = "This assignment is from my advanced data structures class, where we were instructed to implement hash maps. This assignment involves finding an appropriate key for a word puzzle. It was a very complex assignment which I received an A on and required a deep understanding of hash map implementation using Java. I worked on this with another partner of mine where we collaboratively programmed using git."
        tags={["Java", "Git", "Teamwork"]}
        link="https://github.com/nsriv531/2503Assignment5"
        projectimage="https://logowik.com/content/uploads/images/java1655.logowik.com.webp"
      />
  
    <Project
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
    <Project 
        title = "RoboChaos"
        description = "This is a game I made in Godot 4.0 with three friends of mine. This was for the Summer Slow Game Jam 2024 - Portland USA."
        tags={["Godot", "Aseprite", "GDScript"]}
        link="https://nashdashin.itch.io/robochaos"
        projectimage="https://img.itch.zone/aW1nLzE3MDM3NTA0LnBuZw==/315x250%23c/ZBsbBE.png"
      />

      </div>
    </div>
  );
}

export default Projects;
