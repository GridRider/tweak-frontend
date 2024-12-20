import React from "react";
import "./ApplicantCard.css";

const ApplicantCard = ({ name, profilePicture, experience, onAccept, onReject }) => {
  return (
    <div className="applicant-card">
      <img src={profilePicture} alt={name} className="profile-picture" />
      <div className="card-details">
        <h3 className="name">{name}</h3>
        <p className="experience">Experience: {experience}</p>
      </div>
      <div className="card-actions">
        <button className="accept-btn" onClick={onAccept}>
          Accept
        </button>
        <button className="reject-btn" onClick={onReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;
