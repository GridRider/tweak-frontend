import React from "react";
import EachTweak from "./EachTweak";
import styles from './EachTweak.module.css';


const ListTweak = () => {
  const tweaks = [
    {
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
      time: "2:30 PM",
      location: "San Francisco, CA",
      locationLink: "https://maps.google.com?q=San+Francisco",
    },
    {
      profileImage: "",
      profileLink: "https://example.com",
      title: "Backend Developer",
      amount: "$70,000",
      pricingType: "Per Hr",
      isRemote: false,
      experienceRequired: true,
      category: "Software Development",
      verificationRequired: false,
      date: "Jan 15, 2025",
      time: "10:00 AM",
      location: "New York, NY",
      locationLink: "https://maps.google.com?q=New+York",
    },
    {
      profileImage: "",
      profileLink: "https://example.com",
      title: "UI/UX Designer",
      amount: "$50,000",
      pricingType: "Per Hr",
      isRemote: true,
      experienceRequired: false,
      category: "Design",
      verificationRequired: true,
      date: "Feb 1, 2025",
      time: "3:00 PM",
      location: "Los Angeles, CA",
      locationLink: "https://maps.google.com?q=Los+Angeles",
    },
  ];

  return (
    <div>
      <h2 className={styles["header"]}>Create Tweak</h2>
      {tweaks.map((tweak, index) => (
        <EachTweak key={index} tweakDetails={{ ...tweak, isEven: index % 2 === 0 }}/>
      ))}
    </div>
  );
};

export default ListTweak;
