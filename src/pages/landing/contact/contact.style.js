import styled from "styled-components";
import children from "../../../assets/images/children.png";
export const ContactContainer = styled.div`
  background-image: url(${children});
  background-position: center;
  background-size: cover;
  padding-top: 563px;
  h1 {
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.9%; /* 62.046px */
    letter-spacing: -1.35px;
  }
  h2 {
    margin: 20px auto 0 auto;
    color: #656464;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.9%; /* 23.922px */
    letter-spacing: -0.45px;
    max-width: 885px;
  }
  h3 {
    margin: 105px auto 0 auto;
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.9%; /* 23.922px */
    letter-spacing: -0.45px;
    max-width: 885px;
  }
`;
