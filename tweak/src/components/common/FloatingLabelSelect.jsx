import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types"; // For type-checking props
import "./FloatingLabelSelect.css"; // Custom CSS

const FloatingLabelSelect = ({ label, options, onChange, value, placeholder,customStyles,isMulti=false }) => {
  const [isFocused, setIsFocused] = useState(false);

   // Default styles for the select component
   const defaultStyles = {
    control: (base, state) => ({
      ...base,
        borderRadius:"10px",
        
    }),
    placeholder: (base) => ({
      ...base,
      textAlign: "center"     // Change text color
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999, // z-index for dropdown when not portaled
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999, // z-index for portaled dropdown
    }),
    
    
  };

  const combinedStyles = {
    control: (base, state) => ({
      ...(defaultStyles?.control ? defaultStyles.control(base, state) : base), // Safely apply default styles
      ...(customStyles?.control ? customStyles.control(base, state) : {}), // Safely apply custom styles
    }),
    placeholder: (base) => ({
      ...(defaultStyles?.placeholder ? defaultStyles.placeholder(base) : base), // Safely apply default styles
      ...(customStyles?.placeholder ? customStyles.placeholder(base) : {}), // Safely apply custom styles
      color: customStyles?.placeholder?.color || defaultStyles?.placeholder?.color || base.color, // Explicit color override
    }),
  };
  

  return (
    <div
      className={`floating-label-container ${
        (isFocused || value) && value.length!=0? "focused" : ""
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
        isMulti={isMulti}
        classNamePrefix="floating-select"
        styles={combinedStyles}
        menuPortalTarget={document.body}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: 'var(--color1)',
            neutral50:"var(--text1)",
            neutral30:"var(--color1)",
            neutral40:"var(--color1)"
            
          },
        })}
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
