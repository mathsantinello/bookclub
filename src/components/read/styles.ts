import styled from 'styled-components';



export const Bookmark = styled.div<{ isOpen: boolean }>`
    position: absolute;
    background-color: #AC0608;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #EBA11C #EBA11C  #EBA11C;
    right:30px;
    top:0px;
    width: 200px;
    height: ${props => props.isOpen ? '800px' : '100px'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    >button{
        background-color: transparent;
        border: none;
        height: 40px;
        width: 40px;
        align-self: flex-end;
        transition: all 0.5s ease;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'none'};
        &:hover{
            cursor: pointer;
        }
    }
`
/* export const Triangle = styled.div`
    position: absolute;
    right:30px;
    top:10px;
    width: 0px; 
    height: 0px; 
    margin: 100px auto;
    border-top: 60px solid red;
    border-right: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 60px solid transparent;
`
export const TriangleBorder = styled.div`
    position: absolute;
    width: 120px;
    right:30px;
    top:10px;
    margin-top: 100px;
    
    >div{
        width: 120px;
        height: 5px;
        background: red;
      
        &::before{
            content: " ";
            display: block;
            width: 100px;
            height: 5px;
            background: black;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }
        &::after{
            content: " ";
            display: block;
            width: 100px;
            height: 5px;
            background: black;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
` */