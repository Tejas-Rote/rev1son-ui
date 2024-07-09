import React, { useState } from "react";

const withAccordionState = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return <Component {...props} isOpen={isOpen} onToggle={toggle} />;
  };
};

export default withAccordionState;
