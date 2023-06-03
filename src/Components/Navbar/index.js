import React, { useState } from 'react';
import {
  Bars,
  Button,
  Nav,
  NavLink,
  NavMenu
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
        <NavLink onClick={() => closeeHamburguer()} hamburguer={hamburguer} href='#home' to='/'>
        <img src={require('../../images/Logoteste.png')} width="75x" heigth="75px" alt='Logo - Pedro Wiskutzki Direciona para Home"'/>
        </NavLink>
        <Bars onClick={() => toggleHamburguer()} hamburguer={hamburguer}/>
        <NavMenu hamburguer={hamburguer}>
        
        <Button class="cybr-btn">
        <NavLink id='firstLink' onClick={() => closeeHamburguer()} href='#technologies'>Technologies</NavLink>
        <span aria-hidden class="cybr-btn__glitch">Technologies_</span>
        <span aria-hidden class="cybr-btn__tag">R25</span>  
        </Button>

        <Button class="cybr-btn">
        <NavLink onClick={() => closeeHamburguer()} href='#portfolio'>Portfolio</NavLink>      
        <span aria-hidden class="cybr-btn__glitch">Portfolio</span>
        <span aria-hidden class="cybr-btn__tag">R24</span>  
        </Button>

        <Button class="cybr-btn">
        <NavLink onClick={() => closeeHamburguer()} href='#contact'>Contact</NavLink>      
        <span aria-hidden class="cybr-btn__glitch">Contact</span>
        <span aria-hidden class="cybr-btn__tag">R23</span>  
        </Button>

        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
