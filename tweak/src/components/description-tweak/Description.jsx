import React, { useState, useRef } from "react";
import styles from "./Description.module.css";
import { FaBookmark, FaRegBookmark, FaPlay, FaPause,FaVolumeUp } from "react-icons/fa";
import wiggleAudio from "../../assets/wiggle.mp3";

const Description = ({
  title,
  description,
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
  onApply,
  onRemoveApplication,
  hasApplied,
  onWatchlistClick,
  hasWatchlisted,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(wiggleAudio));

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className={styles["top-div"]}>
        <header className={styles["header-2"]}>
          <div className={styles["watchlist"]}>
            {hasWatchlisted ? (
              <FaBookmark onClick={onWatchlistClick} />
            ) : (
              <FaRegBookmark onClick={onWatchlistClick} />
            )}
          </div>
          <h1>{title}</h1>
          <p className={styles.category}>{category}</p>
        </header>
        <section className={styles.description}>
          <p>{description}</p>
        </section>
        <div className={styles["audio"]}>
        <div className={styles["audio-control"]} onClick={toggleAudio}>
          {isPlaying ? <FaPause className={styles["audio-icon"]} /> : <FaVolumeUp className={styles["audio-icon"]} />}
        </div>
        </div>
       
      </div>
      <div className={styles["bottom-div"]}>
        

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
          {!hasApplied ? (
            <button onClick={onApply}>Apply</button>
          ) : (
            <button onClick={onRemoveApplication}>Remove Application</button>
          )}
        </footer>
      </div>
    </>
  );
};

export default Description;
