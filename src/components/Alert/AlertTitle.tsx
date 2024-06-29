import styles from "./Alert.module.css";
type AlertTitleProps = {
  children: React.ReactNode;
  className?: string;
};
const AlertTitle = ({ children, className }: AlertTitleProps) => {
  return <div className={`${styles.alertTitle}  ${className}`}>{children}</div>;
};

export default AlertTitle;
