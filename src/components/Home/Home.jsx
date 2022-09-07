import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import HomeText from "./HomeText";
import Container from "../Container";
import heroImg from "../../assets/hero.png";
const Home = () => {
  return (
    <HomeSection>
      <Navbar />
      <Container>
        <div className="row">
          <HomeText />
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </Container>
    </HomeSection>
  );
};

const HomeSection = styled.header`
  margin: 0.8rem;
  border-radius: 0.5rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainDarkBlue};
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin-top: 4rem;
    .hero-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: ${({theme})=> theme.screens.tablet}) {
    border-radius: 0rem;
    position: relative;
    margin: 0;
    & > div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: ${({theme})=> theme.screens.mobile}) {
    &>div{
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0);
    }
    .row{
      flex-direction: column;
      row-gap: 3rem;
    }
}
`;

export default Home;
