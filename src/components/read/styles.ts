import styled from 'styled-components';

export const Triangle = styled.div`
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
`