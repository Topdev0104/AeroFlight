import React from "react";

import { LandingContainer } from "./index.style";
// import { LandingLayout } from "../../layouts";

import Elevate from "./elevate";
import Second from "./second";
import Service from "./service";
import Team from "./team";
import Contact from "./contact";

const Landing = () => {
  return (
    // <LandingLayout>
    <LandingContainer>
      <Elevate />
      <Second />
      <Service />
      <Team />
      <Contact />
    </LandingContainer>
    // </LandingLayout>
  );
};

export default Landing;
