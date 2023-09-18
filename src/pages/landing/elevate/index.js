import React from "react";
import {
  CloudImg,
  ElevateContainer,
  ElevateHeader,
  ElevateHeaderContainer,
} from "./elevate.style";
import logo from "../../../assets/images/logo.png";

import cloud from "../../../assets/images/cloud.png";
export default function Elevate() {
  return (
    <ElevateContainer>
      <CloudImg src={cloud} />
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
    </ElevateContainer>
  );
}
