import styled from 'styled-components';

const Button = styled.button`
    padding: 1.2rem 4rem;
    font-size: 1.6rem;
    border: none;
    background-color: ${({blue, theme})=> blue ? theme.colors.mainLightBlue : 'transparent'};
    border: 1px solid ${({blue})=> blue ? 'transparent': 'white'};
    color:white;
    border-radius: 3rem;
    cursor: pointer;
    &.black{
        background-color: transparent;
        border-color: black;
        color: black;
    }
    &.active{
        background-color:  ${({theme})=>theme.colors.mainLightBlue};
        border: 1px solid ${({theme})=> theme.colors.mainLightBlue};
        color: white;
    }
`;

export default Button;