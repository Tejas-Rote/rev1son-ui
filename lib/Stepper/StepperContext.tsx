import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface StepperContextType {
  currentStep: number;
  steps: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const StepperContext = createContext<StepperContextType | undefined>(
  undefined,
);

export const StepperProvider: React.FC<{
  steps: number;
  children: ReactNode;
}> = ({ steps, children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log("next");
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps - 1));
  };

  const prevStep = () => {
    console.log("prev");
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  useEffect(() => {
    console.log(currentStep);
  }, [currentStep]);
  return (
    <StepperContext.Provider value={{ currentStep, steps, nextStep, prevStep }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
