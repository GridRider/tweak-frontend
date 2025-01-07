import React, { useState, useRef } from "react";
import styles from "./Description.module.css";
import { FaBookmark, FaRegBookmark, FaPlay, FaPause,FaVolumeUp } from "react-icons/fa";
import wiggleAudio from "../../assets/wiggle.mp3";
import styles2 from "../list-tweak/EachTweak.module.css"

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
        <div className={`${styles2['inner-div-1']} ${styles['inner-div-1-new']}`}>
            <p >
              {isRemote ? (
                <p className={`${styles2['work-mode-remote']}`}>
                  Remote
                </p>
              ) : (
                <p className={`${styles2['work-mode-on-site']} `}>
                  On-Site
                </p>
              )}
            </p>
            {experienceRequired && (
              <p className={`${styles2['experienced']}`}>Experienced Only</p>
            )}
            {verificationRequired && (
              <p className={`${styles2['verified']}`}>Verified Only</p>
            )}
          </div>
          <div className={styles['detail-amount']}>
            {amount} {pricingType}
          </div>
          
          <div className={styles.detail}>
            <strong>Skills Required:</strong> {skills.join(", ")}
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
          <p style={{fontWeight:"bold"}}><span style={{color:"red"}}>30 People </span>have already applied</p>
        </section>
        <footer className={styles.actions}>
        <div className={styles["watchlist"]}>
            {hasWatchlisted ? (
              <FaBookmark onClick={onWatchlistClick} />
            ) : (
              <FaRegBookmark onClick={onWatchlistClick} />
            )}
          </div>
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
