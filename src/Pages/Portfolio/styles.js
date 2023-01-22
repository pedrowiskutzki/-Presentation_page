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
    height: 250vh;
    }
`;

export const View = styled.div`
display: flex;
flex-direction: row;
align-self: center;
align-items: center;

justify-content:center;
margin-top: 20px;
max-width: 768px;
 width: 85%;
  height: 50%;
  color: white;
  background-color: #121214;
  border: 1px solid purple;
  filter: drop-shadow(0px 0px 12px purple) ;
  border-radius: 8px;
  padding: 20px 20px;
   @media screen and (max-width: 768px) {
    flex-direction: column;
    }
 
    p{
        text-align: center;
    }
    img{
        width: 200px;
         height: auto;
         margin: auto;
         border-radius: 8px;
         
    }

`;

export const Card = styled.div `
background-color: #262629;
width: 300px;
height: 250px;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 20px;
margin: 30px;
filter: drop-shadow(0px 0px 4px #FF00FC) ;
        

:hover{
    border: 1px solid #FF00FC;
  filter: drop-shadow(0px 0px 40px #FF00FC) ;
        
        }

img{    
        width: 299px;
         height: 150px;
         margin: auto;
         border-radius: 8px;
         
    }
h3{
    text-align: center;
}
p{
    text-align: center;
}
 button {
 margin-top: 0.3rem;
 margin-bottom: 0.4rem;
 padding: 0.6em 1.4em;
 border: 2px solid #F6F6F6;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #F6F6F6;
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #F6F6F6;
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 155%;
}

button:hover {
 color: #111;
}
`;

export const Content = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;

@media screen and (max-width: 768px) {
    flex-direction: column;
    }

`;

export const MinCard = styled.div `
background-color: #262629;
display: flex;
align-items: center;
flex-direction: column;
width: 280px;
height: 230px;
border-radius: 20px;
margin: 30px;
filter: drop-shadow(0px 0px 4px #FF00FC) ;

:hover{
    border: 1px solid #FF00FC;
  filter: drop-shadow(0px 0px 40px #FF00FC) ;
        
        }

img{
        width: 280px;
         height: 130px;
         margin: auto;
         border-radius: 8px;
         
    }
    h3{
    text-align: center;
}
p{
    text-align: center;
}
button {
 margin-top: 0.3rem;
 margin-bottom: 0.4rem;
 padding: 0.6em 1.4em;
 border: 2px solid #F6F6F6;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #F6F6F6;
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #F6F6F6;
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 155%;
}

button:hover {
 color: #111;
}

`;
