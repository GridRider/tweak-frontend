import React from "react";
import ApplicantCard from "./ApplicantCard";

const ApplicantList = () => {
  const applicants = [
    {
      id: 1,
      name: "Alice Johnson",
      profilePicture: "https://via.placeholder.com/50",
      experience: "5 years",
    },
    {
      id: 2,
      name: "Bob Smith",
      profilePicture: "https://via.placeholder.com/50",
      experience: "3 years",
    },
    {
      id: 3,
      name: "Carol Davis",
      profilePicture: "https://via.placeholder.com/50",
      experience: "2 years",
    },
  ];

  const handleAccept = (name) => {
    alert(`${name} accepted!`);
  };

  const handleReject = (name) => {
    alert(`${name} rejected!`);
  };

  return (
    <div style={{ padding: "16px" }}>
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
  );
};

export default ApplicantList;
