import React from "react";
import styles from "./TextInput.module.css";

export interface TextInputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const TextInputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error = false,
}: TextInputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.textFieldInputField} ${error ? styles.error : ""}`}
    />
  );
};

export default TextInputField;
