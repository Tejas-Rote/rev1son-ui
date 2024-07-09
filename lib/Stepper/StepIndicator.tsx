import React from "react";

interface Step {
  label: string;
  logo: React.ReactNode;
  className?: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
  className?: string;
  collapse?: boolean;
  orientation?: "horizontal" | "vertical";
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
  className,
  collapse = true,
  orientation = "horizontal",
}) => {
  return (
    <div
      className={`flex items-start w-full justify-center" ${className ? className : ""} ${orientation === "horizontal" ? "flex-row items-start justify-center" : "flex-col items-start justify-center h-full w-full"}  `}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex  relative z-20 ${orientation === "horizontal" ? "flex-row w-full items-center justify-center" : currentStep === index && currentStep !== steps.length - 1 ? "flex-col items-start justify-start h-1/3 " : "flex-col items-start justify-start h-1/6"}  `}
        >
          <div
            className={`flex   z-20   ${orientation === "horizontal" ? "flex-col items-center  " : "flex-row  items-center justify-start"}  `}
          >
            <div
              className={`flex items-center justify-center p-2 rounded-full flex-shrink-0  transition-all ${
                currentStep >= index
                  ? "text-highlight bg-secondary "
                  : "bg-gray-400 text-primary"
              }
${currentStep === index ? "w-12 h-12 text-xl" : `w-8 h-8 text-sm ${orientation === "horizontal" ? "my-2" : "ml-2"}`}`}
            >
              {step.logo}
            </div>
            <div
              className={`text-center text-sm flex items-center justify-center p-2 ${currentStep === index && "text-highlight"} `}
            >
              {step.label}
            </div>
          </div>
          <div
            className={`flex flex-grow  absolute z-0   ${orientation === "horizontal" ? "flex-row w-full" : currentStep === index ? "flex-col flex-grow h-full" : "flex-col flex-grow h-full"}   `}
            // style={{ left: "calc(50%)", top: "1.5rem" }}
            style={{
              // width:
              //   orientation === "horizontal"
              //     ? currentStep > index
              //       ? "100%"
              //       : "1rem"
              //     : undefined,
              // height:
              //   orientation === "vertical"
              //     ? currentStep === index
              //       ? "100%"
              //       : "3rem"
              //     : undefined,
              left: orientation === "horizontal" ? "calc(50%)" : "1.5rem",
              top: orientation === "horizontal" ? "1.5rem" : "1.5rem",
              // transform:
              //   orientation === "vertical" ? "translateX(-50%)" : undefined,
            }}
          >
            {index < steps.length - 1 && (
              <span
                className={` flex-grow ${orientation === "horizontal" ? "h-0.5" : "  w-0.5"} ${currentStep > index ? "bg-highlight" : "bg-gray-400"} transition-all `}
              ></span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
