import styled from 'styled-components';

const size = '40px'
export const Container = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
`

export const Bookcover = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc( 100vw - 10rem);
    height: 100vh;
    $mizuColor: grey;
    $size: 40px;
    background-color: #2B5A4A;
    background-image: 
        radial-gradient(
        circle at 100% 150%, 
        #4B6B56 25%, 
        #2B5A4A 25%, 
        #2B5A4A 29%, 
        #4B6B56 29%, 
        #4B6B56 36%, 
        #2B5A4A 36%, 
        #2B5A4A 40%, 
        transparent 40%, 
        transparent
        ),
        radial-gradient(
        circle at 0 150%, 
        #4B6B56 25%, 
        #2B5A4A 25%, 
        #2B5A4A 29%, 
        #4B6B56 29%, 
        #4B6B56 36%, 
        #2B5A4A 36%, 
        #2B5A4A 40%, 
        transparent 40%, 
        transparent
        ),
        radial-gradient(
        circle at 50%  100%, 
        #2B5A4A 10%, 
        #4B6B56 10%, 
        #4B6B56 23%, 
        #2B5A4A 23%, 
        #2B5A4A 30%, 
        #4B6B56 30%, 
        #4B6B56 43%, 
        #2B5A4A 43%, 
        #2B5A4A 50%, 
        #4B6B56 50%, 
        #4B6B56 63%, 
        #2B5A4A 63%, 
        #2B5A4A 70%, 
        transparent 70%, 
        transparent
        ),
        radial-gradient(
        circle at 100% 50%, 
        #2B5A4A 5%, 
        #4B6B56 5%, 
        #4B6B56 15%, 
        #2B5A4A 15%, 
        #2B5A4A 20%, 
        #4B6B56 20%, 
        #4B6B56 30%, 
        #2B5A4A 30%, 
        #2B5A4A 35%, 
        #4B6B56 35%, 
        #4B6B56 45%, 
        #2B5A4A 45%, 
        #2B5A4A 50%, 
        transparent 50%, 
        transparent
        ),
        radial-gradient(
        circle at 0 50%, 
        #2B5A4A 5%, 
        #4B6B56 5%, 
        #4B6B56 15%, 
        #2B5A4A 15%, 
        #2B5A4A 20%, 
        #4B6B56 20%, 
        #4B6B56 30%, 
        #2B5A4A 30%, 
        #2B5A4A 35%, 
        #4B6B56 35%, 
        #4B6B56 45%, 
        #2B5A4A 45%, 
        #2B5A4A 50%, 
        transparent 50%, 
        transparent
        );
    
    background-size: 200px 100px;
`

