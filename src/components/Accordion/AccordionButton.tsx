import React from "react";
import styles from "./Accordion.module.css";
interface AccordionButtonProps {
  children: React.ReactNode;
  className?: string;
  //   onClick: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AccordionButton = ({
  children,
  className,
  onClick,
}: AccordionButtonProps) => {
  return (
    <button
      className={`${styles.accordionButton} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AccordionButton;
