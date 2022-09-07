import React from "react";
import styled from "styled-components";
import Container from "../Container";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";

const sponsorsImages = [client1, client2, client3, client4, client5, client6];

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <Container>
        {sponsorsImages.map((image, index) => {
          return (
            <div className="image-container" key={index}>
              <img src={image} alt={image} />
            </div>
          );
        })}
      </Container>
    </SponsorsContainer>
  );
};

const SponsorsContainer = styled.section`
    margin: 3rem 0;
    &>div{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 3rem;
        img{
            width: 100%;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}){
        & > div{
            grid-template-columns: repeat(3, 1fr);
            gap: 0rem;
        }
    }
`;

export default Sponsors;
