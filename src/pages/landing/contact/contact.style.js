import styled from "styled-components";
import children from "../../../assets/images/children.png";
import back from "../../../assets/images/contact.png";
export const ContactContainer = styled.div`
  background-image: url(${children});
  background-position: center;
  background-size: cover;
  padding-top: 563px;
  padding-bottom: 450px;
  position: relative;
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

export const ContactSocialWrapper = styled.div`
  background: url(${back}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  min-height: 404px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 20px;
  padding-bottom: 80px;
  & > :not(:first-child) {
    margin-left: 90px;
  }
  & > div {
    display: flex;
    align-items: center;
    span {
      min-width: 100px;
      height: 100px;
      margin-right: 16px;
      background-color: #2626e5;
      display: flex;
      align-items: center;
      border-radius: 999px;
      justify-content: center;
    }
    p {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      line-height: 20px; /* 83.333% */

      margin-bottom: 18px;
    }
    a {
      color: #2626e5;
      font-size: 24px;
      font-weight: 700;
      line-height: 20px; /* 83.333% */
      text-decoration-line: underline;
    }
  }
  @media screen and (max-width: 1240px) {
    & > :not(:first-child) {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    & > div {
      span {
        min-width: 70px;
        height: 70px;
      }
      p,
      a {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    background: #0f1525;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 50px 0;
    min-height: auto;
    & > div {
      max-width: 300px;
      width: 100%;
    }
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;
