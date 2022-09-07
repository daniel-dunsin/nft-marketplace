import React, { useState } from 'react'
import styled from 'styled-components';
import MarketplaceCard from './MarketplaceCard';
import Container from '../Container';
import marketplace1 from "../../assets/marketplace1.png";
import marketplace2 from "../../assets/marketplace2.png";
import marketplace3 from "../../assets/marketplace3.png";
import marketplace4 from "../../assets/marketplace4.png";
import marketplace5 from "../../assets/marketplace5.png";
import marketplace6 from "../../assets/marketplace6.png";
import marketplace7 from "../../assets/marketplace7.png";
import marketplace8 from "../../assets/marketplace8.png";
const marketPlaceData = [
    {
        image: marketplace1,
        name: "Aiboi-meta",
        category: 'Art'
    },
    {
        image: marketplace2,
        name: "Pedram-mohamm...",
        category: 'Common'
    },
    {
        image: marketplace3,
        name: "Eduardo-pena",
        category: 'Generic'
    },
    {
        image: marketplace4,
        name: "Daeho-cha",
        category: 'Trading'
    },
    {
        image: marketplace5,
        name: "Justine-florentino",
        category: 'Rare'
    },
    {
        image: marketplace6,
        name: "Hoang-l-p-solan",
        category: 'Generic'
    },
    {
        image: marketplace7,
        name: "Joshua-jay",
        category: 'Common'
    },
    {
        image: marketplace8,
        name: "Joshua-jay",
        category: 'Rare'
    },
];

const Marketplace = () => {

    const [currentCategory, setCurrentCategory] = useState('All');
    const [filteredCards, setFilteredCards] = useState([...marketPlaceData]);

    const allButtons = marketPlaceData.reduce((allButtonCategory, currentItem) => {
        if (!allButtonCategory.includes(currentItem.category)) {
            allButtonCategory.push(currentItem.category)
        };
        return allButtonCategory;
    }, ['All']);

    const filterCards = (category) => {
        if (category == 'All') {
            setFilteredCards([...marketPlaceData]);
            return;
        }
        setFilteredCards([...marketPlaceData].filter(card => card.category == category));
    }
    const handleButtonClick = (buttonText) => {
        console.log('hello')
        filterCards(buttonText);
        setCurrentCategory(buttonText);
    }

    const handleOptionsSelect = (e) => {
        const value = e.target.options[e.target.selectedIndex].value;
        setCurrentCategory(value);
        filterCards(value);
    }

    return <MarketplaceContainer>
        <Container>
            <h1>NFT Marketplace</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="btn-container">
                {
                    allButtons.map((buttonText, index) => <button key={index} className={`black ${currentCategory == buttonText ? 'active' : ''}`} onClick={() => { handleButtonClick(buttonText) }}>{buttonText}</button>)
                }
            </div>
            <select onChange={handleOptionsSelect}>
                {
                    allButtons.map((buttonText, index) => <option key={index} value={buttonText}>{buttonText}</option>)
                }
            </select>
            <div className="cards-container">
                {filteredCards.map(card => {
                    return <MarketplaceCard {...card} />
                })}
            </div>
        </Container>
    </MarketplaceContainer>
}

const MarketplaceContainer = styled.section`
    margin-top: 8rem;
    & > div{
        text-align: center;
        & > h1{
            
        font-size: 4rem;
        margin: 3rem 0;
        text-align: center;
        }
        & > p{
            font-size: 1.4rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        .btn-container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 5rem;
            gap: 2rem;
        }
        select{
            margin: 1rem auto 2rem;
            padding: 0.8rem;
            font-size: 1.45rem;
            width: 12rem;
            outline: none;
            border-radius: .5rem;
            &:focus{
                border: 2px solid black;
            }
            display: none;
        }
        .cards-container{
            text-align: start;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 4rem 2.5rem;
            justify-content: center;
            align-items: center;
        }
        button{
            padding: 1.2rem 4rem;
            font-size: 1.6rem;
            border: none;
            background-color: ${({ blue, theme }) => blue ? theme.colors.mainLightBlue : 'transparent'};
            border: 1px solid ${({ blue }) => blue ? 'transparent' : 'white'};
            color:white;
            border-radius: 3rem;
            cursor: pointer;
            transition: .3s;
            &.black{
                background-color: transparent;
                border-color: black;
                color: black;
            }
            &.active{
                background-color:  ${({ theme }) => theme.colors.mainLightBlue};
                border: 1px solid ${({ theme }) => theme.colors.mainLightBlue};
                color: white;
            }
            &:hover{
                background-color:  ${({ theme }) => theme.colors.mainLightBlue};
                border: 1px solid ${({ theme }) => theme.colors.mainLightBlue};
                color: white;
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.tablet}){
        & > div{
            padding: 2rem;
            .btn-container{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
            .cards-container{
                grid-template-columns: repeat(2, 1fr);
                
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}){
        & > div {
            padding: 3rem;
            .btn-container{
            display: none;
            }
            select{
                display: block;
            }
            .cards-container{
                grid-template-columns: 1fr;
            }
        }
    }
    
`

export default Marketplace