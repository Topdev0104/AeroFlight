import styled from "styled-components";
import elevate from "../../../assets/images/elevate.png";
export const ElevateContainer = styled.div`
  background-image: url(${elevate});
  background-position: center;
  background-size: 100% 100%;
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
export const ElevateHeaderContainer = styled.div`
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
`;
export const ElevateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;

  padding: 40px 0 10px 0;
  img {
    width: 521px;
    height: 80px;
  }
  div {
    max-width: 700px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: #2626e5;
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
export const PinButton = styled.div`
  width: 255px;
  height: 62px;
  border-radius: 3px 0px 0px 3px;
  background-color: #5048c2;
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
  margin-left: 220px;
`;
export const CheckView = styled.div`
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1117px;
  padding-bottom: 70px;
  div {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 128.4%; /* 28.248px */
    letter-spacing: -0.55px;
    padding: 5px;
    img {
      margin-right: 16px;
    }
  }
`;
