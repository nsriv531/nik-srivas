import React, { useState } from "react";
import "./App.css";

function Volunteering() {
    const [showLinks, setShowLinks] = useState({
        yellowJackets: false,
        mruGddc: false,
        camru: false,
    });

    const toggleLinks = (key) => {
        setShowLinks((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="bg-gradient-to-r from-lavender-pink to-light-cyan py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8" id="volunteering">
                Volunteering and Extracurricular Activities
            </h1>
            <div className="max-w-3xl mx-auto space-y-8">

                  {/* CAMRU Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('camru')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">President - CAMRU (April 2024 - May 2025)</h2>
                        <p className="text-gray-700 mb-4">
                            As President of CAMRU, I led my team in various events and intiatives, including technical workshops for students, and our Annual Networking Event with 200 attendees. This networking event featured companies like ATB, Arcurve, CNRL, and Keyera.
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
                        <img src="https://www.camru.ca/_next/static/media/logo.3ipxwtusz86wn.svg" alt="CAMRU" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>

                {/* YellowJackets Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('yellowJackets')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">Lead Mentor - FRC Team 9449 YellowJackets</h2>
                        <p className="text-gray-700 mb-4">
                            The YellowJackets are a Calgary community FIRST Robotics Competition team, formerly part of AC Robotics, where I served as Lead Mentor, and now run by the Alberta Robotics Association. At the 2026 Idaho Regional, the team won the FIRST Impact Award, the highest honour at a FIRST event, and reached the semifinals, qualifying for the FIRST Championship in Houston. It was only the second time an Alberta team has earned an award at this level, and the first time an Alberta team has won the Impact Award at an event outside of Canada.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Leadership", "Mentorship", "Teaching", "Teamwork", "Engineering", "Project Management", "Java"].map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => toggleLinks('yellowJackets')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {showLinks.yellowJackets ? "Hide Links" : "Show Links"}
                    </button>

                    {showLinks.yellowJackets && (
                        <div className="space-y-2 mt-4 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
                            <a
                                className="block text-blue-600 hover:text-blue-800 font-medium"
                                href="https://www.albertarobotics.com/post/9449-yellowjackets-robotics-team-wins-first-impact-award"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://static.wixstatic.com/media/b2865e_711ae358202b4203890362c0e1a90ae0~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/b2865e_711ae358202b4203890362c0e1a90ae0~mv2.jpg" alt="Team 9449 YellowJackets with the 2026 FIRST Impact Award at the Idaho Regional" className="w-full h-48 object-cover rounded-lg max-w-full" />
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

                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div onClick={() => toggleLinks('mruGddc')} className="cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2">Game Pop 2025</h2>
                        <p className="text-gray-700 mb-4">
                        The Alberta Wide Game Jam for Students! 14 teams particpated in this game jam across the GDDC Club @ MRU, GDC Club @ U of C, Games Den @ U of A (Edmonton), and the the Game Creator Space @ NAIT (Edmonton)
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
                                href="https://itch.io/jam/gamepop-2025"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}

                    <div className="image-container mt-4 flex justify-center">
                        <img src="https://img.itch.zone/aW1hZ2UyL2phbS80MDI3NTMvMTkzNTY0MDgucG5n/original/fgJuGW.png" alt="MRU GDDC" className="w-full h-48 object-cover rounded-lg max-w-full" />
                    </div>
                </div>

              
            </div>
        </div>
    );
}

export default Volunteering;
