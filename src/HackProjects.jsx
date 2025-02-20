import { useState } from "react";
import "./App.css";
import Project from "./Project";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function HackProjects() {
  const projects = [
    {
      title: "DentrisDMS - Inventory Management System",
      description:
        "DentrisDMS is an Inventory Management System I built using the CodeIgnitor framework in PHP. This website helps this dental clinic manage their inventory for a catalogue of over 100 items. With some basic Javascript and simple styling with CSS, I was able to build this system. To inspect this application, login with Username: subadmin@admin.com, Password: 123456.",
      tags: ["HTML", "CodeIgnitor PHP Framework", "MySQL"],
      link: "http://dentrisdms.com/",
      projectimage: "https://i.ibb.co/M6CRSy9/dentris-square-ver2.png",
    },
    {
      title: "test 1",
      description:
        "Test project 1 description with relevant details.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      projectimage: "https://via.placeholder.com/150",
    },
    {
      title: "test 2",
      description:
        "Test project 2 description with relevant details.",
      tags: ["Vue.js", "Firebase", "Express"],
      link: "#",
      projectimage: "https://via.placeholder.com/150",
    },
    {
      title: "test 3",
      description:
        "Test project 3 description with relevant details.",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "#",
      projectimage: "https://via.placeholder.com/150",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-gradient-to-r from-lavender-pink to-light-cyan min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Hackathon Projects</h1>
      <h2 className="text-lg text-center text-gray-600 mb-8">
        Featuring projects I made for CalgaryHacks, HackTheChange, and nwHacks.
      </h2>
      <div className="relative max-w-6xl mx-auto px-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <div className="flex space-x-4 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${startIndex * 100}%)` }}>
            {visibleProjects.map((project, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                <Project {...project} />
              </div>
            ))}
          </div>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HackProjects;
