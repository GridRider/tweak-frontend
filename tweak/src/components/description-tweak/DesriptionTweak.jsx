import React , {useState} from "react";
import Description from "./Description";
import { FaBookmark} from "react-icons/fa";

const DescriptionTweak = () => {
  const jobDetails = {
    title: "Frontend Developer",
    description: "Build responsive web DescriptionTweaklications.",
    audioDescriptionUrl: "https://example.com/audio-description.mp3",
    isRemote: true,
    category: "Software Development",
    skills: ["React", "JavaScript", "CSS"],
    amount: "$5000",
    pricingType: "Per hour",
    dateTime: "Dec 20, 2024",
    address: "123 Tech Street, San Francisco, CA",
    closingDate: "Dec 31, 2024",
    experienceRequired: true,
    verificationRequired: false,
  };
  const [hasApplied,setHasApplied]=useState(false);
  const [hasWatchlisted,setHasWatchlisted]=useState(false);
  const handleApply =()=>{
    setHasApplied(true)
  }
  const handleWatchlistClick=()=>{
    setHasWatchlisted(!hasWatchlisted)
  }

  return (
    <Description
      {...jobDetails}
      hasApplied={hasApplied}
      onAddToWatchlist={() => alert("Added to Watchlist")}
      onWatchlistClick={handleWatchlistClick}
      hasWatchlisted={hasWatchlisted}
      onApply={handleApply}
      onRemoveApplication={() => alert("Application Removed")}
      onViewApplicants={() => alert("10 Applicants")}
    />
  );
};

export default DescriptionTweak;
