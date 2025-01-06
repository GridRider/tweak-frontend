import React from "react";
import ApplicantCard from "./ApplicantCard";
import styles from "./ApplicantCard.module.css"

const ApplicantList = () => {
  const applicants = [
    {
      id: 1,
      name: "Alice Johnson",
      profilePicture: "https://via.placeholder.com/50",
      experience: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      profilePicture: "https://via.placeholder.com/50",
      experience: false
    },
    {
      id: 3,
      name: "Carol Davis",
      profilePicture: "https://via.placeholder.com/50",
      experience: true,
    },
  ];

  const handleAccept = (name) => {
    alert(`${name} accepted!`);
  };

  const handleReject = (name) => {
    alert(`${name} rejected!`);
  };

  return (<>
        <h2 className={styles["header"]}>Create Tweak</h2>
    <div className={styles["main-container"]}>
            
      
      {applicants.map((applicant) => (
        <ApplicantCard
          key={applicant.id}
          name={applicant.name}
          profilePicture={applicant.profilePicture}
          experience={applicant.experience}
          onAccept={() => handleAccept(applicant.name)}
          onReject={() => handleReject(applicant.name)}
        />
      ))}
    </div>
    </>
  );
};

export default ApplicantList;
