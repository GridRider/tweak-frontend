import React from "react";
import styles from "./Description.module.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Description = ({
  title,
  description,
  audioDescriptionUrl,
  isRemote,
  category,
  skills,
  amount,
  pricingType,
  dateTime,
  address,
  closingDate,
  experienceRequired,
  verificationRequired,
  onAddToWatchlist,
  onApply,
  onRemoveApplication,
  onViewApplicants,
  hasApplied,
  onWatchlistClick,
  hasWatchlisted
}) => {

  
  return (
    <>
      <div className={styles['top-div']}>
        <header className={styles['header-2']}>
          <div className={styles['watchlist']}>
        {hasWatchlisted?<FaBookmark onClick={onWatchlistClick}/>:<FaRegBookmark onClick={onWatchlistClick}/>}
        </div>
          <h1>{title}</h1>
          <p className={styles.category}>{category}</p>
        </header>
        <section className={styles.description}>
          <p>{description}</p>
        </section>
      </div>
      <div className={styles['bottom-div']}>
      {audioDescriptionUrl && (
        <audio controls>
          <source src={audioDescriptionUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <section className={styles.details}>
        <div className={styles.detail}>
          <strong>Remote or On-site:</strong> {isRemote ? "Remote" : "On-site"}
        </div>
        <div className={styles.detail}>
          <strong>Skills Required:</strong> {skills.join(", ")}
        </div>
        <div className={styles.detail}>
          <strong>Amount:</strong> {amount} ({pricingType})
        </div>
        <div className={styles.detail}>
          <strong>Date and Time:</strong> {dateTime}
        </div>
        <div className={styles.detail}>
          <strong>Address:</strong> {address}
        </div>
        <div className={styles.detail}>
          <strong>Closing Date:</strong> {closingDate}
        </div>
        <div className={styles.detail}>
          <strong>Experience Required:</strong> {experienceRequired ? "Yes" : "No"}
        </div>
        <div className={styles.detail}>
          <strong>Verification Required:</strong> {verificationRequired ? "Yes" : "No"}
        </div>
        <p>30 People have already applied</p>
      </section>
      <footer className={styles.actions}>
        {!hasApplied?<button onClick={onApply}>Apply</button>:
        <button onClick={onRemoveApplication}>Remove Application</button>}
      </footer>
      </div>
    </>
  );
};

export default Description;
