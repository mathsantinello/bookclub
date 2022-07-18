import styled from 'styled-components';


export const Block = styled.div`
    font-family: 'Jura', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #AB8D59 ;
    >h1{
        font-size: 4rem;
        margin: 0;
    }
    >h2{
        font-size: 3rem;
    }
    >h3{
        position: relative;
        font-size: 1.5rem;
        background-color: #FFFDFA;
        background-size: cover;
        color: #404040;
        padding-left:3rem;
        height: 30rem;
        width: 16.5rem;
        transform-style: preserve-3d;
        perspective: 750px;
        &:hover{
            >img{
                transform: rotateY(-75deg);
            }  
        }
        >span{
            text-justify:distribute-all-lines
        }
        >img{
        position: absolute;
        bottom:0rem;
        right: 0rem;
        height: 30rem;
        width: 19.5rem;
        background-size: cover;
        transform-origin: 0 50%;
        transition: all 0.5s ease;
        }
    }
    
    
`