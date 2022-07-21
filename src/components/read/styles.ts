import styled from 'styled-components';



export const Bookmark = styled.div<{ isOpen: boolean, imgtext: string }>`
    position: absolute;
    background-color: #AC0608;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #EBA11C #EBA11C  #EBA11C;
    right:30px;
    top:0px;
    width: 200px;
    height: ${props => props.isOpen ? '600px' : '100px'};
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    font-family: 'Jura', sans-serif;
    >span{
        color: wheat;
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    >div{
        display: ${props => props.isOpen ? 'flex' : 'none'};
        flex-direction: column;
        align-items: center;
        row-gap: 3rem;
        height: 100%;
        width:200px;
        overflow-y: scroll;
        >div{
            position: relative;
            >img{
            width: 7rem;
            height: 10rem;
            transform: ${props => props.isOpen ? 'none' : 'none'};
            transition: all 0.2s ease;
            }
            >span{
                display: none;
                position: absolute;
                text-align: center;
                width: 7rem;
                bottom:50%;
                right:0px;
            }
            &:hover{
                >img{
                    opacity: 0.3;
                    cursor: pointer; 
                }
                >span{
                    display: block;
                    color: #FFFFFF;
                    text-shadow: #000000 1px;
                    font-weight: 600;
                    font-family: 'Jura', sans-serif;
                }   
            }    
        }    
    }
    >button{
        background-color: transparent;
        border: none;
        height: 40px;
        width: 40px;
        transition: all 0.5s ease;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'none'};
        &:hover{
            cursor: pointer;
        }
    }
`