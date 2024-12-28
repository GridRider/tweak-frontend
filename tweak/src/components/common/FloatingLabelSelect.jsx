import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types"; // For type-checking props
import "./FloatingLabelSelect.css"; // Custom CSS

const FloatingLabelSelect = ({ label, options, onChange, value, placeholder,customStyles }) => {
  const [isFocused, setIsFocused] = useState(false);

   // Default styles for the select component
   const defaultStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? focusBorderColor : base.borderColor, // Focus border color
      boxShadow: state.isFocused ? `0 0 0 2px ${focusBorderColor}33` : base.boxShadow,
      "&:hover": {
        borderColor: focusBorderColor,
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#888", // Default placeholder color
    }),
  };

  const combinedStyles = (base, state) => ({
    ...defaultStyles[base]?.(base, state),
    ...(customStyles?.[base]?.(base, state) || {}),
  });

  return (
    <div
      className={`floating-label-container ${
        isFocused || value ? "focused" : ""
      }`}
    >
      <label className="floating-label">{label}</label>
      <Select
        placeholder={placeholder}
        options={options}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        classNamePrefix="floating-select"
        styles={customStyles}
      />
    </div>
  );
};

// PropTypes for better usability
FloatingLabelSelect.propTypes = {
  label: PropTypes.string.isRequired, // Label text
  options: PropTypes.array.isRequired, // Options for the Select
  onChange: PropTypes.func.isRequired, // onChange handler
  value: PropTypes.object, // Selected value
};

export default FloatingLabelSelect;
