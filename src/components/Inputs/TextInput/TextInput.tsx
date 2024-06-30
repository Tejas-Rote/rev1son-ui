import styles from "./TextInput.module.css";

interface TextInputProps {
  children: React.ReactNode;
}

const TextInput = ({ children }: TextInputProps) => {
  return <div className={styles.textInputContainer}>{children}</div>;
};

export default TextInput;
