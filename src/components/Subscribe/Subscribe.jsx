import React from 'react'
import styled from 'styled-components';
import {BsArrowRightCircleFill} from 'react-icons/bs'
import Container from '../Container';
import image from '../../assets/subscribe.png'
const Subscribe = () => {
  return <SubscribeContainer>
    <Container>
        <div className="subscribe-text">
            <h1>Subscribe To Get Update For Every New Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vitae temporibus nesciunt fugiat nihil voluptate iure expedita amet?</p>
            <div className="input-group">
                <input type="text" placeholder='Enter Your Email'/>
                <i><BsArrowRightCircleFill /></i>
            </div>
        </div>
        <div className='subscribe-img'>
            <img src={image} alt="" />
        </div>
    </Container>
  </SubscribeContainer>
}

const SubscribeContainer = styled.section`
    margin: 7rem 0;
    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        gap: 2rem;
        .subscribe-text{
            flex-basis: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 3rem;
            h1{
                font-size: 5rem;
            }
            p{
                color: ${({theme})=> theme.colors.textColor};
                line-height: 1.5;
                font-size: 1.4rem;
            }
            .input-group{
                max-width: 400px;
                padding: .65rem 1.3rem .3rem;
                border: 1px solid black;
                border-radius: 4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    font-size: 1.6rem;
                    border: none;
                    outline: none;
                }
                i{
                    font-size: 3.5rem;
                    color: ${({theme})=> theme.colors.mainLightBlue};
                }
            }
        }
        .subscribe-img{
            flex-basis: 50%;
            img{
                width: 100%;
            }
        }
        @media screen and (max-width: ${({theme})=> theme.screens.mobile}) {
            flex-direction: column;
            .subscribe-text{
                h1{
                    font-size: 3rem;
                }
                .input-group{
                    max-width: 300px;
                }
            }
        }
    }

`

export default Subscribe