import styled from 'styled-components';
import { bookCoverBorder, mediaWidth, spineWidth, spineWidthMedia } from './variables';

export const Container = styled.main`
    position: relative;
    display: flex;
    flex-direction: row;
    height: auto;
    min-height: 100vh;
    width: 100%;
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
    >section{
        height: auto;
        min-height: 100vh;
    }
`
