import React, { useState } from "react";


import "./App.css";

function Project({ title, description, tags, link, projectimage, otherLinks = [] }) {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => setShowLinks(!showLinks);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 max-w-3xl mx-auto">
            <div onClick={toggleLinks} className="cursor-pointer">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={toggleLinks}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                {showLinks ? "Hide Links" : "Show Links"}
            </button>

            {showLinks && (
    <div
    className={`space-y-2 mt-4 transition-all duration-500 ease-in-out transform ${
        showLinks ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
    } origin-top`}
>
    <a
        className="block text-blue-600 hover:text-blue-800 font-medium"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        Project Link
    </a>
    {otherLinks.map((otherLink, index) => (
        <a
            key={index}
            className="block text-blue-600 hover:text-blue-800 font-medium"
            href={otherLink.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {otherLink.label}
        </a>
    ))}
</div>
)}

            <div className="image-container mt-4 flex justify-center">
                <img
                    src={projectimage}
                    alt={`${title} preview`}
                    className="w-full h-48 object-cover rounded-lg max-w-full"
                />
            </div>
        </div>
    );
}

export default Project;
