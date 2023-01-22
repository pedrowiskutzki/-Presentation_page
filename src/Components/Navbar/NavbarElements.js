import styled from 'styled-components';
import { List } from "phosphor-react";
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  background: #141414;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled.a`
  color: #ffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;


  :hover, :focus{
    filter: drop-shadow(0px 0px 8px #FD4FF8) ;
    color: #FF49D4;
  }
  
  &.active {
    color: #B500AF;
    
  }

 :first-child{
  opacity: 1;
 }

  @media screen and (max-width: 768px) {

    img{
      transition: none;
      display: block;
      
      width:  ${(props) => props.hamburguer === true ? "150px" : "75px"};
      height: auto;

      position:  ${(props) => props.hamburguer === true ? "fixed" : "relative"};;
      top: ${(props) => props.hamburguer === true ? "1rem" : "none"};
      left: ${(props) => props.hamburguer === true ? "50%" : "none"};
      transform:  ${(props) => props.hamburguer === true ? "translate(-48%, 100%)" : "none"};
     
      
      filter: ${(props) => props.hamburguer === true ? "drop-shadow(0px 0px 12px var(--cor-primaria))" : "none"};
      font-size: 1.8rem;
      z-index: 12;
    }
  }
`;

export const Bars = styled(List)`
  display: none;
  color: #ffff;
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: ${(props) => props.hamburguer === true ? "fixed" : "relative"};
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 12;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    min-width: 100vw;
    margin: none;
    gap: 2rem;
    
    position: fixed;
    display:  ${(props) => props.hamburguer === true ? "flex" : "none"};
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;

    background-color: #1F1F24; 
    font-size: 2rem;

    z-index: 11;
  }
  #firstLink{
  :hover{
    opacity: 0.8;
  }
  :focus{
    opacity: 1;
  }
 }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: ${(props) => props.hamburguer === true ? "flex" : "none"};
    z-index: 14;
    position: fixed;
    bottom: 5rem;
    left: 50% ;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
  }
`;

export const NavBtnLink = styled(Link)`
  cursor: pointer;
  color: var(--cor-secundaria);
  outline: none;
  border: none;

  transition: all 0.2s ease-in-out;
  margin-left: 24px;
  text-decoration: none;
  
  :first-child{
    display:  "flex";
    padding: 0.750rem 1.5rem;
    border-radius: 4px;
    background: var(--cor-complementar-1);

    &:hover, :focus {
      background: var(--cor-secundaria);
      color: var(--background-footer);
    }
  }
  :last-child{
    display:  "flex" ;
    background-color: var(--background-footer);
    &:hover, :focus {
      color: var(--cor-primaria);
    }

    i{
      background-color: red;
    }
  }

  

`;
