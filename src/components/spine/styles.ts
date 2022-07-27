import styled from 'styled-components';
import bgspine from '../../styles/images/bgspine.png'
import { bookCoverBorder, mainColor, mediaWidth, spineWidth, spineWidthMedia } from '../../styles/variables';

export const Bookspine = styled.section`
    width: ${spineWidth};
    height: calc(100vh - ${bookCoverBorder} -${bookCoverBorder});
    background-image: url(${bgspine});
    background-size: ${spineWidth};
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(max-width: ${mediaWidth}){
        width: ${spineWidthMedia};
        background-size: ${spineWidthMedia};
    }
    &::after{
        position: absolute;
        left: 0;
        bottom: 0;
        width: ${spineWidth};
        height: calc(100vh - ${bookCoverBorder} -${bookCoverBorder});
        z-index: -1;
        background-color: ${props => props.theme.colors.primary};
        content: '';
        transition: all 1s ease;
        @media(max-width: ${mediaWidth}){
        width: ${spineWidthMedia}
        }
    };
`
export const SpineBlock = styled.div`
    margin-top: 5rem;
    width: ${spineWidth};
    height: max-content;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 1s ease;
    @media(max-width: ${mediaWidth}){
        width: ${spineWidthMedia}
    }
`
export const SpineBlockContent = styled.div`
    padding: 1rem;
    width: 80%;
    height: max-content;
    min-height: 8rem;
    border: 0.5rem solid ${props => props.theme.colors.third};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: ${props => props.theme.colors.third};
    font-weight: 700;
    font-size: 1rem;
    transition: all 1s ease;
    @media(max-width: ${mediaWidth}){
        min-height: 5rem;
        font-size: 0.75rem;
        padding: 0.5rem;
    }
    >span{
        text-align: center;
        >a{
            text-decoration: underline;
            color: ${mainColor};
        };
    };
`
export const ThemeButton = styled.button<{ themeName: string }>`
    position: relative;
    margin-bottom: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: ${mediaWidth}){
        width: 2.1rem;
        height: 2.1rem;
        margin-bottom: 1.5rem;
    }
    &:hover{
        cursor: pointer;
        border-radius: 50%;
        border-style: solid;
        border-color: whitesmoke;
        &::after{
            position: absolute;
            top:3rem;
            content: '${props => props.themeName}';
            color: ${mainColor};
            font-size: 1rem;
            @media(max-width: ${mediaWidth}){
                top:2rem;
                font-size:0.75rem;
            }
        };
    };
    >img{
        height: 3rem;
        background-color: transparent;
        @media(max-width: ${mediaWidth}){
            height: 2rem;
        }
    };

`