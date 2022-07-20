import styled from 'styled-components';
import bgspine from '../../styles/images/bgspine.png'


export const Bookspine = styled.section`
    width: 10rem;
    height: max-content;
    min-height: 100vh;
    background-image: url(${bgspine});
    background-size: 10rem 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    &::after{
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        z-index: -1;
        background-color: #2B5A4A;
        width: 10rem;
        height: 100vh;
    }  
`
export const SpineBlock = styled.div`
    margin-top: 5rem;
    height: max-content;
    width: 10rem;
    background-color: #2B5A4A;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpineBlockContent = styled.div`
    height: max-content;
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 8rem;
    border: 0.5rem solid #AB8D59;
    color: #AB8D59;
    font-weight: 700;
    padding: 1rem;
    >span{
        text-align: center;
        >a{
            text-decoration: underline;
            color: wheat;
        }
    }
  
`
export const ThemeButton = styled.button<{ themeName: string }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    margin-bottom: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    &:hover{
        cursor: pointer;
        border-radius: 50%;
        border-style: solid;
        border-color: whitesmoke;
        &::after{
            position: absolute;
            top:3rem;
            content: '${props => props.themeName}';
            color: wheat;
            font-size: 16px;
        }
    }
    >img{
        background-color: transparent;
        height: 3rem;
    }
`