import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Button from '../Button';
import choose from '../../assets/choose.png';
const Choice = () => {
    return <ChoiceSection>
        <Container>
            <div className='img-container'>
                <img src={choose} />
            </div>
            <div className='text-container'>
                <h1>Why should you Choose Our Website ? </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quo commodi maxime sint eum incidunt, harum dolores suscipit nesciunt reprehenderit repellat iusto sequi modi voluptas rerum.</p>
                <Button blue>Read More</Button>
            </div>

        </Container>
    </ChoiceSection>
}


const ChoiceSection = styled.section`
    & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        gap: 4rem;
        .img-container{
            flex-basis: 45%;
            img{
                width: 100%;
                object-fit: cover;
                object-position: top center;
            }
        }
        .text-container{
            flex-basis: 48%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 4rem;
            h1{
                font-size: 4.8rem;
            }
            p{
                font-size: 1.4rem;
                line-height: 1.5;
                color: ${({ theme }) => theme.colors.textColor};
            }
            button{
                max-width: fit-content;
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.tablet}){
        & > div{
            .text-container{
                h1{
                    font-size: 4rem;
                }
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}){
        & > div{
            flex-direction: column;
            margin-top: 4rem;
            .text-container{
                gap: 2rem;
                h1{
                    font-size: 3rem;
                }
            }
        }
    }
`

export default Choice