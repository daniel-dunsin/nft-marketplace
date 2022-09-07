import React from "react";
import styled from "styled-components";
import heroTextImg from "../../assets/heroText.png";
import Button from "../Button";

const ratings = [
  {
    id: 1,
    count: 40,
    title: "artwork",
  },
  {
    id: 2,
    count: 12,
    title: "auction",
  },
  {
    id: 3,
    count: 20,
    title: "artist",
  },
];

const HomeText = () => {
  return (
    <HomeTextContainer>
      <h1>
        Explore Our <img src={heroTextImg} alt="image" /> Digital NFT Market
        Place
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eveniet
        nobis nesciunt natus rerum a consectetur expedita laborum mollitia
        earum?
      </p>
      <div className="btn-container">
        <Button blue>Explore Now</Button>
        <Button>Create NFT</Button>
      </div>
      <div className="ratings-section">
        {ratings.map((rating) => {
          const { id, count, title } = rating;
          return (
            <article className="rating" key={id}>
              <h1>{count}K</h1>
              <p>{title}</p>
            </article>
          );
        })}
      </div>
    </HomeTextContainer>
  );
};

const HomeTextContainer = styled.div`
  & > h1 {
    font-size: 6.5rem;
    color: white;
  }
  & > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 1.5rem 0 2rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3.5rem;
  }
  .ratings-section {
    display: flex;
    gap: 6rem;
    justify-content: start;
    align-items: center;
    .rating {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.5rem;
        text-transform: capitalize;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
    h1{
        font-size: 4rem;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    text-align: center;
    img{
      display: none;
    }
    .ratings-section{
      justify-content: center;
    }
    .btn-container{
      flex-direction: column;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.galaxyFold}){
    padding: 0rem;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.4rem;
    }
    .ratings-section{
      gap: 2rem;
    }
  }
`;

export default HomeText;
