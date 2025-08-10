// Certification.jsx
import React, { useState } from "react";
import "./App.css";

function Certification({
  title,
  issuer,
  issueDate,
  expiryDate = null,
  credentialId = null,
  verificationUrl = "#",
  skills = [],
  summary = "",
  badgeImage = "",
  otherLinks = [], // [{ label: "Syllabus", url: "..." }]
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((s) => !s);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 max-w-3xl mx-auto">
      <div onClick={toggle} className="cursor-pointer" aria-expanded={open}>
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">{issuer}</span>
          {issueDate ? ` • Issued ${issueDate}` : ""}
          {expiryDate ? ` • Expires ${expiryDate}` : ""}
        </p>

        {summary && <p className="text-gray-700 mb-4">{summary}</p>}

        {!!skills.length && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((tag, i) => (
              <span key={i} className="tag-style">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={toggle}
        className={`show-links-button ${open ? "active" : ""}`}
        aria-expanded={open}
      >
        {open ? "Hide Details" : "Show Details"}
      </button>

      {open && (
        <div className="links-section">
          <a
            className="link-style"
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify Credential
          </a>

          {credentialId && (
            <span className="inline-block text-sm text-gray-600 px-3 py-2">
              Credential ID: <span className="font-mono">{credentialId}</span>
            </span>
          )}

          {otherLinks.map((ol, i) => (
            <a
              key={i}
              className="link-style"
              href={ol.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ol.label}
            </a>
          ))}
        </div>
      )}

      {badgeImage && (
        <div className="image-container mt-4 flex justify-center">
          <img
            src={badgeImage}
            alt={`${title} badge`}
            className="w-full h-48 object-contain rounded-lg max-w-full"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

export default Certification;
