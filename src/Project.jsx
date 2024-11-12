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
                            className="tag-style"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={toggleLinks}
                className={`show-links-button ${showLinks ? "active" : ""}`}
            >
                {showLinks ? "Hide Links" : "Show Links"}
            </button>

            {showLinks && (
                <div className="links-section">
                    <a
                        className="link-style"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project Link
                    </a>
                    {otherLinks.map((otherLink, index) => (
                        <a
                            key={index}
                            className="link-style"
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
