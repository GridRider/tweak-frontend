import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styles from "./SignUp.module.css";
import PhoneForm from './PhoneForm'; // Import the new PhoneForm component
import OTPInput from './otp/OTPInput';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [gotNumber, setGotNumber] = useState(false);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
  });
  

  const updateFormData = (data) => {
    setFormData(data);
  };

  const handleSubmitNum = () => {
    console.log('Form submitted:', formData);
    setGotNumber(true);
  };
  const handleSubmitOtp = () => {
    console.log("Entered OTP:",formData);
    navigate("/");

  };

  const handleOnBackClick=()=>{
    gotNumber&&setGotNumber(false) //only works when mobile no is submitted
  }

  return (<>
    
      <button onClick={handleOnBackClick} className='back-button'><FaChevronLeft /></button>
      <div className={styles['flexy-div']}>
      <h1 className={styles['welcome-txt']}>Welcome to Tweak</h1>
      {gotNumber ? (
        <p className={styles['desc-txt']}>
          Enter the OTP sent to <span className={styles['bold-text']}>{formData.phone}</span>.
        </p>
      ) : (
        <p className={styles['desc-txt']}>
           We will send you a One Time Password on this mobile number.
        </p>
      )}
      {gotNumber?<OTPInput formData={formData}
        updateFormData={updateFormData}
        onSubmit={handleSubmitOtp}/>
      :<PhoneForm
        formData={formData}
        updateFormData={updateFormData}
        onSubmit={handleSubmitNum}
      />}
    </div>
    </>
  );
}

export default SignUp;
