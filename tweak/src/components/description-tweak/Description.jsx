import React from "react";
import "./JobDetailsPage.css";

const Description
 = ({
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
}) => {
  return (
    <div className="job-details-container">
      <header className="header">
        <h1>{title}</h1>
        <p className="category">{category}</p>
      </header>
      <section className="description">
        <h2>Description</h2>
        <p>{description}</p>
        {audioDescriptionUrl && (
          <audio controls>
            <source src={audioDescriptionUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </section>
      <section className="details">
        <div className="detail">
          <strong>Remote or On-site:</strong> {isRemote ? "Remote" : "On-site"}
        </div>
        <div className="detail">
          <strong>Skills Required:</strong> {skills.join(", ")}
        </div>
        <div className="detail">
          <strong>Amount:</strong> {amount} ({pricingType})
        </div>
        <div className="detail">
          <strong>Date and Time:</strong> {dateTime}
        </div>
        <div className="detail">
          <strong>Address:</strong> {address}
        </div>
        <div className="detail">
          <strong>Closing Date:</strong> {closingDate}
        </div>
        <div className="detail">
          <strong>Experience Required:</strong> {experienceRequired ? "Yes" : "No"}
        </div>
        <div className="detail">
          <strong>Verification Required:</strong> {verificationRequired ? "Yes" : "No"}
        </div>
      </section>
      <footer className="actions">
        <button onClick={onAddToWatchlist}>Add to Watchlist</button>
        <button onClick={onApply}>Apply</button>
        <button onClick={onRemoveApplication}>Remove Application</button>
        <button onClick={onViewApplicants}>See Number of Applicants</button>
      </footer>
    </div>
  );
};

export default Description
;
