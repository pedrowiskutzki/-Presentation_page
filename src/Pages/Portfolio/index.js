import React from 'react';
import { Card, Container, Content, MinCard, TitlePortifolio } from './styles';

export default function Portfolio() {
    return (
        <Container className='portfolio' id='portfolio'>
            <TitlePortifolio>
            <h1>PORTFOLIO</h1>
            </TitlePortifolio>
            <Content>
                <Card>
                    <img src={require('../../images/siteOwallLine.png')} />
                    <h3>Ecommerce Site</h3>
                    <p>React </p>
                    <span>
                    <a href="https://github.com/pedrowiskutzki/ecommerce-site"><button>Front</button></a>
                    <a href="https://github.com/pedrowiskutzki/ecommerce_site_consumption_Api"><button>Back</button></a>
                    </span>
                </Card>
                <Card>
                    <img src={require('../../images/logoAppMobile.png')} />
                    <h3>Ecommerce Games App</h3>
                    <p>React Native </p>
                    <span>
                    <a href="https://github.com/pedrowiskutzki/projeto-final-react-native"><button>Front</button></a>
                    <a href="https://github.com/pedrowiskutzki/Api_for_Project_Mobile"><button>Back</button></a>
                    </span>
                </Card>
                <Card>
                    <img src={require('../../images/aHome.png')} />
                    <h3>City of Website </h3>
                    <p>React </p>
                    <span>
                    <a href="https://github.com/pedrowiskutzki/-2022_2_PMP_OndeTemEsporte_front"><button>Front</button></a>
                    <a href="https://github.com/pedrowiskutzki/2022_2_PMP_OndeTemEsporte_back"><button>Back</button></a>
                    </span>
                </Card>
            </Content>
            <Content>
             <MinCard>
                    <img src={require('../../images/site80.png')} />
                    <h3>80's Website</h3>
                    <p>React </p>
                    <a href="https://github.com/pedrowiskutzki/Site-anos-80"><button>Front</button></a>
                </MinCard>
             <MinCard>
                    <img src={require('../../images/Pokemon.jpeg')} />
                    <h3>Clone Pokemon Go</h3>
                    <p>React </p>
                    <a href="https://github.com/pedrowiskutzki/Mobile_ReactNative_PokemonGO"><button>Front</button></a>
                </MinCard>
             <MinCard>
                    <img src={require('../../images/ToDoList.png')} />
                    <h3>To Do List</h3>
                    <p>React </p>
                    <a href="https://github.com/pedrowiskutzki/App-de-Tarefas-"><button>Front</button></a>
                </MinCard>
            </Content>

        </Container>
    );
}