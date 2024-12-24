import React from 'react'
import ProgressButton from './ProgressButton';

function CustomComponents() {
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

  return (
    <div>
        <h1>This page contains the doumentation of the custom components created.</h1>

        <h2>Custom progress button</h2>
        Demo:<ProgressButton onClick={fakeApiCall} >Hi</ProgressButton>
      
    </div>
  )
}

export default CustomComponents
