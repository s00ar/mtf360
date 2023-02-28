import "./css/work.css";
import React from "react";
import { Slide } from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import Footer from './Footer';
import Img1 from "../assets/janneth.png";
import Img2 from "../assets/synergix.png";
import next from "../assets/Vector2.png"
import prev from "../assets/Vector.png"
import line2 from "../assets/Line 2.png"
import line3 from "../assets/Line 3.png"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Work() {
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
    const Button = styled.button`
    display: inline-block;
    font-size: 1.2em;
    margin: 1em;
    height: 48px;
    border: 2px solid #45337D;
    border-radius: 4rem;
    color: #ffffff;
    margin-bottom: 60px;
    background-color: #000;
    height: 3em;
    `;
    const Buttonsmall = styled.button`
        display: inline-block;
        font-size: 1.2em;
        margin: 1em;
        height: 48px;
        border: 2px solid #45337D;
        border-radius: 4rem;
        color: #ffffff;
        margin-bottom: 60px;
        background-color: #45337D;
        height: 3em;
        align-items: center;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        `;
        
        const arrayElements = [
            {
                text:"Uno de los mejores servicios de spa y salón de lujo en Riverhead, Nueva York. En Janneth's Spa creemos que todos merecen ser mimados y disfrutar de un poco de lujo. Así que nos contrataron para traer negocios locales y ponerlos en el centro de atención.",
                img:Img1,
                link:"/janneth"
            },
            {
                text:"Synergix Marine Engines es una empresa orientada al servicio al cliente enfocada en proporcionar sus productos a cualquier empresa o individuo. Nos propusimos presentar la empresa al mundo buscando el reconocimiento de la marca, el aumento de las ventas y lograr un impacto duradero en los clientes.",
                img:Img2,
                link:"/sinergix"
            },
];

const [text, setText] = useState(arrayElements[0].text);
const [img, setImg] = useState(arrayElements[0].img);
const [first, setFirst] = useState(true);
const [link, setLink] = useState("/janneth")

const opc1 = () => {
    setText(arrayElements[0].text)
    setImg(arrayElements[0].img)
    setFirst(true)
    setLink(arrayElements[0].link)
}
const opc2 = () => {
    setText(arrayElements[1].text)
    setImg(arrayElements[1].img)
    setFirst(false)
    setLink(arrayElements[1].link)
}

    return(
        <div id="home">
        {matches ? (
            /* DESKTOP */
            <div className="container">
                {/* NAVEGACIÓN INTERNA*/}


            {/* CONTENIDO */}
                <div className="content-container">
                    <div className="dinamic-text">
                        {text}
                    </div>
                    <div className="services-nav">
                    {!first &&
                        <div className="button-container">
                            <img src={prev} height= {"50vh"} width= {"25vw"} className="button" alt="m360-marketing" onClick={opc1} />
                        </div>
                    }
                    <Slide right delay={150} duration={1000} distance="1200px">
                        <div>
                            <img src={img} width= {"100%"}className="dinamic-img" alt="m360-marketing" />
                            <Link className="smoothscroll" to={link}>
                                <Buttonsmall className="contact-button">
                                Historia de éxito
                                </Buttonsmall>
                            </Link>
                        </div>
                    </Slide>
                    {first && 
                        <div className="button-container">
                            <img src={next} height= {"50vh"} width= {"25vw"} className="button" alt="m360-marketing" onClick={opc2} />
                        </div>
                    }
                </div>
                <div className="link-container">
                </div>
            </div>
            {!first && <img src={line3} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>}
            {first && <img src={line2} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>}
        {/* FOOTER */}
            <Footer/>
            </div>
        ) : (
        /* MOBILE */
        <div className="container-s">
            <h1 className="title-s">
                Our services
            </h1>
                    {!first && <img src={line3} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>}
                    {first && <img src={line2} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>}
                {/* NAVEGACIÓN INTERNA*/}

                <div className="services-nav-s">
                    {!first &&
                        <div className="button-container">
                            <img src={prev} height= {"50vh"} width= {"25vw"} className="button-s" alt="m360-marketing" onClick={opc1} />
                        </div>
                    }
                    <div className="dinamic-text-s">
                        {text}
                    </div>
                    {first && 
                        <div className="button-container">
                            <img src={next} height= {"50vh"} width= {"25vw"} className="button-s" alt="m360-marketing" onClick={opc2} />
                        </div>
                    }
                    
                </div>

            {/* CONTENIDO */}
                <div>
                    <Slide right delay={150} duration={1000} distance="1200px">
                        <div>
                            <img src={img} width= {"100%"}className="dinamic-img-s" alt="m360-marketing" />
                        </div>
                    </Slide>
                </div>
                <Link className="smoothscroll" to={link}>
                                <Buttonsmall className="contact-button-s">
                                Historia de éxito
                                </Buttonsmall>
                            </Link>
        {/* FOOTER */}
            <Footer/>
            </div>
        )}
        </div>
    )
}

export default Work;