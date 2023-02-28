import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Fade, Slide } from "react-reveal";
import { useState, useEffect } from "react";
import './css/contact.css';
import Footer from './Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/4b1bfb70-0859-11ed-be50-e78da9ee852d";

const Button = styled.button`
display: inline-block;
font-size: .8em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #45337D;
border-radius: 2rem;
display: block;
background: black;
color: white;
`;
const Contact = () => {
    /* START MEDIA QUERIES */
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 924px)").matches
    )
    
    useEffect(() => {
    window
    .matchMedia("(min-width: 924px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);
    /* END MEDIA QUERIES */

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
    setTimeout(() => {
        setSubmitted(true);
    }, 100);
    };

    if (submitted) {
    return (
        <>
            <div class="container">
                <h2>Muchas gracias!</h2>
                <div>Estaremos en contacto pronto.</div>
        <Button className="nav-button">
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/services">
                Regresar
            </NavLink>
        </Button>
            </div>
        </>
    );
    }


    return (
        <div id='home'>
        {matches ? (
            <div class="container">                
                <Fade bottom duration={1000}>
                    <h1 className="white--header">
                    <span>Contáctenos y obtenga su evaluación y presupuesto sin cargo hoy mismo!</span>
                    </h1>
                </Fade>
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="form-container"
                >
                    <h2 className="FormElement">
                        <span className='FormText' >
                        Por favor diganos su 
                        </span>
                        <span  className="FormInput--container">
                            <input className="FormElement" type="text" placeholder="nombre" name="name" required />
                        </span>
                    </h2>
                    <h2>
                        <span className="FormText">
                        y tambien su  
                        </span>
                        <span  className="FormInput--container">
                            <input type="email" placeholder="email" name="email" required />
                        </span>
                    </h2>
                    <h2>
                        <span className="FormText">
                            y por último 
                        </span>
                        <span className="FormInput--container">
                            <input type="text" className="FormInput" placeholder="diganos como podemos asistirle" name="message" required />
                        </span>
                    </h2>
                    <h2 className="FormText">
                    y le responderemos a la brevedad!
                    </h2>
                    <button className="FormText--button" type="submit" >
                        Enviar
                    </button>
                    <div class="loader">
                        <div class="check">
                            <span class="check-one"></span>
                            <span class="check-two"></span>
                        </div>
                    </div>
                </form>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        ) : (
            <div class="container-s">
                <Fade bottom duration={1000}>
                    <h1 className="white--header mobile">
                        <span>Contáctenos y obtenga su evaluación y presupuesto sin cargo hoy mismo!</span>
                    </h1>
                </Fade>
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="form-container-s"
                >
                    <h2>
                        <span className='FormText' >
                        Por favor diganos su  
                        </span>
                        <span>
                            <input className="FormInput inputi" type="text" placeholder="nombre" name="name" required />
                        </span>
                    </h2>
                    <h2>
                        <div className="FormText">
                        y tambien su  
                        </div>
                        <div>
                            <input type="email" placeholder=" email" name="email" className="FormInput" required />
                        </div>
                    </h2>
                    <h2>
                        <span className="FormText">
                        y por último
                        </span>
                        <span>
                            <input className="FormInput inputiii" type="text" placeholder="diganos como podemos asistirle" name="message" required/>
                        </span>
                    </h2>
                    <h2 className="FormText">
                    y le responderemos a la brevedad!
                    </h2>
                    <button className="FormText--button" type="submit" >
                    Enviar
                    </button>
                    <div class="loader">
                        <div class="check">
                            <span class="check-one"></span>
                            <span class="check-two"></span>
                        </div>
                    </div>
                </form>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        )}
    </div>
    );
};

export default Contact;