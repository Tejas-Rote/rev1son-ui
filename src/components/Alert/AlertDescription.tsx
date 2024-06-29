import styles from "./Alert.module.css";

type AlertDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const AlertDescription = ({ children, className }: AlertDescriptionProps) => {
  return (
    <div className={`${styles.alertDescription}  ${className}`}>{children}</div>
  );
};

export default AlertDescription;
