import React from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

  const [hamburguer, setHamburguer] = useState(false);
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  
  const toggleHamburguer = () => {
    setHamburguer(!hamburguer);
  }
  const closeeHamburguer = () => {
    setHamburguer(false);

  }

  return (
    <>
      <Nav>
        <NavLink onClick={() => closeeHamburguer()} hamburguer={hamburguer} to='/'>
        <img src={require('../../images/Logoteste.png')} width="75x" heigth="75px" alt='Logo - Pedro Wiskutzki Direciona para Home"'/>
        </NavLink>
        <Bars onClick={() => toggleHamburguer()} hamburguer={hamburguer}/>
        <NavMenu hamburguer={hamburguer}>
          <NavLink id='firstLink' onClick={() => closeeHamburguer()} href='#home'>Home</NavLink>
          <NavLink onClick={() => closeeHamburguer()} href='#technologies'>Technologies</NavLink>
          <NavLink onClick={() => closeeHamburguer()} href='#portfolio'>Portfolio</NavLink>
          <NavLink onClick={() => closeeHamburguer()} href='#contact'>Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
