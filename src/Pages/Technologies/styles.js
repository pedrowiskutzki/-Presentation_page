import styled from "styled-components";


export const Container = styled.div `
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0d0d0f;
color:#ffff;

@media screen and (max-width: 768px) {
    height: 130vh;
    }
`;

export const Card = styled.div `
width: 300px;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border: none;
margin: 10px;
filter: drop-shadow(0px 0px 2px #FF00FC) ;

@media screen and (max-width: 768px) {
    width: 160px;
    height: 160px;
    margin: 10px;
    }
        
:hover{
  filter: drop-shadow(0px 0px 20px #FF00FC) ;       
        }

img{
        position: absolute;
        width: 240px;
         height: auto;
         margin: auto;
         border-radius: 8px;

     @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
        width: 210px;
         height: auto;

    }
    }
.DiJava{
    :hover{
         color: green;
         }
}

`;

export const Content = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap:wrap ;


`;

