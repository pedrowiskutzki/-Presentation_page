import  emailjs  from '@emailjs/browser';
import React, { useState } from 'react';
import { Container, View } from './styles';

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }
        const templateParams ={
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send("service_0p4d1b7", "template_ywoxgwd", templateParams, "C-cEvdrPHUX8CZJjr").then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log("ERRO", error)
        })
        
    }

    return (
        <section  className='contact' id='contact'>
        <Container>
            <View>
                <h1>Contact</h1>
                <form className="form" onSubmit={sendEmail}>
                <input
                    className="input"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className="input"
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    className="textarea"
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className="button" type="submit" value="Enviar" />
                </form>
            </View>

        </Container>
        </section>
    );
}