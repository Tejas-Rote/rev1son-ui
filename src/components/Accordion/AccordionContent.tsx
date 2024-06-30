import React from "react";
import styles from "./Accordion.module.css";
export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const AccordionContent = ({
  children,
  className,
  isOpen,
}: AccordionContentProps) => {
  return (
    <div
      className={`${styles.accordionContent} ${className || ""} ${
        isOpen ? styles.open : styles.closed
      }  `}
    >
      {children}
    </div>
  );
};

export default AccordionContent;
