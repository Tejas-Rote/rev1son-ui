import styles from "./TextInput.module.css";

interface TextInputHelperTextProps {
  children: React.ReactNode;
  error?: boolean;
}

const TextInputHelperText: React.FC<TextInputHelperTextProps> = ({
  children,
  error = false,
}) => {
  return (
    <div
      className={`${styles.textFieldInputHelperText} ${
        error ? styles.error : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TextInputHelperText;
