import React from "react";
import styles from "./Accordian.module.css";

type AccordionIconProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionIcon = ({ children, className }: AccordionIconProps) => {
  return (
    <div className={`${styles.accordionIcon} ${className}`}>{children}</div>
  );
};

export default AccordionIcon;
