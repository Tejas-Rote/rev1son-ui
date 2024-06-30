import React from "react";
import styles from "./Accordion.module.css";
export interface AccordionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionHeader = ({ children, className }: AccordionHeaderProps) => {
  return (
    <div className={`${styles.accordionHeader} ${className}`}>{children}</div>
  );
};

export default AccordionHeader;
