import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  video {
    width: 100vw;
    min-height: 50rem;
    height: 100vh;
    object-fit: cover;
  }
`;

export const View = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
  max-width: 768px;
  width: 75%;
  height: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid purple;
  filter: drop-shadow(0px 0px 12px purple);
  border-radius: 8px;
  padding: 20px 20px;

  :hover {
    border: 3px solid #FF00FC;
    filter: drop-shadow(0px 0px 50px #FF00FC);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin-top: 8rem;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 15px;
  }

  img {
    width: 200px;
    height: auto;
    margin: 10px;
    border-radius: 50%;
  }
`;

export const ViewContact = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12rem;
  max-width: 768px;
  width: 90px;
  height: 280px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid purple;
  filter: drop-shadow(0px 0px 12px purple);
  border-radius: 8px;
  padding: 20px 20px;

  :hover {
    border: 3px solid red;
    filter: drop-shadow(0px 0px 50px red);
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-self: center;
    justify-content: space-evenly;
    margin-top: 42rem;
    width: 280px;
    height: 90px;
  }
`;