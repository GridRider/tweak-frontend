import React from 'react';
import styles from "./SignUp.module.css";

function PhoneForm({ formData, updateFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['flexy-div']}>
        <label htmlFor="phone" className={styles['no-txt']}>
          Enter mobile no *
        </label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles["no-field"]}
        />
        <button className={`${styles['otp-btn']} boxy-btn`} type="submit">
          Generate otp
        </button>
      </div>
    </form>
  );
}

export default PhoneForm;
