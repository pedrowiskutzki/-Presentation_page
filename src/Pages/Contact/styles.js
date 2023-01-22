import styled from "styled-components";


export const Container = styled.div `
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #0d0d0f;
`;

export const View = styled.div`
display: flex;
flex-direction: column;
align-self: center;
align-items: center;
justify-content:center;
max-width: 768px;
 width: 45rem;
  height:20rem;
  color: white;
  background-color: #121214;
  border: 1px solid purple;
  filter: drop-shadow(0px 0px 12px purple) ;
  border-radius: 8px;
  padding: 20px 20px;
 
    h1{
        margin-bottom: 6px;
    }
    p{
        text-align: center;
    }
 
    .form{
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input{
  margin-bottom: 14px;
  background-color: #EBDFD3;
  height: 34px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
  :hover, :focus{
    filter: drop-shadow(0px 0px 9px purple) ;
    background-color: #ffffff;
  }
}
.textarea{
  margin-bottom: 14px;
  border-radius: 4px;
  background-color: #EBDFD3;
  border: 0;
  padding: 8px;
  height: 94px;
  resize: none;
  :hover, :focus{
    filter: drop-shadow(0px 0px 9px purple) ;
    background-color: #ffffff;
  }
}

.button{
display: flex;
align-self: center;
align-items: center;
justify-content:center;
  height: 34px;
  width: 40%;
  border-radius: 50px;
  filter: drop-shadow(0px 0px 5px purple) ;
  border: 0;
  cursor: pointer;
  background-color: #F50074;
  font-size: 18px;
  transition: background-color, transform 0.8s;

  :hover, :focus{
    filter: drop-shadow(0px 0px 15px purple) ;
    background-color: #FF42A0;
  }
}
`;