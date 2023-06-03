import { List } from "phosphor-react";
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  background: none;
  height: 70px;
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


  export const Button = styled.button`
  margin-right: 24px;
 --primary: hsl(45, 100%, 30%); /* Amarelo escuro */
  --shadow-primary: hsl(270, 100%, 30%); /* Roxo escuro */
  --primary-hue: 0;
  --primary-lightness: 50;
  --color: hsl(0, 0%, 100%);
  --font-size: 20px; /* Tamanho do texto diminuído para 20px */
  --shadow-primary-hue: 180;
  --label-size: 9px;
  --shadow-secondary-hue: 60;
  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
  font-family: 'Cyber', sans-serif;
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 150px; /* Largura mínima diminuída para 150px */
  height: 40px; /* Altura diminuída para 40px */
  line-height: 40px; /* Line-height ajustado para 40px */
  transition: background 0.2s;
  
  :hover {
    --primary: hsl(45, 100%, 40%); /* Amarelo mais claro */
  }
  
  :active {
    --primary: hsl(45, 100%, 20%); /* Amarelo mais escuro */
  }
  
  :after,
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: var(--clip);
    z-index: -1;
  }
  
  :before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
  }
  
  :after {
    background: var(--primary);
  }
  
  .cybr-btn__glitch {
    position: absolute;
    top: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: calc(var(--border) * -1);
    bottom: calc(var(--border) * -1);
    background: var(--shadow-primary);
    text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
    clip-path: var(--clip);
    animation: glitch 2s infinite;
    display: none;
  }
  
  :hover .cybr-btn__glitch {
    display: block;
  }
  
  .cybr-btn__glitch:before {
    content: '';
    position: absolute;
    top: calc(var(--border) * 1);
    right: calc(var(--border) * 1);
    bottom: calc(var(--border) * 1);
    left: calc(var(--border) * 1);
    clip-path: var(--clip);
    background: var(--primary);
    z-index: -1;
  }
  
  .cybr-btn__tag {
    position: absolute;
    padding: 1px 4px;
    letter-spacing: 1px;
    line-height: 1;
    bottom: -5%;
    right: 5%;
    font-weight: normal;
    color: white;
    font-size: 5px;
  }
  
@keyframes glitch {
  0% {
    clip-path: var(--clip-one);
  }
  2%, 8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    clip-path: var(--clip-four);
  }
}

:nth-of-type(2) {
  --primary-hue: 260;
}
`;


