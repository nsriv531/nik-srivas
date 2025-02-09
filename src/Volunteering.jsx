import React, { useState } from "react";
import "./App.css";

function Volunteering() {
    const [showLinks, setShowLinks] = useState({
        acRobotics: false,
        mruGddc: false,
        camru: false,
    });

    const toggleLinks = (key) => {
        setShowLinks((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="bg-gradient-to-r from-lavender-pink to-light-cyan">
            <h1 className="text-3xl font-bold text-center mb-8" id="volunteering">
                Volunteering and Extracurricular Activities
            </h1>
            <div className="max-w-3xl mx-auto space-y-8">

                {/* AC Robotics Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('acRobotics')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">Director of Education for AC Robotics</h2>
                        <p className="text-gray-700 mb-4">
                            I'm a board member at AC Robotics, a non-profit organization focused on teaching youth and post-secondary students about robotics. I lead the education team, consisting of students, overseeing three FIRST Robotics teams under the 'The Hive' branch. Our team, Neo Robotics, reached the provincial championships in Red Deer in 2023, placing 20th out of 50 teams. I also help organize STEM challenges and competitions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Leadership", "Creativity", "Teaching", "Teamwork", "Engineering", "Project Management", "Java", "C++"].map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => toggleLinks('acRobotics')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {showLinks.acRobotics ? "Hide Links" : "Show Links"}
                    </button>

                    {showLinks.acRobotics && (
                        <div className="space-y-2 mt-4 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
                            <a
                                className="block text-blue-600 hover:text-blue-800 font-medium"
                                href="https://www.acrobotics.ca"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://pbs.twimg.com/media/FmdDVAmaUAAtwjH.jpg" alt="AC Robotics" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>

                {/* MRU GDDC Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('mruGddc')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">President - MRU GDDC (May 2023 - April 2024)</h2>
                        <p className="text-gray-700 mb-4">
                            At Mount Royal University, I founded the first Game Design and Development club. Through this club, I facilitated an environment for students interested in game development, hosting events, game jams, social meet-ups, and collaborating with other organizations in Calgary.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Leadership", "Game Development", "Project Management", "Teamwork", "C#", "Godot"].map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => toggleLinks('mruGddc')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {showLinks.mruGddc ? "Hide Links" : "Show Links"}
                    </button>

                    {showLinks.mruGddc && (
                        <div className="space-y-2 mt-4 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
                            <a
                                className="block text-blue-600 hover:text-blue-800 font-medium"
                                href="https://mru-gddc.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://mru-gddc.vercel.app/assets/gdd-blue-banner-c53c6a24.png" alt="MRU GDDC" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>


                {/* Propel Game Jam Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('mruGddc')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">Propel Alberta Game Jam</h2>
                        <p className="text-gray-700 mb-4">
                        The Propel Alberta Game Jam was a game jam that took place in November 2023. This is a game jam I organized for Alberta students, where we had 13 teams compete from different universities across Alberta. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Leadership", "Game Development", "Project Management", "Teamwork"].map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => toggleLinks('mruGddc')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {showLinks.mruGddc ? "Hide Links" : "Show Links"}
                    </button>

                    {showLinks.mruGddc && (
                        <div className="space-y-2 mt-4 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
                            <a
                                className="block text-blue-600 hover:text-blue-800 font-medium"
                                href="https://itch.io/jam/propel-game-jam"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://img.itch.zone/aW1hZ2UyL2phbS8zODMxNjYvMTM2MjczMTYucG5n/original/YI8GIL.png" alt="MRU GDDC" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>


                {/* CAMRU Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('camru')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">President - CAMRU</h2>
                        <p className="text-gray-700 mb-4">
                            As President of CAMRU, I led my team in various projects, including technical workshops for students and our Annual Networking Event with companies like ATB, Lockheed Martin, CNRL, and Keyera.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Leadership", "Project Management", "Teamwork"].map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => toggleLinks('camru')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {showLinks.camru ? "Hide Links" : "Show Links"}
                    </button>

                    {showLinks.camru && (
                        <div className="space-y-2 mt-4 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
                            <a
                                className="block text-blue-600 hover:text-blue-800 font-medium"
                                href="https://www.camru.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://www.camru.ca/_next/static/media/logo-01.4de46dc6.svg" alt="CAMRU" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Volunteering;
