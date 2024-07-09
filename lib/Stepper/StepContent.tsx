import React from "react";

interface StepContentProps {
  className?: string;
  children: React.ReactNode;
}

const StepContent: React.FC<StepContentProps> = ({ children, className }) => {
  return (
    <div
      className={`flex w-full p-2 text-justify ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default StepContent;
