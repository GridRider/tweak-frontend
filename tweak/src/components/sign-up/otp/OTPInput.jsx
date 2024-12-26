import React, { useState, useRef } from "react";
import "./OTPInput.css";
import styles from "../SignUp.module.css";

const OTPInput = ({ formData, updateFormData, onSubmit }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    updateFormData({
      ...formData,
      otp: newOtp.join(""),
    });

    // Move focus to the next field
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);
    inputRefs.current[pasteData.length - 1]?.focus();
  };

  

  const isOtpComplete = otp.every((digit) => digit);

  const handleSubmit=()=>{
    onSubmit();
  }

  return (
    <div className="otp-container">
      <div className="otp-input-container" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="number"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            className={`otp-input ${digit ? "filled" : ""}`}
          />
        ))}
      </div>
      <button
        className={`${styles['otp-btn']} boxy-btn ${isOtpComplete ? "active" : ""}`}
        onClick={handleSubmit}
        disabled={!isOtpComplete}
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInput;
