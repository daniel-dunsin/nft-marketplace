import React from 'react'
import styled from 'styled-components';
import Container from '../Container';
import Card from './Card';
import sell1 from '../../assets/sell1.png';
import sell2 from '../../assets/sell2.png';
import sell3 from '../../assets/sell3.png';

const createAndSellData = [
    {
        id:1, img:sell1, title:'Create Your Collections', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non amet libero dolores illum nulla eius.', button:'Create'
    },
    {
        id:2, img:sell2, title:'Add Your NFTs', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non amet libero dolores illum nulla eius.', button: 'Add NFT'
    },
    {
        id:3, img:sell3, title:'List Them For Sale', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non amet libero dolores illum nulla eius.', button: 'Sell Now'
    }
]


const CreateAndSell = () => {
  return <CAScontainer>
    <Container>
        <h1>Create And Sell Your NFTs</h1>
        <main className="cards-container">
            {
                createAndSellData.map(data=>{
                    return <Card key={data.id} {...data} />
                })
            }
        </main>
    </Container>
  </CAScontainer>
}



const CAScontainer = styled.section`
margin: 3rem 0;
    h1{
        text-align: center;
        font-size: 4rem;
        margin-bottom: 3rem;
    }
    .cards-container{
        background-color: ${({theme})=> theme.colors.mainDarkBlue};
        padding: 4.5rem 4rem;
        border-radius: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0rem 1.5rem;
        gap: 1.5rem;
    }
    @media screen and (max-width: ${({theme})=> theme.screens.tablet}){
        .cards-container{
            flex-direction: column;
        }
    }
    @media screen and (max-width: ${({theme})=> theme.screens.mobile}){
        h1{
            font-size: 3rem;
        }
        .cards-container{
            padding: 3rem;
            margin: 0 .5rem;
        }
    }
`


export default CreateAndSell