import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("// Write your code here");
  
  const runCode = async () => {
    const response = await fetch("http://localhost:5000/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const result = await response.json();
    alert(result.output);
  };

  return (
    <div>
      <h1>MiniCode IDE</h1>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode}>Run</button>
    </div>
  );
}

export default App;