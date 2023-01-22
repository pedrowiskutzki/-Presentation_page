import React from 'react';
import { Card, Container, Content, MinCard, View } from './styles';
import { DiJava, DiJsBadge, DiReact, DiPostgresql, DiGit } from "react-icons/di";
import { SiSpring, SiTypescript, SiCplusplus } from "react-icons/si";

export default function Technologies() {
    return (
        <Container className='technologies' id='technologies'>
            <h1>TECHNOLOGIES</h1>
            <Content>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <DiReact className="DiReact" size={120} color='#46B1EB' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <DiJsBadge className="DiJsBadge" size={90} color='yellow' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <DiJava className="DiJava" size={120} color='white' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <SiTypescript className="SiTypescript" size={90} color='#46B1EB' />
                </Card>

            
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <DiGit className="DiGit" size={120} color='#F58000' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <SiCplusplus className="SiCplusplus" size={100} color='#F58000' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <SiSpring className="SiSpring" size={90} color='green' />
                </Card>
                <Card>
                    <img src={require('../../images/Moldura.png')} />
                    <DiPostgresql className="DiPostgresql" size={110} color='#46B1EB' />
                </Card>

            </Content>
        </Container>
    );
}