import React from "react";
import withAccordionState from "./withAccordionState";
import { AccordionHeaderProps } from "./AccordionHeader";

interface AccordionItemProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  isOpen,
  onToggle,
  className,
}) => {
  return (
    <div
      className={`${className ? className : ""} flex flex-col p-2 w-full   `}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionHeaderProps>(child)) {
          return React.cloneElement(child, { isOpen, onToggle });
        }
        return child;
      })}
    </div>
  );
};

export default withAccordionState(AccordionItem);
