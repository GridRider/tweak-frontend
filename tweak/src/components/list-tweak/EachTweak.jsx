import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const EachTweak = ({
  profileImage,
  profileLink,
  title,
  amount,
  pricingType,
  isRemote,
  experienceRequired,
  category,
  verificationRequired,
  dateTime,
  location,
  locationLink,
}) => {
  return (
    <div style={styles.card}>
      <a href={profileLink} target="_blank" rel="noopener noreferrer">
        <img src={profileImage} alt="Profile" style={styles.image} />
      </a>
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.amount}>{amount}</p>
        <p style={styles.text}>{pricingType}</p>
        <p style={styles.text}>
          {isRemote ? (
            <FaBriefcase style={styles.icon} title="Remote" />
          ) : (
            <FaBriefcase style={styles.icon} title="On-Site" />
          )}
        </p>
        <p style={styles.text}>
          Experience Required:{" "}
          {experienceRequired ? (
            <FaCheckCircle style={styles.icon} title="Yes" />
          ) : (
            <FaTimesCircle style={styles.icon} title="No" />
          )}
        </p>
        <p style={styles.text}>Category: {category}</p>
        <p style={styles.text}>
          Verification Required:{" "}
          {verificationRequired ? (
            <FaCheckCircle style={styles.icon} title="Yes" />
          ) : (
            <FaTimesCircle style={styles.icon} title="No" />
          )}
        </p>
        <p style={styles.text}>Date: {dateTime}</p>
        <p style={styles.text}>
          <a href={locationLink} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt style={styles.icon} /> {location}
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
    flex: 1,
  },
  title: {
    margin: "0 0 8px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  amount: {
    margin: "0 0 8px",
    color: "#4CAF50",
    fontWeight: "bold",
  },
  text: {
    margin: "0 0 8px",
    color: "#555",
  },
  icon: {
    marginRight: "8px",
    color: "#555",
  },
};

export default EachTweak;
