import React from 'react';
import styled from 'styled-components';
import {BsThreeDots} from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa';

const MarketplaceCard = ({ image, name}) => {
  return <CardContainer>
    <div className='img-container'>
      <img src={image} alt="" />
    </div>
    <div className="card-info">
      <div className='name'>
        <h4>{name}</h4>
        <i><BsThreeDots /></i>
      </div>
      <p className='username'>@adejaredaniel12</p>
      <div className='price'>
        <p>5.5 ETH</p>
        <i><FaEthereum /></i>
      </div>
    </div>
  </CardContainer>
}

const CardContainer = styled.article`
  padding: 1rem;
  box-shadow: 0rem .4rem 2.4rem rgba(0,0,0,0.1);
  border-radius: 1.6rem;
  transition: .4s;
  &:hover{
    box-shadow: 0rem .6rem 3.4rem rgba(0,0,0,0.4);
  }
  img{
    width: 100%;
  }
  .card-info{
    padding: 2rem 1rem 1rem;
    font-weight:  bold !important;
     & > div{
      display: flex;
      justify-content: space-between;
      align-items: center;
     }
     .username{
      font-size: 1.4rem;
      margin: 1rem 0;
      font-weight: bold;
     }
  }
`


export default MarketplaceCard