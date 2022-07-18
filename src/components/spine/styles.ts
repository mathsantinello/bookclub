import styled from 'styled-components';

export const Bookspine = styled.section`
    width: 10rem;
    height: 100vh;
    background-color: #2B5A4A;
    border-style: solid;
    border-width: 5px;
    border-color: #AB8D59;
    display: flex;
    justify-content: center;
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:50%;
        margin-top: 50px;
        width: 70px;
        height: 70px;
        background-color: white; 
    }
`