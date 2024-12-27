import React, { useState } from "react";
import "./FloatingLabelField.css";

const FloatingLabelField = ({ label, type = "text", value, onChange,name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="floating-label-field">
      <label
        className={`floating-label ${isFocused || value ? "active" : ""}`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onFocus={handleFocus}
        name={name}
        onBlur={handleBlur}
        onChange={onChange}
        className="floating-input"
      />
    </div>
  );
};

export default FloatingLabelField;
