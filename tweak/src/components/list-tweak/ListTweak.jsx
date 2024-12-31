import React from "react";
import EachTweak from "./EachTweak";

const ListTweak = () => {
  const tweakDetails = {
    profileImage: "",
    profileLink: "https://example.com",
    title: "Frontend Developer",
    amount: "$60,000",
    pricingType: "Per Hr",
    isRemote: true,
    experienceRequired: true,
    category: "Software Development",
    verificationRequired: true,
    date: "Dec 20, 2024",
    time:"2:30 PM",
    location: "San Francisco, CA",
    locationLink: "https://maps.google.com?q=San+Francisco",
  };

  return (
    <div>
      <EachTweak tweakDetails={tweakDetails} />
    </div>
  );
};

export default ListTweak;
