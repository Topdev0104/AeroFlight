import React from "react";
import {
  CheckView,
  ElevateContainer,
  ElevateHeader,
  ElevateHeaderContainer,
  PinButton,
} from "./elevate.style";
import logo from "../../../assets/images/logo.png";
import check from "../../../assets/images/Ok.png";
import { data } from "./data";
export default function Elevate() {
  return (
    <ElevateContainer>
      <ElevateHeaderContainer>
        <ElevateHeader>
          <img src={logo} alt="" />
          <div>
            <span>Home</span>
            <span>New Mel</span>
            <span>Contact Us</span>
            <span>Meet Us</span>
            <span>Our Services</span>
          </div>
        </ElevateHeader>
      </ElevateHeaderContainer>
      <h1>Elevate Your Aviation Documents</h1>
      <h2>
        Crafting Comprehensive Aerospace Documentation Tailored to Your Needs
      </h2>
      <PinButton>View Our Services</PinButton>
      <h3>We offer the best certification.</h3>
      <h4>
        Not sure where to start? Our seasoned experts are here to guide you
        through every step of the MEL documentation process.
      </h4>
      <CheckView>
        {data.map((item, key) => (
          <div key={key}>
            <img src={check} alt="" />
            <span>{item.title}</span>
          </div>
        ))}
      </CheckView>
    </ElevateContainer>
  );
}
