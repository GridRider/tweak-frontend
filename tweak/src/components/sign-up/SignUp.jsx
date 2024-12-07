import React from 'react'
import { useState } from 'react';

function SignUp() {

  const [formData, setFormData] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };
  return (
    <div>
      <button>go back</button>
      <h1>Welcome to Tweak</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter here"
            required
          />
        </label>

        <button type="submit">Generate otp</button>

      </form>
    </div>
  )
}

export default SignUp
