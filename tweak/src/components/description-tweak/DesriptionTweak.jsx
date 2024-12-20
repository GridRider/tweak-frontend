import React from "react";
import Description from "./Description";

const DescriptionTweak = () => {
  const jobDetails = {
    title: "Frontend Developer",
    description: "Build responsive web DescriptionTweaklications.",
    audioDescriptionUrl: "https://example.com/audio-description.mp3",
    isRemote: true,
    category: "Software Development",
    skills: ["React", "JavaScript", "CSS"],
    amount: "$5000/month",
    pricingType: "Full-Time",
    dateTime: "Dec 20, 2024",
    address: "123 Tech Street, San Francisco, CA",
    closingDate: "Dec 31, 2024",
    experienceRequired: true,
    verificationRequired: false,
  };

  return (
    <Description
      {...jobDetails}
      onAddToWatchlist={() => alert("Added to Watchlist")}
      onApply={() => alert("Applied")}
      onRemoveApplication={() => alert("Application Removed")}
      onViewApplicants={() => alert("10 Applicants")}
    />
  );
};

export default DescriptionTweak;
