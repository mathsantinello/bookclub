import styled from 'styled-components';
import bgscroll from '../../styles/images/bgscroll.jpg';

export const Block = styled.div`
    transition: all 1s ease;
    font-family: 'Jura', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: wheat ;
    font-weight: 900;
    gap: 0.2rem;
    background-color:transparent;
    background-image: ${props => `url(${props.theme.images.vintageborder})`};
    background-repeat: no-repeat;
    background-size: 50rem calc(100vh - 2.5rem);
    width: 50rem;
    height: calc(100vh - 2.5rem);
    >h1{
        font-size: 3rem;
        margin: 0;
    };
    >h2{
        font-size: 2rem;
        text-decoration: underline;
    };
`
export const BookCover = styled.div`
        transition: all 1s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30.5rem;
        width:22.25rem;
        background-image: ${props => `url(${props.theme.images.bookcover})`};
        background-size: 22.25rem 30.5rem ;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 2rem;
        >div{
        position: relative;
        font-size: 1.25rem;
        background-image: url(${bgscroll});
        background-size: cover;
        color: black;
        padding-left:3rem;
        height: 25rem;
        width: 13.25rem;
        transform-style: preserve-3d;
        perspective: 750px;
        &:hover{
            >img{
                transform: rotateY(-75deg);
            }  
        }
        >p{
            margin-top: 2rem;
            text-justify:distribute-all-lines;
        }
        >img{
        position: absolute;
        bottom:0rem;
        right: 0rem;
        height: 25rem;
        width: 16.25rem;
        background-size: cover;
        transform-origin: 0 50%;
        transition: all 0.5s ease;
        border: solid 0.2rem wheat;
        }
    } 
`
export const ProgressBar = styled.div<{ barSize: string }>`
    
    width:20rem;
    border-radius: 100rem;
    background-color: black;
    height:1rem;
    >div{
        transition: all 1s ease;
        width:${props => `${props.barSize}%`};
        height:100%;
        background-color: ${props => props.theme.colors.third};
        border-radius: 100rem; 
    }
    &::after{
        content: '${props => props.barSize}%';
        position: relative;
        left:20.5rem;
        bottom: 1rem;
    }   
`

