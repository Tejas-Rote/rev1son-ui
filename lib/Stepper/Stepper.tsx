import React from "react";
import StepActions from "./StepActions";
import Step, { StepProps } from "./Step";
import StepIndicator, { StepIndicatorProps } from "./StepIndicator";

interface StepperProps {
  steps: number;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const generateArray = (n: number): number[] => {
  return Array.from({ length: n }, (_, index) => index + 1);
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  nextStep,
  prevStep,
  children,
  className,
  orientation = "horizontal",
}) => {
  const arrayOfSteps = generateArray(steps);

  const stepIndicators = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === StepIndicator,
  );

  const stepActions = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === StepActions,
  );

  const stepComponents = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Step,
  );

  return (
    <div
      className={`flex  ${orientation === "horizontal" ? "flex-col items-center justify-between w-full" : "flex-row w-full items-center justify-center h-full"} ${className ? className : ""} p-4 gap-4 `}
    >
      <div
        className={`flex flex-row justify-center p-2  ${orientation === "horizontal" ? "w-full items-center h-1/3" : "w-1/4 items-start h-full"}  `}
      >
        <div className="flex flex-row w-full h-full justify-center bg-red items-center ">
          {stepIndicators.map((child, index) =>
            React.isValidElement<StepIndicatorProps>(child)
              ? React.cloneElement(child, {
                  index: index,
                  currentStep: currentStep,
                  totalSteps: arrayOfSteps.length,
                  orientation: orientation,
                })
              : child,
          )}
        </div>
      </div>
      <div className={`flex flex-col w-full  `}>
        <div className="flex flex-col items-center justify-center w-full ">
          {stepComponents.map((child, index) =>
            React.isValidElement<StepProps>(child)
              ? React.cloneElement(child, {
                  isActive: index === currentStep,
                  isCompleted: index < currentStep,
                  nextStep,
                  prevStep,
                })
              : child,
          )}
        </div>
        <div className="flex justify-center w-full">{stepActions}</div>
      </div>
    </div>
  );
};

export default Stepper;
