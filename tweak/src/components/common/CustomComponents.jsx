import React, { useState } from "react";
import ProgressButton from "./ProgressButton";
import FloatingLabelField from "./FloatingLabelField";
import FloatingLabelSelect from "./FloatingLabelSelect";
import CustomDatePicker from "./CustomDatePicker";

function CustomComponents() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    taskDate: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Form Data: ", formData);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h1>This page contains the documentation of the custom components created.</h1>

      <h2>Custom Progress Button</h2>
      <ProgressButton onClick={() => console.log("API Call Triggered")}>
        Click Me
      </ProgressButton>

      <h2>Custom Floating Label Input</h2>
      <div style={{ padding: "20px" }}>
        <FloatingLabelField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <FloatingLabelField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <FloatingLabelField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Submit
        </button>
      </div>

      <h2>Floating Label Select</h2>
      <FloatingLabelSelect
        placeholder="hello"
        label="Choose an option"
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      />

      <h2>Custom Date Picker</h2>
      <CustomDatePicker
        label="Task Date"
        value={formData.taskDate}
        onChange={(date) => setFormData({ ...formData, taskDate: date })}
        placeholder="Select a work date"
      />
    </div>
  );
}

export default CustomComponents;
