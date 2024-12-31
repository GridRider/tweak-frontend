import React from 'react';
import { useState } from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import styles from './EachTweak.module.css';
import defaultProfile from '../../assets/profile1.jpeg'; // Import backup image
import CustomModal from '../common/CustomModal';
const EachTweak = ({ tweakDetails }) => {
  const {
    profileImage,
    profileLink,
    title,
    amount,
    pricingType,
    isRemote,
    experienceRequired,
    category,
    verificationRequired,
    date,
    time,
    location,
    locationLink,
  } = tweakDetails;

   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.card}>
        
      <div className={styles.content}>
        <div className={styles.content}>
        
        <div className={styles['inner-div-1']}> 
        <p className={styles.amount}>{amount} {pricingType}</p>
        
        <p className={styles.tag}>{category}</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
        
        <p className={styles.date}> {date}   {time}</p>
       
        
        <div className={styles['inner-div-1']}>
        <p className={styles.text}>
          {isRemote ? (
            <p className={styles['work-mode-remote']}>Remote</p>
          ) : (
            <p className={styles['work-mode-on-site']}>On-Site</p>
          )}
        </p>
        
        
        {experienceRequired ? <p className={styles['experienced']}> Experienced Only</p> : ""}
        {verificationRequired ? <p className={styles['verified']}> Verified Only</p> : ""}
        </div>
        </div>
        
        <hr className={styles['line']} />
        <div className={styles['inner-div-last']}>
        <img
          src={profileImage}
          alt="Profile"
          className={styles.image}
          onError={(e) => (e.target.src = defaultProfile)} // Fallback to backup image
        />
        <div className={styles['inner-div-last']} >
        <p className={styles["location-btn"]} type="button" onClick={openModal}><FaMapMarkerAlt/></p>
        <p  className={styles.location}>{location}</p>
        </div>
        </div>
        
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Custom Modal"
      >
        
        <p>This is a reusable modal component.</p>
        <button onClick={closeModal}>Close</button>
      </CustomModal>
        
        {/* 
      
        
        
        
        <p className={styles.text}>
          <a href={locationLink} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className={styles.icon} /> {location}
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default EachTweak;
