import React, { useState } from "react";
import { FaTerminal, FaCodeBranch, FaDocker, FaAws } from "react-icons/fa";
import {
  Step,
  StepActions,
  StepIndicator,
  StepContent,
  Stepper,
  StepLabel,
} from "rev1son-ui";

const stepsData = [
  {
    icon: <FaTerminal />,
    label: "Computer Terminal",
    content:
      "A computer terminal is an electronic or electromechanical hardware device that can be used for entering data into, and transcribing data from, a computer or a computing system.",
  },
  {
    icon: <FaCodeBranch />,
    label: "Code Branch",
    content:
      "Branching, in version control and software configuration management, is the duplication of an object under version control. Each object can thereafter be modified separately and in parallel so that the objects become different.",
  },
  {
    icon: <FaDocker />,
    label: "Docker",
    content:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. ",
  },
  {
    icon: <FaAws />,
    label: "Amazon Web Services",
    content:
      "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
  },
];

const StepperExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, stepsData.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex w-1/2 min-h-screen items-center justify-center ">
      <Stepper
        className="font-mono "
        steps={stepsData.length}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        orientation="vertical"
      >
        <StepIndicator
          currentStep={currentStep}
          steps={stepsData.map((step) => ({
            label: step.label,
            logo: step.icon,
          }))}
          // className="w-1/2 "
        />
        {stepsData.map((step, index) => (
          <Step
            key={index}
            index={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
            // className="w-1/2"
          >
            <StepLabel>{step.label}</StepLabel>
            <StepContent>{step.content}</StepContent>
          </Step>
        ))}
        <StepActions
          currentStep={currentStep}
          steps={stepsData.length}
          onPrevStep={prevStep}
          onNextStep={nextStep}
          // className="w-1/2 "
        />
      </Stepper>
    </div>
  );
};

export default StepperExample;
