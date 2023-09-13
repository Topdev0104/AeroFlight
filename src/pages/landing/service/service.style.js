import styled from "styled-components";
import airplane from "../../../assets/images/airplane.png";
export const ServiceContainer = styled.div`
  background-image: url(${airplane});
  background-position: center;
  background-size: cover;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.9%; /* 48.258px */
    letter-spacing: -1.05px;
    padding-top: 134px;
  }
  h2 {
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 132.9%; /* 42.528px */
    letter-spacing: -0.8px;
    max-width: 666px;
    margin: 50px auto 0 auto;
  }
  h3 {
    color: #2626e5;
    font-family: Druk Wide;
    font-size: 45px;
    font-style: normal;
    font-weight: 950;
    line-height: 128.4%; /* 57.78px */
    letter-spacing: 2.025px;
    margin-top: 239px;
    text-align: center;
    margin-bottom: 134px;
  }
`;
export const TeamView = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  max-width: 1200px;
  padding-bottom: 80px;
`;
export const Card = styled.div`
  max-width: 361.497px;
  background: rgba(135, 135, 245, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  img {
    width: 241.744px;
    height: 194.672px;
  }
  h5 {
    color: rgba(255, 255, 255, 0.8);
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.4%; /* 28.248px */
    letter-spacing: -0.55px;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 158.9%; /* 25.424px */
    letter-spacing: -0.4px;
    margin-top: 80px;
  }
`;
