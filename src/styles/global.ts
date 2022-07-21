import styled from 'styled-components';
import bg from './images/bg.png'

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: scroll;
`

export const Bookcover = styled.section`
    transition: all 1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc( 100vw - 10rem);
    height: 100vh;
    background-color: ${props => props.theme.colors.primary}; 
    background: url(${bg}) repeat;
    background-size: 10rem 10rem;
    border-color: ${props => props.theme.colors.fourth};
    border-style: solid;
    border-width: 20px;
    &::after{
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        z-index: -1;
        background-color: ${props => props.theme.colors.primary};
        width: calc( 100vw - 10rem);
        height: 100vh;
    }   
`

