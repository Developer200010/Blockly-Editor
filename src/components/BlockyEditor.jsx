import React, { useEffect, useRef, useState } from "react";
import * as Blockly from "blockly/core";
import "blockly/blocks";
import { javascriptGenerator } from "blockly/javascript";
import "../../src/globals.css";
import toolbox from "./Blockly-Blocks";
const BlockyEditor = () => {
  const blocklyDiv = useRef(null);
  const workSpace = useRef(null);
  const [codeGenerator, setCodeGenerator] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!workSpace.current) {
      workSpace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        trashcan: true,
      });

      // Ensure Blockly resizes properly
      window.addEventListener("resize", () => {
        Blockly.svgResize(workSpace.current);
      });
    }
  }, []);

  const runCode = () => {
    try {
      const code = javascriptGenerator.workspaceToCode(workSpace.current);
      setCodeGenerator(code);
      console.clear();
      eval(code);
    } catch (e) {
      console.error("Execution Error:", e);
    }
  };

   const resetWorkspace = () => {
    if (workSpace.current) {
      workSpace.current.clear(); // ✅ Clears all blocks
      setCodeGenerator(""); // ✅ Clears generated code
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="w-full max-w-6xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center">Blockly Editor</h2>
        <div className="flex">
        <button
          onClick={runCode}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition mx-auto"
        >
          Run Code
        </button>
        <button
          onClick={resetWorkspace}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition mx-auto"
        >
          Reset
        </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div
            className="relative border-2 border-gray-300 rounded-lg bg-gray-50"
            style={{ height: "500px" }}
          >
            <div
              ref={blocklyDiv}
              className="absolute inset-0 w-full h-full overflow-hidden" // Prevents extra scrolling
            ></div>
          </div>

          {/* Code Output */}
          <div
            className={`p-4 rounded-lg shadow-md overflow-auto ${
              darkMode
                ? "bg-gray-700 text-green-300"
                : "bg-gray-900 text-green-400"
            }`}
            style={{ minHeight: "150px" }}
          >
            <pre className="whitespace-pre-wrap break-words text-xs sm:text-sm">
              {codeGenerator || "// Generated code will appear here..."}
            </pre>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default BlockyEditor;
