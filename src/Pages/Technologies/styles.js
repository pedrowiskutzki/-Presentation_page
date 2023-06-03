import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0d0d0f;
  color: #ffff;

  @media screen and (max-width: 768px) {
    height: 130vh;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  margin: 10px;
  filter: drop-shadow(0px 0px 2px #FF00FC);

  :hover {
    filter: drop-shadow(0px 0px 20px #FF00FC);
  }

  img {
    width: 150px;
    height: 150px;
  }

  h3 {
    margin-top: 10px;
    font-size: 20px;
    color: #FF00FC;
  }

  p {
    font-size: 14px;
    text-align: center;
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

export const TitleTechnologies = styled.div `
    display: block;
    margin: auto;
    position: relative;  
    margin-bottom: 50px;

    ::after{
    content:'';
    display: block;
    width: 110%;
    border-left: 10px solid rgb(221, 221, 19);
    border-right: 10px solid rgb(221, 221, 19);
    border-top: 10px solid transparent;
    border-bottom: 10px solid rgb(221, 221, 19);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: absolute;
    bottom:-15px;
    left: -27.5px;
    filter: drop-shadow(0 -8px 8px rgba(221, 221, 19, 0.3));
    }
    h1{
        font-size: 3em;
        font-family: monospace, 'Courier New', Courier;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: rgb(221, 221, 19);
    }
`;