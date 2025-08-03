import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeRunner from "./Coderunner"; // Make sure this exists and is correctly imported

export default function Blog({
  title,
  description,
  date,
  tags,
  link,
  image,
  codeSnippet
}) {
  const [showCode, setShowCode] = useState(false);
  const [showRunner, setShowRunner] = useState(false);

  const language = tags[0]?.toLowerCase() || "js";
  const isRunnable = ["js", "jsx", "react"].includes(language);

  return (
    <div className="rounded-lg bg-white shadow-md p-6 hover:shadow-lg transition">
      {/* Language logo */}
      <img
        src={image}
        alt={`${language} logo`}
        className="h-12 w-12 mb-4"
      />

      {/* Title and date */}
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm italic text-gray-500">{date}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-3">{description}</p>

      {/* Tags */}
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

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-blue-500 hover:underline"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>

        {isRunnable && (
          <button
            onClick={() => setShowRunner(!showRunner)}
            className="text-green-500 hover:underline"
          >
            {showRunner ? "Hide Runner" : "Run Code"}
          </button>
        )}
      </div>

      {/* Code block */}
      {showCode && (
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            borderRadius: "8px",
            padding: "1rem",
            background: "#282c34",
            color: "#f8f8f2"
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      )}

      {/* Sandpack runner */}
      {isRunnable && showRunner && (
        <CodeRunner code={codeSnippet} language={language} />
      )}
    </div>
  );
}
