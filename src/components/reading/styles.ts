import styled from 'styled-components';
import bgscroll from '../../styles/images/bgscroll.jpg';
import bgvintage from '../../styles/images/vintageborder.png';

export const Block = styled.div`
    font-family: 'Jura', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: wheat ;
    font-weight: 900;
    gap: 0.2rem;
    background-color:transparent;
    background-image: url(${bgvintage});
    background-repeat: no-repeat;
    background-size: 50rem calc(100vh - 2.5rem);
    width: 50rem;
    height: calc(100vh - 2.5rem);
    >h1{
        font-size: 3rem;
        margin: 0;
    }
    >h2{
        font-size: 2rem;
        text-decoration: underline;
    }
    >h3{
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
        >div{
            margin-top: 1rem;
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
    background-color: wheat;
    height:1rem;
    >div{
        width:${props => `${props.barSize}%`};
        height:100%;
        background-color: #AB8D59;
        border-radius: 100rem; 
    }
    &::after{
        content: '${props => props.barSize}%';
        position: relative;
        left:20.5rem;
        bottom: 1rem;
    }   
`