import React from "react";

import { LandingContainer } from "./index.style";
// import { LandingLayout } from "../../layouts";

import Elevate from "./elevate";
import Second from "./second";

const Landing = () => {
  return (
    // <LandingLayout>
    <LandingContainer>
      <Elevate />
      <Second />
    </LandingContainer>
    // </LandingLayout>
  );
};

export default Landing;
