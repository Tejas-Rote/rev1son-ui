import styles from "./Alert.module.css";
export interface AlertContentProps {
  children: React.ReactNode;
  className?: string;
}
const AlertContent = ({ children, className }: AlertContentProps) => {
  return (
    <div className={`${styles.alertContent}  ${className}`}>{children}</div>
  );
};

export default AlertContent;
