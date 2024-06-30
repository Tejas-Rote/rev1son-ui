import styles from "./Accordion.module.css";

export interface AccordionIconProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionIcon = ({ children, className }: AccordionIconProps) => {
  return (
    <div className={`${styles.accordionIcon} ${className}`}>{children}</div>
  );
};

export default AccordionIcon;
