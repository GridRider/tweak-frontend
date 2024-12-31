import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FloatingLabelField from "../common/FloatingLabelField"
import FloatingLabelSelect from "../common/FloatingLabelSelect";
import styles from "./CreateTweak.module.css"
import "../common/CustomDatePicker.css"
import CustomDatePicker from "../common/CustomDatePicker";
import { formatTime } from "../common/formatTime";
import LocationSelector from "../common/LocationSelector";
import CustomModal from "../common/CustomModal";
import { FaMapMarkerAlt } from "react-icons/fa";


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
    taskTime: null,
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

  const handleToggleWorkMode = () => {
    setFormData((prevState) => ({
      ...prevState,
      isRemote: !prevState.isRemote,
    }));
  };

  const handleToggleExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      experienceRequired: !prevState.experienceRequired,
    }));
  };

  const handleToggleVerified = () => {
    setFormData((prevState) => ({
      ...prevState,
      verifiedRequired: !prevState.verifiedRequired,
    }));
  };

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: checked,
  //   });
  // };

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

  //NEW


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  const options = [
    { value: '1', label: 'IT' },
    { value: '2', label: 'Design' },
    { value: '3', label: 'Marketing' }
  ]
  const options2 = [
    { value: '1', label: 'React' },
    { value: '2', label: 'CSS' },
    { value: '3', label: 'Java' }
  ]

  const options3 = [
    { value: '1', label: 'Per hour' },
    { value: '2', label: 'Per Unit' },
    { value: '3', label: 'Per Km' }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleOkClick=()=>{alert("location accepted"); closeModal()}






  return (
    <div style={{ margin: "0px auto", maxWidth: "600px", textAlign: "center" }}>
      <h2 className={styles["header"]}>Create Tweak</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
      >
        {/* Title */}
        <FloatingLabelField
          label="Title"
          name="taskTitle" // Unique name for this field
          value={formData.taskTitle}
          onChange={handleInputChange}
        />

        {/* Description */}
        <FloatingLabelField
          label="Description"
          name="taskDescription" // Unique name for this field
          value={formData.taskDescription}
          multiline={true}
          onChange={handleInputChange}
        />




        <div style={{ width: "80%" }}>

          <FloatingLabelSelect
            placeholder="Select a category"
            label="Category"
            options={options}
            value={formData.taskCategory}
            onChange={(selected) => setFormData({ ...formData, taskCategory: selected })}
          />
        </div>

        <div style={{ width: "80%" }}>

          <FloatingLabelSelect
            placeholder="Skills Required"
            label="Skills Required"
            options={options2}
            value={formData.skills}
            onChange={(selected) => setFormData({ ...formData, skills: selected })}
            isMulti={true}
          />
        </div>





        <div style={{ width: "80%" }}>

          <FloatingLabelSelect
            placeholder="Select a Pricing Type"
            label="Pricing Type"
            options={options3}
            value={formData.pricingType}
            onChange={(selected) => setFormData({ ...formData, pricingType: selected })}
          />
        </div>

        <FloatingLabelField
          label="Amount"
          type="number"
          name="amount" // Unique name for this field
          value={formData.amount}
          onChange={handleInputChange}
        />

        {/* Work Date and Time */}
        <div>
          <CustomDatePicker
            label="Task Date"
            value={formData.taskDate}
            onChange={(date) => setFormData({ ...formData, taskDate: date })}
            placeholder="Task Date" />

         
        </div>
        <div>

        <CustomDatePicker
            label="Start Time"
            value={formData.taskTime}
            onChange={(date) => setFormData({ ...formData, taskTime: date })}
            placeholder="Start Time"
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>

        {/* Closing Date */}

        <div>
          <CustomDatePicker
            label="Closing Date"
            value={formData.deadline}
            onChange={(date) => setFormData({ ...formData, deadline: date })}
            placeholder="Closing Date" />
        </div>
        

        <div className={styles["toggle-btns-container"]}>
          <div className={styles["each-btn-container"]}>
            <label className={styles["toggle-label"]}>
              Experience Required
            </label >
            <button
              type="button"
              onClick={handleToggleExperience}
              style={{
                marginTop: ".5rem",
                marginLeft: '.5rem',
                padding: "0.5rem 1rem",
                backgroundColor: formData.experienceRequired ? "green" : "yellow",
                color: formData.experienceRequired ? "white" : "black",
                border: "none",
                cursor: "pointer",
              }}
            >
              {formData.experienceRequired ? "YES" : "NO"}
            </button>

          </div>

          <div className={styles["each-btn-container"]}>
            <label className={styles["toggle-label"]}>
              Verification Required
            </label>
            <button
              type="button"
              onClick={handleToggleVerified}
              style={{
                marginTop: ".5rem",
                marginLeft: '.5rem',
                padding: "0.5rem 1rem",
                backgroundColor: formData.verifiedRequired ? "green" : "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {formData.verifiedRequired ? "YES" : "NO"}
            </button>

          </div>


          {/* Remote or Onsite Toggle */}
          <div className={styles["each-btn-container"]}>
            <label className={styles["toggle-label"]}>
              Work mode
            </label>
            <button
              type="button"
              onClick={handleToggleWorkMode}
              style={{
                marginTop: ".5rem",
                marginLeft: '.5rem',
                padding: "0.5rem 1rem",
                backgroundColor: formData.isRemote ? "#007bff" : "#28a745",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {formData.isRemote ? "Remote" : "Onsite"}
            </button>
          </div>

          

        </div>
        <div className={styles["location-container"]}>
        <label className={styles["toggle-label"]}>
              Add Location
            </label>
      <button className={styles["location-btn"]} type="button" onClick={openModal}><FaMapMarkerAlt/></button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Select your Location:"
      >
        <LocationSelector />
        <button onClick={handleOkClick}>OK</button>
      </CustomModal>
    </div>



        {/* Submit Button */}
        <button className="submit-btn boxy-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateTweak
