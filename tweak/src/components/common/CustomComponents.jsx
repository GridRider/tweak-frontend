import React, { useState } from "react";
import ProgressButton from "./ProgressButton";
import FloatingLabelField from "./FloatingLabelField";
import FloatingLabelSelect from "./FloatingLabelSelect";
import CustomDatePicker from "./CustomDatePicker";
import LocationSelector from "./LocationSelector";
import CustomModal from "./CustomModal";

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

  //Custom Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleOkClick=()=>{alert("location accepted"); closeModal()}

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

<div>
      <h1>Custom Modal Demo</h1>
      <button onClick={openModal}>Open Modal</button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Custom Modal"
      >
        
        <p>This is a reusable modal component.</p>
        <button onClick={closeModal}>Close</button>
      </CustomModal>
    </div>

      <h2>Location selector</h2>
      <LocationSelector />

      
<div>
      <h1>Custom Modal with location Demo</h1>
      <button onClick={openModal}>Open Modal</button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Select your Location:"
      >
        <LocationSelector />
        <button onClick={handleOkClick}>OK</button>
      </CustomModal>
    </div>
    </div>

    


  );
}

export default CustomComponents;
