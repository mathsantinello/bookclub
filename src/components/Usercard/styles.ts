import  styled from 'styled-components';
import { mediaWidth, spineWidth, spineWidthMedia, userCardHeight, userCardHeightMobile, userCardWidth, userCardWidthMobile } from '../../styles/variables';

export const UsercardStyle = styled.div`
    position: absolute;
    right: calc(50% - (${userCardWidth})/2 - (${spineWidth})/2);
    top: calc(50% - (${userCardHeight})/2);
    padding: 1rem;
    width: ${userCardWidth};
    height: ${userCardHeight};
    border: solid 0.5rem ${props=>props.theme.colors.third};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.theme.colors.fourth};
    color: ${props=>props.theme.colors.third};
    @media(max-width: ${mediaWidth}){
        right: calc(50% - (${userCardWidthMobile})/2 - (${spineWidthMedia})/2);
        top: calc(50% - (${userCardHeightMobile})/2);
        width: ${userCardWidthMobile};
        height: ${userCardHeightMobile};
    }
    >button{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 2rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        color: ${props=>props.theme.colors.third};
        @media(max-width: ${mediaWidth}){
            width: 1rem;
            height: 1rem;
        }
        &:hover{
            cursor: pointer;
        }
    }
    >img{
        height: 15rem;
        border: solid 0.5rem ${props=>props.theme.colors.third};
        border-radius: 50%;
        @media(max-width: ${mediaWidth}){
            height: 7.5rem;
        }
    }
    >ul{
        list-style: none;
        font-size: 1.5rem;
        @media(max-width: ${mediaWidth}){
            font-size: 0.75rem;
        }
    }
`