import styles from "./Alert.module.css";

export interface AlertProps {
  children: React.ReactNode;
  type?: "success" | "error" | "info" | "warning";
  className?: string;
}

const Alert = ({ children, type = "info", className }: AlertProps) => {
  return (
    <div className={`${styles.alert} ${styles[type]}  ${className}`}>
      {children}
    </div>
  );
};

export default Alert;
