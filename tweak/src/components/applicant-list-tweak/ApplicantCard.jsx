import React from "react";
import styles from "./ApplicantCard.module.css";

const ApplicantCard = ({ name, profilePicture, experience, onAccept, onReject }) => {
  return (
    <div className={styles["applicant-card"]}>
      <div className={styles["flexy-div-1"]}>
      <img src={profilePicture} alt={name} className={styles["profile-picture"]} />
      <div className={styles["card-details"]}>
        <h3 className={styles["name"]}>{name}</h3>
        {experience&&
        <p className={styles["experience"]}>Experienced</p>
      }
      </div>
      <div className={styles["card-actions"]}>
        <button className={styles["accept-btn"]} onClick={onAccept}>
          Accept
        </button>
        <button className={styles["reject-btn"]} onClick={onReject}>
          Reject
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ApplicantCard;
