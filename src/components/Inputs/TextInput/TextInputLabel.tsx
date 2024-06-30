import styles from "./TextInput.module.css";

interface TextInputLabelProps {
  children: React.ReactNode;
}

const TextInputLabel = ({ children }: TextInputLabelProps) => {
  return <label className={styles.textInputLabel}>{children}</label>;
};

export default TextInputLabel;
