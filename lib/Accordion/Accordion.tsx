import React, { ReactNode } from "react";
export interface AccordionProps {
  children: ReactNode;
  className: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div
      className={` ${className ? className : ""} flex flex-col w-full p-4 bg-primary `}
    >
      <div>{children}</div>
    </div>
  );
};

export default Accordion;
