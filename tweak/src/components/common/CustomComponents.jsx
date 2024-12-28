import React from 'react'
import ProgressButton from './ProgressButton';
import { useState } from 'react';
import FloatingLabelField from './FloatingLabelField';
import FloatingLabelSelect from './FloatingLabelSelect';

function CustomComponents() {
    //FOR PROGRESS BUTTON
    const fakeApiCall = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate API response
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
              resolve({ status: "success" });
            } else {
              resolve({ status: "failed" });
            }
          }, 2000);
        });
      };

      //FOR FLOATING LABEL
      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value, // Dynamically update the corresponding field
        }));
      };
    
      const handleSubmit = () => {
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        });
    
        // Log FormData contents for demonstration
        for (let [key, value] of data.entries()) {
          console.log(`${key}: ${value}`);
        }
    
        alert("Form submitted!");
      };

      //FOR FLOATING LABEL SELECT
      const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ];

      const [selectedOption, setSelectedOption] = useState(null);

      const customStyles = {
        
        placeholder: (base) => ({
          ...base,
          color: "black",      // Change text color
          textAlign: "center" // Center-align the text
        }),
      };
      

  return (
    <div>
        <h1>This page contains the doumentation of the custom components created.</h1>

        <h2>Custom progress button</h2>
        Demo:<ProgressButton onClick={fakeApiCall} >Hi</ProgressButton>

        <h2>Custom Floating label input</h2>
        Demo:
            <div style={{ padding: "20px" }}>
      <h2>Floating Label Form</h2>

      <FloatingLabelField
        label="First Name"
        name="firstName" // Unique name for this field
        value={formData.firstName}
        onChange={handleInputChange}
      />

      <FloatingLabelField
        label="Last Name"
        name="lastName" // Unique name for this field
        value={formData.lastName}
        onChange={handleInputChange}
      />

      <FloatingLabelField
        label="Email"
        name="email" // Unique name for this field
        value={formData.email}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit
      </button>
      <h2>Floating label select</h2>

      <FloatingLabelSelect
        placeholder="hello"
        label="Choose an option"
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        customStyles={customStyles}
      />
    </div>

      
    </div>
  )
}

export default CustomComponents
