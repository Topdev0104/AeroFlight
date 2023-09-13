import React from "react";
import { Card, ServiceContainer, TeamView } from "./service.style";
import plane from "../../../assets/images/airplane_svg.png";
export default function Service() {
  return (
    <ServiceContainer>
      <h1>Elevate Your Aviation & Aerospace Documentation</h1>
      <h2>
        At Aeroflight, we specialize in creating top-tier MEL (Minimum Equipment
        List) documents tailored for the aviation and aerospace sectors. Our
        expertise ensures compliance, clarity, and precision in every document
        we craft.
      </h2>
      <h3>Our Services Include</h3>
      <TeamView>
        <Card>
          <img src={plane} alt="" />
          <h5>MEL Document Creation</h5>
          <p>
            Ensure your aircraft operates safely and efficiently with our
            meticulously crafted MEL documents, compliant with all regulatory
          </p>
        </Card>
        <Card>
          <img src={plane} alt="" />
          <h5>Document Review & Auditing</h5>
          <p>
            Already have an MEL? Let our experts review and audit your existing
            documents, ensuring they're up-to-date with the latest regulations.
          </p>
        </Card>
        <Card>
          <img src={plane} alt="" />
          <h5>Customized Aerospace Manuals:</h5>
          <p>
            From flight operations to maintenance, we create comprehensive
            manuals tailored to your specific needs.
          </p>
        </Card>
      </TeamView>
    </ServiceContainer>
  );
}
