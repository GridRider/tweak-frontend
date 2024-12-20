import React from "react";
import EachTweak from "./EachTweak";

const ListTweak = () => {
  return (
    <div>
      <EachTweak
        profileImage="https://via.placeholder.com/150"
        profileLink="https://example.com"
        title="Frontend Developer"
        amount="$60,000/year"
        pricingType="Full-Time"
        isRemote={true}
        experienceRequired={true}
        category="Software Development"
        verificationRequired={false}
        dateTime="Dec 20, 2024"
        location="San Francisco, CA"
        locationLink="https://maps.google.com?q=San+Francisco"
      />
    </div>
  );
};

export default ListTweak;
