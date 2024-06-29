import { useState, ComponentType } from "react";

type WithAccordionStateProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const withAccordionState = <P extends object>(
  Component: ComponentType<P & WithAccordionStateProps>
) => {
  return (props: P) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      //   console.log("Accordion toggled"); // Add console log to verify
      setIsOpen(!isOpen);
    };

    return <Component isOpen={isOpen} toggleOpen={toggleOpen} {...props} />;
  };
};

export default withAccordionState;
