import styled from "styled-components";
export const ElevateContainer = styled.div`
  background-color: #020202;
  h1 {
    color: #2626e5;
    font-family: Druk Wide;
    font-size: 60px;
    font-style: normal;
    font-weight: 950;
    line-height: 128.4%; /* 77.04px */
    letter-spacing: 7.5px;
    max-width: 820px;
    margin-top: 180px;
    margin-left: 220px;
  }
  h2 {
    color: #000;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: bold;
    line-height: 128.4%; /* 46.224px */
    letter-spacing: -0.9px;
    max-width: 740px;
    margin-top: 20px;
    margin-left: 220px;
  }
  h3 {
    color: #2626e5;
    font-family: Druk Wide;
    font-size: 45px;
    font-style: normal;
    font-weight: 950;
    line-height: 114.9%; /* 51.705px */
    letter-spacing: 1.575px;
    margin: 928px auto 0 auto;
    text-align: center;
  }
  h4 {
    margin: 28px auto 0 auto;
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 158.9%; /* 57.204px */
    letter-spacing: -0.9px;
    max-width: 1117px;
  }
`;
export const CloudImg = styled.img`
  position: absolute;
  right: 0;
  width: 656px;
  height: 369px;
`;
export const ElevateHeaderContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  mix-blend-mode: luminosity;
  backdrop-filter: blur(2px);
`;
export const ElevateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  img {
    width: 150px;
    height: 120px;
  }
  div {
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: #fff;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
    }
  }
`;
