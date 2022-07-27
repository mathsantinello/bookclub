import styled from 'styled-components';
import bg from './images/bg.png'
import { bookCoverBorder, mediaWidth, spineWidth, spineWidthMedia } from './variables';

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    overflow: scroll;
`
export const Bookcover = styled.section`
    width: calc( 100vw - ${spineWidth} - 2*${bookCoverBorder});
    height: calc(100% - 2*(${bookCoverBorder}));
    border-style: solid;
    border-width: ${bookCoverBorder};
    border-color: ${props => props.theme.colors.fourth};
    background-color: ${props => props.theme.colors.primary}; 
    background: url(${bg}) repeat;
    background-size: 10rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 1s ease;
    @media(max-width: ${mediaWidth}){
        width: calc( 100vw - ${spineWidthMedia});
    }
    &::after{
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: ${props => props.theme.colors.primary};  
    }
    @media(max-width: ${mediaWidth}){
        width: calc( 100vw - ${spineWidthMedia});
    }   
`

