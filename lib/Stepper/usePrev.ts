import { useStepper } from "./StepperContext";

const usePrevious = () => {
  const { prevStep } = useStepper();
  return prevStep;
};

export default usePrevious;
