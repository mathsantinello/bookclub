import styled from 'styled-components';
import bgscroll from '../../styles/images/bgscroll.jpg';
import { bookCoverBorder, bookCoverImageHeigth, bookMarkWidth, mainColor, mainFont, mediaWidth, spineWidth, spineWidthMedia } from '../../styles/variables';
import bg from '../../styles/images/bg.png';

export const BookcoverStyle = styled.section`
    width: calc( 100vw - ${spineWidth});
    height: 100%;
    /* border-style: solid;
    border-width: ${bookCoverBorder};
    border-color: ${props => props.theme.colors.fourth}; */
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
export const CoverBlock = styled.div`
    width: 50rem;
    height: calc(100vh - ${bookMarkWidth});
    background-size: 100% 100%;
    background-color:transparent;
    background-image: ${props => `url(${props.theme.images.vintageborder})`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    font-family: ${mainFont};
    color: ${mainColor};
    font-weight: 900;
    transition: color 1s ease;
    @media(max-width:${mediaWidth}){
        width: calc(100% - ${spineWidthMedia});
        height: max-content;
        background-image: none;
    }
    >h1{
        font-size: 3rem;
        margin: 0;
        @media(max-width:${mediaWidth}){
        font-size: 1.5rem;
    }
    };
    >h2{
        font-size: 2rem;
        text-decoration: underline;
        @media(max-width:${mediaWidth}){
        font-size: 1rem;
    };
    };
`
export const CoverBlockContent = styled.div`
        margin-bottom: 2rem;
        height: ${bookCoverImageHeigth};
        aspect-ratio: 0.6;
        background-image: ${props => `url(${props.theme.images.bookcover})`};
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 1s ease;
        @media(max-width:${mediaWidth}){
            height: calc( 0.8*${bookCoverImageHeigth});    
        };
        >div{
        position: relative;
        background-image: url(${bgscroll});
        background-size: cover;
        height: 80.5%;
        width: 71.75%;
        color: black;
        font-size: 1.25rem;
        transform-style: preserve-3d;
        perspective: 750px;
        &:hover{
            >img{
                transform: rotateY(-75deg);
            }  
        }
        >p{
            margin-left: 3.2rem;
            margin-top: 2rem;
            text-justify: distribute-all-lines;
            text-align: center;
            font-size: 1rem;
            @media(max-width:${mediaWidth}){
                font-size: 0.75rem;
            }
        }
        >img{
        position: absolute;
        bottom:0rem;
        right: 0rem;
        height: 100%;
        width: 100%;
        background-size: cover;
        transform-origin: 0 50%;
        transition: all 0.5s ease;
        }
    } 
`
export const ProgressBar = styled.div<{ barSize: string }>`
    width:20rem;
    height:1rem;
    border-radius: 100rem;
    background-color: black;
    transition: color 1s ease;
    @media(max-width: ${mediaWidth}){
        width:10rem;
    }
    >div{
        transition: color 1s ease;
        width:${props => `${props.barSize}%`};
        height:100%;
        border-radius: 100rem; 
        background-color: ${props => props.theme.colors.third};     
    }
    &::after{
        content: '${props => props.barSize}%';
        position: relative;
        left:20.5rem;
        bottom: 1rem;
        @media(max-width: ${mediaWidth}){
            left:10.5rem;
        }
    }   
`

