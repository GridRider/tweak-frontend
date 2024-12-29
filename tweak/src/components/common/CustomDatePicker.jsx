import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";

const CustomDatePicker = ({
    label = "Select Date/Time",
    value,
    onChange,
    placeholder = "Select a date or time",
    required = false,
    customClassName = "",
    showTimeSelect = false,
    showTimeSelectOnly = false,
    timeIntervals = 15,
    timeCaption = "Time",
    dateFormat = "dd/MM/yyyy",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className={`floating-label-date-field ${customClassName}`}>
      <label
        className={`floating-label ${isFocused || value ? "active" : ""}`}
      >
        {label}
      </label>
      <DatePicker
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        required={required}
        wrapperClassName="custom-datepicker"
        withPortal
        onFocus={handleFocus}
        onBlur={handleBlur}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        timeIntervals={timeIntervals}
        timeCaption={timeCaption}
        dateFormat={dateFormat}
      />
    </div>
  );
};

export default CustomDatePicker;
