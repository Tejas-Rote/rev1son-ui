import { useStepper } from "./StepperContext";

const useNext = () => {
  const { nextStep } = useStepper();
  return nextStep;
};

export default useNext;
