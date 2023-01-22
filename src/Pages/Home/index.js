import React, { useState } from 'react';
import { Container, Skills, View, ViewContact } from './styles';
import Contact from "../Contact";
import cyberpunk from '../../Assets/cyberpunk.mp4'
import Portfolio from '../Portfolio';
import Technologies from '../Technologies';
import Navbar from '../../Components/Navbar';
import { DiReact } from 'react-icons/di';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Home() {

    const [over, setOver] = useState(false);

    return (
        <>
        <Navbar/>
        <Container className='home' id='home'>
            <video src={cyberpunk} autoPlay loop muted />
            <View onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                <div>
                    <img src={over ? require('../../images/perfilMeta.jpeg') : require('../../images/perfil.png')}
                    />
                    <h2>Pedro Wiskutzki</h2>
                </div>
                <div>
                    <h3>About Me</h3>
                    <p>Hello, my name is Pedro I'm 24 years old I'm a Full Stack developer in constant learning and I'm a fan of nerd culture.
                    </p>
                </div>         
         </View>
         <ViewContact>
        <a aria-label="Linkedln"  href="https://www.linkedin.com/in/pedro-wiskutzki/" >
         <AiFillLinkedin className="AiFillLinkedin" size={60} color='#969DA8' />
         </a>
         <a aria-label="GitHub"  href="https://github.com/pedrowiskutzki" >
         <AiFillGithub className="AiFillGithub" size={60} color='#969DA8' />
         </a>
         <a aria-label="Instagram"  href="https://www.instagram.com/pedrowiskutzki/" >
         <AiOutlineInstagram className="AiOutlineInstagram" size={60} color='#969DA8' />
         </a>
         </ViewContact>
         <Technologies/>
         <Portfolio />
         <Contact/>
        
        </Container>
        </>
    );
}