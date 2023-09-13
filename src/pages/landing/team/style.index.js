import styled from "styled-components";

export const TeamContainer = styled.div`
  padding-bottom: 99px;
  h1 {
    color: #2626e5;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.4%; /* 28.248px */
    letter-spacing: -0.55px;
    text-align: center;
    margin: 45px auto 0 auto;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 114.9%; /* 62.046px */
    letter-spacing: -1.35px;
    margin-top: 24px;
  }
  h3 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.9%; /* 23.922px */
    letter-spacing: -0.45px;
    margin-top: 20px;
  }
  h4 {
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 130.9%; /* 57.596px */
    letter-spacing: -1.1px;
    max-width: 736px;
    margin: 27px auto 0 auto;
  }
  h5 {
    max-width: 806px;
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 132.9%; /* 23.922px */
    letter-spacing: -0.45px;
    margin: 20px auto 0 auto;
  }
`;
export const TeamCard = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 20px auto;
  div {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    img {
      height: 466px;
    }
    span {
      margin-top: 20px;
      text-align: center;
    }
  }
`;
export const MoreBtn = styled.div`
  background: rgba(203, 4, 35, 0.25);
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 40px;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 132.9%; /* 23.922px */
  letter-spacing: -0.45px;
  margin: 52px auto 0 auto;
`;
