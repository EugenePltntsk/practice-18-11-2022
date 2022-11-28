import styled from "styled-components"

export const ModalDiv = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
opacity: ${props => props.active ? "1" : "0"};
transition: 400ms linear all;
pointer-events: ${props => props.active ? "auto" : "none"};
z-index: 1111;


/* &.active {
    opacity: 1;
    pointer-events: auto;
} */



`

export const ModalContentDiv = styled.div`
padding: 20px;
border-radius: 12px;
background-color: white;
width: 300px;
height: 300px;
overflow: auto;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;



`

