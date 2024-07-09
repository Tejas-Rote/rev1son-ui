import React, { useState } from "react";

const withStepperState = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, props.steps - 1));
    };

    const prevStep = () => {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    return (
      <Component
        {...props}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    );
  };
};

export default withStepperState;
