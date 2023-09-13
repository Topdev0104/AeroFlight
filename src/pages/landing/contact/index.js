import React from "react";
import { ContactContainer, ContactSocialWrapper } from "./contact.style";
import call from "../../../assets/images/Call.png";
import email from "../../../assets/images/Email.png";
import location from "../../../assets/images/Location.png";
export default function Contact() {
  return (
    <ContactContainer>
      <h1>What Clients have to Say! </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
        mi.
      </h2>
      <h3>
        "Tyson Foods has been using Aeroflight for our MEL's for over ten years.
        Aeroflight is a great company to partner with for all your MEL needs.
        Their customer service is best in class, and they are always there to
        meet your needs." – Jesse Simpson, Chief Pilot Tyson Foods “Gulf Coast
        Aviation, Inc. has had Aeroflight complete our Part 135 MEL's for
        several years.After we filled out their questionnaires and Aeroflight
        sends us the completed Part 135 MEL, we have no problems getting them
        approved by the FAA within days.They (The FAA) has asked us several
        times why the other Operators in their district haven't used
        Aeroflight's service. My answer to them (The FAA) is the other operator
        try to complete their MEL using the MMEL and when they get rejected by
        the FAA, they come to me for help. To me that is costing them time they
        can't afford and wasting my time.Easiest way to go, in my opinion, is
        Aeroflight Publications.” -Roger D. NowlingG C Aviation, Inc.— Quote
        Source
      </h3>
      <ContactSocialWrapper>
        <div>
          <span>
            <img src={call} alt="" />
          </span>
          <div>
            <p>Give Us A Call</p>
            <a href="#">(806 733-2483)</a>
          </div>
        </div>
        <div>
          <span>
            <img src={email} alt="" />
          </span>
          <div>
            <p>Send Us A Message</p>
            <a href="#">isvy.acosta@aftd.com</a>
          </div>
        </div>
        <div>
          <span>
            <img src={location} alt="" />
          </span>
          <div>
            <p>Location</p>
            <a href="#">
              433 Main Street <br />
              Gruver, TX 79040
            </a>
          </div>
        </div>
      </ContactSocialWrapper>
    </ContactContainer>
  );
}
