import "./App.css";
import { useState, useEffect } from "react";
import Project from "./Project";
import Blog from "./Blog";
import Certifications from "./Certifications";


const languageIcons = {
  py: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  cs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  rb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  default: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
};

function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [blogPosts, setBlogPosts] = useState([]);

 useEffect(() => {
  if (activeTab === "certifications") {
    // fetchCerts();
  } else if (activeTab === "blogs") {
    fetchBlogPosts();
  }
}, [activeTab]);
  const fetchBlogPosts = async () => {
  const repo = "nsriv531/LCJournal";
  const base = `https://api.github.com/repos/${repo}/contents`;


  try {
    const foldersRes = await fetch(base);
    const folders = await foldersRes.json();

    const posts = await Promise.all(
      folders.map(async (folder) => {
        if (folder.type !== "dir") return null;

        const folderPath = encodeURIComponent(folder.name);

        try {
          // ✅ Fetch README.md
          const readmeRes = await fetch(`${base}/${folderPath}/README.md`);
          const readmeData = await readmeRes.json();
          const readmeContent = atob(readmeData.content);
          const lines = readmeContent.split("\n").filter((l) => l.startsWith("#"));

          const title = lines[0]?.replace(/^#+/, "").trim() ?? folder.name;
          const description = lines[1]?.replace(/^#+/, "").trim() ?? "No description available.";
          const date = lines[2]?.replace(/^#+/, "").trim() ?? "No date available.";

          // ✅ Fetch all files in the folder (MUST encode folder name here too)
          const folderContentsRes = await fetch(`${base}/${folderPath}`);
          const folderContents = await folderContentsRes.json();

          const codeFile = folderContents.find((f) =>
            /\.(py|java|cpp|js|ts|cs|rb)$/.test(f.name)
          );
          if (!codeFile) return null;

          const codeRaw = await fetch(codeFile.download_url);
          const code = await codeRaw.text();

          return {
            title,
            description,
            date,
            tags: [codeFile.name.split(".").pop()],
            link: `https://github.com/${repo}/tree/main/${encodeURIComponent(folder.name)}`,
            codeSnippet: code,
          };
        } catch (err) {
          console.error(`Error loading post from ${folder.name}:`, err);
          return null;
        }
      })
    );

    setBlogPosts(posts.filter(Boolean));
  } catch (err) {
    console.error("Failed to load blog posts:", err);
  }
};

  const projectItems = (
    <>
      <Project 
        title="Promenade - Hack The Change 2024"
        description="This was a hackathon project I did with 4 others. Promenade is a real time App made for any mobile phone, with a React.js prototype as well as a Swift IOS Prototype. This app allows anyone to walk safely at night and connect them users based on a matching algorithm. This applications helps with safety as well as connecting like-minded individuals to promote peace and inclusion."
        tags={["React.js","Tailwind CSS", "Swift", "Vercel", "Google Firebase"]}
        link="https://devpost.com/software/promenade"
        projectimage="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/123/813/datas/medium.png"
      /> 

      {/* <Project 
        title="ARACHNID - Hack The 6ix 2025"
        description="The ultimate note-taking app! Utilizes OpenAI's GPT-4 to link and identify notes, as well as solutions to those notes. Built using Next.js, this stylisitcally delivers a smooth experience when brainstorming ideas in the form of ideas / problems you may have."
        tags={["Next.js","Tailwind CSS", "Solution Mapping", "OpenAI-GPT"]}
        link="https://devpost.com/software/arachnid?ref_content=user-portfolio&ref_feature=in_progress"
        projectimage="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/627/080/datas/medium.png"
      />  */}

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
        title = "Goliath"
        description = "A text-based game built in python, showcasing my skills in object-oriented programming and data structures. This game is a text-based RPG where you can fight monsters, level up, and collect items."
        tags={["Python", "Object-Oriented Programming", "Data Structures"]}
        link="https://github.com/nsriv531/Goliath"
        projectimage="https://raw.githubusercontent.com/nsriv531/Portfolio-Image-Hosting/refs/heads/main/goliath2.png"
      />

    </>
  );

    const certifications = [
    {
      title: "freeCodeCamp C# Certification",
      issuer: "freeCodeCamp",
      issueDate: "August 2025",
      credentialId: null,
      verificationUrl: "https://www.freecodecamp.org/<your-username>",
      skills: ["C#", ".NET", "OOP", "LINQ", "Collections", "File I/O", "Unit Testing"],
      summary:
        "Completed freeCodeCamp’s C# curriculum covering C# syntax, OOP design, LINQ, collections, file operations, and testing workflows in .NET.",
      badgeImage:
        "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
      otherLinks: [
        { label: "Curriculum", url: "https://www.freecodecamp.org/learn" },
        { label: "Practice Repo", url: "https://github.com/<you>/fcc-csharp-practice" },
      ],
    },
  ];

  const certificationItems = certifications.map((c, i) => (
    <Certifications key={i} {...c} />
  ));


const blogItems = blogPosts.map((post, i) => {
  const lang = post.tags[0]; // e.g. "py"
  const image = languageIcons[lang] || languageIcons.default;

  return (
   <Blog
  key={i}
  title={post.title}
  description={post.description}
  date={post.date}
  tags={post.tags}
  link={post.link}
  image={image}
  codeSnippet={post.codeSnippet} // ✅ Pass the code
/>
  );
});

 return (
    <div className="bg-gradient-to-r from-lavender-pink to-light-cyan min-h-screen py-10">
      <h1 id="projects" className="text-4xl font-bold text-center text-gray-800 mb-4">
        Project Highlights and Certifications
      </h1>
      <h2 className="text-lg text-center text-gray-600 mb-8">
        Showcasing hackathon projects, personal projects, leetcode solutions, and certifcations.
      </h2>

      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            activeTab === "projects"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500 text-blue-500"
          }`}
        >
          Projects
        </button>

       
        <button
          onClick={() => setActiveTab("blogs")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            activeTab === "blogs"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500 text-blue-500"
          }`}
        >
          Coding Blog
        </button>


         <button
          onClick={() => setActiveTab("certifications")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            activeTab === "certifications"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500 text-blue-500"
          }`}
        >
          Certifications
        </button>
      
      </div>

      <div className="ProjectContainer max-w-6xl mx-auto space-y-8 px-4">
  {activeTab === "projects"
    ? projectItems
    : activeTab === "certifications"
    ? certificationItems
    : blogItems}
</div>
    </div>
  );
}

export default Projects;
