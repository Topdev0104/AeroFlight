import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { bounce } from "react-animations";
import bg from "../../../assets/images/BACKGROUND/main.jpg";
const bounceAnimation = keyframes`${bounce}`;
export const LandingContainer = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;

  position: relative;
`;
export const MobileMenu = styled.div`
  display: ${(props) => (props.isMobile && props.isOpened ? "flex" : "none")};
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background-color: black;
  @media screen and (min-width: 426px) {
    display: none;
  }
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0 0;
`;
export const HeadContainer = styled.div`
  width: 100%;
  border: 1px solid white;
  border-left-color: transparent;
  border-right-color: transparent;
  height: 140px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px 0 white;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0;
  background-color: rgb(0, 0, 0, 0.4);
`;
export const MenuView = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  position: absolute;
  right: 0;
  z-index: 12000000000000000000;
`;
export const HeaderView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const LinkView = styled.div`
  max-width: 500px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const LinkTxt = styled(Link)`
  font-family: "Cinzel Decorative", cursive;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
export const SocialView = styled.div`
  max-width: 200px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const LogoView = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0 0 10px 0 white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    position: relative;
  }
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const IconView = styled.div`
  position: fixed;
  bottom: 20px;
  animation: 3s ${bounceAnimation} linear infinite;
`;
export const Blurview = styled.div`
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, #000000 0%, rgba(217, 217, 217, 0) 100%);
`;
