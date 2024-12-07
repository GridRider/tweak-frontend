import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTweak() {
    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: "",
        isRemote: false, // Default to remote
        taskCategory: "",
        pricingType: "",
        currency: "INR", // Default currency
        amount: "",
        duration: "",
        taskDate: null,
        location: "",
        lister: 1, // Dummy lister ID
        deadline: null,
        status: "active", // Default status
        experienceRequired: false,
        verifiedRequired: false,
        skills: [], // List of selected skill IDs
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleToggle = () => {
        setFormData((prevState) => ({
          ...prevState,
          isRemote: !prevState.isRemote,
        }));
      };
    
      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
          ...formData,
          [name]: checked,
        });
      };
    
      const handleSkillsChange = (e) => {
        const { options } = e.target;
        const selectedSkills = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => parseInt(option.value, 10));
        setFormData({
          ...formData,
          skills: selectedSkills,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data to send to API:", formData);
        alert("Form submitted successfully!");
      };
    
      return (
        <div style={{ margin: "50px auto", maxWidth: "600px", textAlign: "center" }}>
          <h2>Job Form</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Title */}
            <label>
              Title:
              <input
                type="text"
                name="taskTitle"
                value={formData.taskTitle}
                onChange={handleChange}
                required
              />
            </label>
    
            {/* Description */}
            <label>
              Description:
              <textarea
                name="taskDescription"
                value={formData.taskDescription}
                onChange={handleChange}
                required
              />
            </label>
    
            {/* Remote or Onsite Toggle */}
            <label>
              Remote or Onsite:
              <button
                type="button"
                onClick={handleToggle}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: formData.isRemote ? "#007bff" : "#28a745",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {formData.isRemote ? "Remote" : "Onsite"}
              </button>
            </label>
    
            {/* Category */}
            <label>
              Category:
              <select
                name="taskCategory"
                value={formData.taskCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="1">IT</option>
                <option value="2">Design</option>
                <option value="3">Marketing</option>
              </select>
            </label>
    
            {/* Pricing Type */}
            <label>
              Pricing Type:
              <select
                name="pricingType"
                value={formData.pricingType}
                onChange={handleChange}
                required
              >
                <option value="">Select pricing type</option>
                <option value="Hourly">Hourly</option>
                <option value="Fixed">Fixed</option>
              </select>
            </label>
    
            {/* Amount */}
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                required
              />
            </label>
    
            {/* Work Date and Time */}
            <label>
              Work Date and Time:
              <DatePicker
                selected={formData.taskDate}
                onChange={(date) => setFormData({ ...formData, taskDate: date })}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select work date and time"
                required
              />
            </label>
    
            {/* Closing Date */}
            <label>
              Closing Date:
              <DatePicker
                selected={formData.deadline}
                onChange={(date) => setFormData({ ...formData, deadline: date })}
                placeholderText="Select closing date"
                required
              />
            </label>
    
            {/* Skills Required */}
            <label>
              Skills Required:
              <select
                name="skills"
                multiple
                value={formData.skills}
                onChange={handleSkillsChange}
              >
                <option value="1">React</option>
                <option value="2">JavaScript</option>
                <option value="3">CSS</option>
              </select>
            </label>
    
            {/* Experience Required */}
            <label>
              Experience Required:
              <input
                type="checkbox"
                name="experienceRequired"
                checked={formData.experienceRequired}
                onChange={handleCheckboxChange}
              />
            </label>
    
            {/* Verification Required */}
            <label>
              Verification Required:
              <input
                type="checkbox"
                name="verifiedRequired"
                checked={formData.verifiedRequired}
                onChange={handleCheckboxChange}
              />
            </label>
    
            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default CreateTweak
