import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
const Card = ({ id, img, title, text, button }) => {
    return <CardContainer>
        <div className='img-container'>
            <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button blue={id % 2 === 0 ? true : false}>
            {button}
        </Button>
    </CardContainer>
}


const CardContainer = styled.article`
    background-color:#ffffff34 !important;
    padding: 2.5rem 3rem;
    border-radius: 1.6rem;
    color: white;
    p{
        font-size: 1.35rem;
        color: ${({theme})=> theme.colors.textColor};
        margin: 1.5rem 0 2.5rem;
    }
    .img-container{
        background-color: ${({theme})=> theme.colors.mainLightBlue};
        width:5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 1.5rem;
        img{
            width: 3rem;
            height: 3rem;
        }
    }
`

export default Card