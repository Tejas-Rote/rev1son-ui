// src/components/ExampleComponent.tsx
import React, { useState } from "react";
import TextInputLabel from "./TextInputLabel";
import TextInputField from "./TextInputField";
import TextInputHelperText from "./TextInputHelperText";
import TextInput from "./TextInput";

const TextInputExample: React.FC = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(e.target.value.length < 5);
  };

  return (
    <div>
      <TextInput>
        <TextInputLabel>Username</TextInputLabel>
        <TextInputField
          placeholder="Enter your username"
          value={value}
          onChange={handleChange}
          error={error}
        />
        <TextInputHelperText error={error}>
          {error
            ? "Username must be at least 5 characters long"
            : "Enter a unique username"}
        </TextInputHelperText>
      </TextInput>
    </div>
  );
};

export default TextInputExample;
