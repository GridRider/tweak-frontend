import React, { useState } from "react";
import "./FloatingLabelField.css";

const FloatingLabelField = ({ label, type = "text", value, onChange,name,multiline = false,
  rows = 3, }) => {
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
      {multiline ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className="floating-input"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className="floating-input"
        />
      )}
    </div>
  );
};

export default FloatingLabelField;
