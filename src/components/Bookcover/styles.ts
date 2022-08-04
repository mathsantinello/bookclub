import styled from 'styled-components';
import bgscroll from '../../styles/images/bgscroll.jpg';
import { blockContentBgColor, bookCoverBorder, bookCoverImageHeigth, bookMarkWidth, mainColor, mainFont, mediaWidth, spineWidth, spineWidthMedia } from '../../styles/variables';
import bg from '../../styles/images/bg.png';

export const BookcoverStyle = styled.section`
    width: calc( 100vw - ${spineWidth});
    /* border-style: solid;
    border-width: ${bookCoverBorder};
    border-color: ${props => props.theme.colors.fourth}; */
    background-color: ${props => props.theme.colors.primary}; 
    background: url(${bg}) repeat;
    background-size: 10rem 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: color 1s ease;
    @media(max-width: ${mediaWidth}){
        width: calc( 100vw - ${spineWidthMedia});
    }
    @media(max-width: ${mediaWidth}){
        width: calc( 100vw - ${spineWidthMedia});
    }   
`
export const CoverBlock = styled.div`
    width: 30%;
    min-width: 28rem;
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
        max-width: 32rem;
        font-size: 3rem;
        margin-top: 6rem;
        text-align: center;
        @media(max-width:${mediaWidth}){
        font-size: 1.5rem;
    }
    };
    >h2{
        font-size: 2rem;
        text-decoration: underline;
        text-align: center;
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
    background-color:  	#F9F6EE;
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
    >ul{
        height: 80.5%;
        width: 58.75%;
        background-color: ${blockContentBgColor};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        column-gap: 3rem;
        row-gap: 0.5rem;
        list-style: none;
        >li{
            width: 3.4rem;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            @media(max-width: ${mediaWidth}){
                width: 1.7rem;
                
            }
            &:hover{
                >div{
                    color:black;
                }
            }
            >img{
            margin: 0;
            width: 3rem;
            height: 3rem;
            border: 0.1rem solid black;
            border-radius: 50%;
            @media(max-width: ${mediaWidth}){
                width: 1.5rem;
                height: 1.5rem;
            }
            &:hover{
                cursor: pointer;
            }
            }
            >div{
                color: ${blockContentBgColor};
                font-size: 0.75rem;
            }      
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

