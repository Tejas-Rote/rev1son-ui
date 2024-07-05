import React, { useState } from "react";

interface CodeBlockFooterProps {
  code: string;
}

const CodeBlockFooter: React.FC<CodeBlockFooterProps> = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy!"));
  };

  return (
    <div className="mt-2 flex justify-end items-center">
      {copySuccess && (
        <span className="text-sm text-gray-400 mr-2">{copySuccess}</span>
      )}
      <button
        onClick={handleCopy}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeBlockFooter;
