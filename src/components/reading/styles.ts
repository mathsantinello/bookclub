import styled from 'styled-components';


export const Block = styled.div`
    font-family: 'Jura', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >h1{
        font-size: larger;
    }
    >h2{
        font-size: large;
    }
    >h3{
        position: relative;
        font-size: 1rem;
        background-color: #FFFDFA;
        background-size: cover;
        color: #404040;
        padding-left:3rem;
        height: 20rem;
        width: 10rem;
        transform-style: preserve-3d;
        perspective: 500px;
        &:hover{
            >img{
                transform: rotateY(-75deg);
            }
            
        }
        >span{
            text-justify:distribute-all-lines
        }
        >img{
        position: relative;
        bottom:14rem;
        right: 3rem;
        height: 20rem;
        width: 13rem;
        background-size: cover;
        transform-origin: 0 50%;
        transition: all 0.5s ease;
        }
    }
    
    
`