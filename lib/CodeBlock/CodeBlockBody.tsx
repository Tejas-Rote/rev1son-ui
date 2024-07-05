import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";

interface CodeBlockBodyProps {
  code: string;
  language: string;
}

const CodeBlockBody: React.FC<CodeBlockBodyProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlockBody;
