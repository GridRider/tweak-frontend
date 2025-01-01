import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './EachTweak.module.css';
import defaultProfile from '../../assets/profile1.jpeg';
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
    isEven,
  } = tweakDetails;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Check if the key is even
  const isOddKey =!isEven;

  return (
    <div className={`${styles.card} ${isOddKey ? styles['card-2'] : ''}`}>
      <div className={`${styles.content}`}>
        <div className={styles.content}>
          <div className={`${styles['inner-div-1']}'}`}>
            <p className={`${styles.amount} ${isOddKey ? styles['amount-2'] : ''}`}>
              {amount} {pricingType}
            </p>
            <p className={`${styles.tag} ${isOddKey ? styles['tag-2'] : ''}`}>{category}</p>
          </div>
          <h2 className={`${styles.title} ${isOddKey ? styles['title-2'] : ''}`}>{title}</h2>
          <p className={`${styles.date} ${isOddKey ? styles['date-2'] : ''}`}>
            {date} {time}
          </p>
          <div className={`${styles['inner-div-1']}`}>
            <p >
              {isRemote ? (
                <p className={`${styles['work-mode-remote']} ${isOddKey ? styles['work-mode-remote-2'] : ''}`}>
                  Remote
                </p>
              ) : (
                <p className={`${styles['work-mode-on-site']} `}>
                  On-Site
                </p>
              )}
            </p>
            {experienceRequired && (
              <p className={`${styles['experienced']}`}>Experienced Only</p>
            )}
            {verificationRequired && (
              <p className={`${styles['verified']}`}>Verified Only</p>
            )}
          </div>
        </div>
        <hr className={`${styles['line']} ${isOddKey ? styles['line-2'] : ''}`} />
        <div className={`${styles['inner-div-last']} `}>
          <img
            src={profileImage}
            alt="Profile"
            className={`${styles.image} ${isOddKey ? styles['image-2'] : ''}`}
            onError={(e) => (e.target.src = defaultProfile)}
          />
          <div className={`${styles['inner-div-last']}`}>
            <p className={`${styles.icon} ${isOddKey ? styles['icon-2'] : ''}`} type="button" onClick={openModal}>
              <FaMapMarkerAlt />
            </p>
            <p className={`${styles.location} ${isOddKey ? styles['location-2'] : ''}`}>{location}</p>
          </div>
        </div>
        <CustomModal isOpen={isModalOpen} onClose={closeModal} title="My Custom Modal">
          <p>This is a reusable modal component.</p>
          <button onClick={closeModal}>Close</button>
        </CustomModal>
      </div>
    </div>
  );
};

export default EachTweak;
