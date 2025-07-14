import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Or another theme like vs, vsDark, etc.

export default function Blog({ title, description, date, tags, link, image, codeSnippet }) {
  const [showCode, setShowCode] = useState(false);
  const language = tags[0]; // Assuming this is like "cpp", "js", etc.

  return (
    <div className="rounded-lg bg-white shadow-md p-6 hover:shadow-lg transition">
      <img src={image} alt={`${language} logo`} className="h-12 w-12 mb-4" />

      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm italic text-gray-500">{date}</span>
      </div>

      <p className="text-gray-700 mb-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="text-blue-500 hover:underline mb-3"
      >
        {showCode ? "Hide Code" : "Read more"}
      </button>

      {showCode && (
        <SyntaxHighlighter language={language} style={oneDark} customStyle={{ borderRadius: "8px", padding: "1rem" }}>
          {codeSnippet}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
