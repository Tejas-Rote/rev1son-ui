import React from "react";
import { Button } from "rev1son-ui";

export interface StepActionsProps {
  className?: string;
  currentStep: number;
  steps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const StepActions: React.FC<StepActionsProps> = ({
  className,
  currentStep,
  steps,
  onPrevStep,
  onNextStep,
}) => {
  return (
    <div
      className={`flex flex-row w-3/4 justify-between items-center gap-4 p-4 ${className ? className : ""}`}
    >
      <Button
        variant="outlined"
        onClick={onPrevStep}
        className={`${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Previous
      </Button>
      <Button variant="primary-highlight" onClick={onNextStep}>
        {currentStep === steps - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

export default StepActions;
