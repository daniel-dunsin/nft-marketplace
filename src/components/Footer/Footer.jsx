import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsEnvelope, BsPhone, BsPinMap } from 'react-icons/bs';
import logo from '../../assets/logo.png';

const services = ['Art', 'Common', 'Trading', 'Rare', 'Generic'];
const company = ['Home', 'About', 'Marketplace', 'Sellers', 'Create'];
const contact = [{ id: 1, text: 'adejaredaniel12@gmail.com', icon: <BsEnvelope /> }, { id: 2, text: '+2348023720580', icon: <BsPhone /> }, { id: 3, text: '5, Lorem Ipsum, dolor sit street', icon: <BsPinMap /> }]
const Footer = () => {
    return <FooterContainer>
        <Container>
            <div className='details'>
                <img src={logo} alt="" />
                <p>5, Lorem Ipsum, dolor sit street</p>
                <div className="socials-container">
                    <i><BsFacebook /></i>
                    <i><BsTwitter /></i>
                    <i><BsLinkedin /></i>
                    <i><BsInstagram /></i>
                </div>
            </div>
            <div className='services'>
                <h4>Our Services</h4>
                <div>
                    {
                        services.map((service, index) => {
                            return <li key={index}>{service}</li>
                        })
                    }
                </div>
            </div>
            <div className='company'>
                <h4>Company</h4>
                <div>
                    {
                        company.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </div>
            </div>
            <div className='contact'>
                <h4>Contact Us</h4>
                <div>
                    {
                        contact.map(contactItem => {
                            const { id, text, icon } = contactItem;
                            return <li key={id}><i>{icon}</i><p>{text}</p></li>
                        })
                    }
                </div>
            </div>
        </Container>
    </FooterContainer>
}

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.mainDarkBlue};
    color: white;
    padding: 4rem;
    list-style-type: none;
    & > div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 7rem;
        justify-content: flex-start;
        align-items: flex-start;
        .details{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 2.5rem;
            img{
                width: 10rem;
            }
            .socials-container{
                display: flex;
                align-items: center;
                gap: 2rem;
                i{
                    font-size: 2rem;
                    display: grid;
                    place-items: center;
                    color: ${({ theme }) => theme.colors.mainLightBlue};
                    padding: .4rem;
                    border: 1px solid ${({ theme }) => theme.colors.textColor};
                    border-radius: 0.4rem;
                }
            }
        }
        .services, .company{
            h4{
                margin-bottom: 2rem;
            }
            & > div{
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 1rem;
                color: ${({ theme }) => theme.colors.textColor};
                font-size: 1.4rem;
            }
        }
        .contact{
            h4{
                margin-bottom: 2rem;
            }
            & > div{
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 1rem;
                li{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: ${({ theme }) => theme.colors.textColor};
                    i{
                        font-size: 2rem;
                        display: grid;
                        place-items: center;
                        color: ${({ theme }) => theme.colors.mainLightBlue};
                        padding: .4rem;
                        border: 1px solid ${({ theme }) => theme.colors.textColor};
                        border-radius: 0.4rem;
                    }
                    p{
                        font-size: 1.4rem;
                    }
                }
            }
        }
        
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
        padding: 4rem 2rem;
           & > div{
            grid-template-columns: repeat(3, 1fr);
           }
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
        & > div{
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            .details{
                .socials-container{
                    gap: 1rem;
                }
            }
        }
    }
`
export default Footer