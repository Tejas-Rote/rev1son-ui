import styles from "./Accordion.module.css";
export interface AccordionTitleProps {
  children: React.ReactNode;
  className?: string;
}
const AccordionTitle = ({ children, className }: AccordionTitleProps) => {
  return (
    <div className={`${styles.accordionTitle}  ${className}`}>{children}</div>
  );
};

export default AccordionTitle;
