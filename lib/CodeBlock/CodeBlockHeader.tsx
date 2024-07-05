import React from "react";
export interface CodeBlockHeaderProps {
  title: string;
  language: string;
}
const CodeBlockHeader: React.FC<CodeBlockHeaderProps> = ({
  title,
  language,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold">{title}</div>
      <div className="text-sm">{language}</div>
    </div>
  );
};

export default CodeBlockHeader;
