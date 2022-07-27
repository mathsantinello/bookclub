import styled from 'styled-components';
import { bookMarkWidth, mainColor, mainFont } from '../../styles/variables';

export const Bookmark = styled.div<{ isOpen: boolean, imgtext: string }>`
    position: absolute;
    right:3rem;
    top:0rem;
    width: ${bookMarkWidth};
    height: ${props => props.isOpen ? '82vh' : '5rem'};
    max-height: 82vh;
    background-color: #AC0608;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent #EBA11C #EBA11C  #EBA11C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: height 0.5s ease;
    font-family: ${mainFont};
    >span{
        padding-bottom: 1rem;
        color: ${mainColor};
        font-size: 1.2rem;
        
    };
    >div{
        height: 100%;
        width:${bookMarkWidth};
        display: ${props => props.isOpen ? 'flex' : 'none'};
        flex-direction: column;
        align-items: center;
        row-gap: 3rem;
        overflow-y: scroll;
        >div{
            position: relative;
            >img{
            width: 7rem;
            height: 10rem;
            transform: ${props => props.isOpen ? 'none' : 'none'};
            transition: all 0.2s ease;
            };
            >span{
                position: absolute;
                bottom:50%;
                right:0rem;
                width: 7rem;
                display: none;
                text-align: center;
            };
            &:hover{
                >img{
                    cursor: pointer;
                    opacity: 0.3;
                }
                >span{
                    display: block;
                    color: #FFFFFF;
                    text-shadow: #000000 0.1rem;
                    font-weight: 600;
                    font-family: ${mainFont};
                };  
            };   
        };  
    };
    >button{
        height: 2.5rem;
        width: 2.5rem;
        background-color: transparent;
        border: none;
        transition: all 0.5s ease;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'none'};
        &:hover{
            cursor: pointer;
        };
    };
`