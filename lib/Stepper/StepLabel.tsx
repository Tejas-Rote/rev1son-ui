import React, { ReactNode } from "react";

interface StepLabelProps {
  label: string;
  className?: string;
  children?: ReactNode;
}

const StepLabel: React.FC<StepLabelProps> = ({
  label,
  className,
  children,
}) => {
  return (
    <div
      className={`text-xl flex flex-row w-full p-2 ${className ? className : ""}`}
    >
      {label}
      {children}
    </div>
  );
};

export default StepLabel;
