import React from "react";
import styles from "./Accordion.module.css";
type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={`${styles.accordion}   ${className}`}>{children}</div>;
};

export default Accordion;
