import styled from 'styled-components';
import bg from './images/bg.png'

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
`

export const Bookcover = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc( 100vw - 10rem);
    height: 100vh;
    background-color: #2B5A4A; 
    background: url(${bg}) repeat;
    background-size: 10rem 10rem;
    border-color: #14312C;
    border-style: solid;
    border-width: 20px;
    &::after{
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        z-index: -1;
        background-color: #2B5A4A;
        width: calc( 100vw - 10rem);
        height: 100vh;
    }   
`

