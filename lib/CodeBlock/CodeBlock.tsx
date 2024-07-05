import React from "react";
import CodeBlockHeader from "./CodeBlockHeader";
import CodeBlockBody from "./CodeBlockBody";
import CodeBlockFooter from "./CodeBlockFooter";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showCopyButton?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  title,
  showCopyButton = true,
}) => {
  return (
    <div className="border rounded p-4 bg-gray-800 text-white">
      {title && <CodeBlockHeader title={title} language={language} />}
      <CodeBlockBody code={code} language={language} />
      {showCopyButton && <CodeBlockFooter code={code} />}
    </div>
  );
};

export default CodeBlock;
