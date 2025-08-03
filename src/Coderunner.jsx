// src/components/CodeRunner.jsx
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeRunner({ code = "", language = "js" }) {
  const template = language === "js" ? "vanilla" : "react";

  const files =
    template === "vanilla"
      ? {
          "/index.js": {
            code,
            active: true,
          },
        }
      : {
          "/App.js": {
            code,
            active: true,
          },
          "/index.js": {
            code: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));`,
          },
          "/index.html": {
            code: "<div id='root'></div>",
          },
        };

  return (
    <div className="my-4 border rounded-md overflow-hidden shadow">
      <Sandpack
        template={template}
        files={files}
        options={{
          showTabs: true,
          showConsole: true,
          wrapContent: true,
          editorHeight: 300,
        }}
      />
    </div>
  );
}
