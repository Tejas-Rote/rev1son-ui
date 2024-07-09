import React, { ReactNode } from "react";

interface StepLabelProps {
  className?: string;
  children: ReactNode;
}

const StepLabel: React.FC<StepLabelProps> = ({ className, children }) => {
  return (
    <div
      className={`text-xl flex flex-row w-full p-2 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default StepLabel;
