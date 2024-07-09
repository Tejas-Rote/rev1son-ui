import React from "react";
export interface StepProps {
  index?: number;
  className?: string;
  children: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
  nextStep?: () => void;
  prevStep?: () => void;
}

const Step: React.FC<StepProps> = ({
  children,
  className,
  isActive,
  isCompleted,
}) => {
  return (
    <div
      className={`w-full gap-4 ${isActive ? "flex items-center justify-center" : "hidden"} ${className ? className : ""}`}
    >
      <div
        className={`p-4 transition-all  ${isActive ? "bg-priamry shadow-initial hover:shadow-hover text-primary border border-primary rounded" : ""} ${isCompleted ? "bg-green-500" : ""} ${className ? className : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Step;
