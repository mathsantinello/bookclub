import  styled from 'styled-components';

export const UsercardStyle = styled.div`
    position: absolute;
    right: 20%;
    top: 30%;
    padding: 1rem;
    width: 40rem;
    height: 25rem;
    border: solid 0.5rem ${props=>props.theme.colors.third};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.theme.colors.fourth};
    color: ${props=>props.theme.colors.third};
    >button{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 2rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        color: ${props=>props.theme.colors.third};
        &:hover{
            cursor: pointer;
        }
    }
    >img{
        height: 15rem;
        border: solid 0.5rem ${props=>props.theme.colors.third};
        border-radius: 50%;
    }
    >ul{
        list-style: none;
        font-size: 1.5rem;
    }
`