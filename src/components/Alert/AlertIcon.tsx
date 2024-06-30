import styles from "./Alert.module.css";

export interface AlertIconProps {
  children: React.ReactNode;
  className?: string;
}
const AlertIcon = ({ children, className }: AlertIconProps) => {
  return <div className={`${styles.alertIcon}  ${className}`}>{children}</div>;
};

export default AlertIcon;
