import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    @media screen and (max-width: ${({theme})=> theme.screens.tablet}) {
        padding: 1.5rem;
    }
`;

export default Container;