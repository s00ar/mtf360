import "./css/sinergix.css";
import React, { useState, useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import Footer from './Footer';
import line2 from "../assets/Line 2.png"

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
        const [isVisible, setIsVisible] = useState(true);

        const [height, setHeight] = useState(0)
        
        useEffect(() => {   
            window.addEventListener("scroll", listenToScroll);
            return () => 
            window.removeEventListener("scroll", listenToScroll); 
        }, [])
        
        const listenToScroll = () => {
            let heightToHideFrom = 1200;
            const winScroll = document.body.scrollTop || 
                document.documentElement.scrollTop;
            setHeight(winScroll);
            if (winScroll > heightToHideFrom) {  
                isVisible && setIsVisible(false);
            } else {
                setIsVisible(true);
            }  
        };


    return(
        <>
            {matches ? (
                <div className="container" id="home">
                <div className="story-container">
                        <Slide left delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img007.jpg")} className="story-image" alt="m360-marketing"/>
                            </div>
                        </Slide>
                        <div>
                            <Slide right duration={1500} distance="1400px">
                                <div className="story-padding-left">
                                    <h1 className="text-background left-align">Synergix</h1>
                                    <p className="story-paragraph">Hemos creado un sitio web optimizado para SEO que ayudará a aumentar su resultado en búsquedas orgánicas en Google. Por lo que es fácil encontrar sus productos.</p>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div>
                        {
                        isVisible 
                        && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                    }
                </div>
                <div className="story-container">
                    <div>
                        <Slide left duration={1500} distance="1400px">
                            <div className="story-padding-right">
                                <h3 className="background-image">La misión de Synergix es empoderar a individuos y empresas.</h3>
                                <p className="story-paragraph">Synergix Worldwide Inc. es una empresa orientada al servicio al cliente y dedicada a proporcionar a cada empresa e individuo turbocompresores y repuestos genuinos para motores marinos Hyundai y Doosan, así como también motores completamente nuevos.
                                <br/>
                                El desafío de Synergix era permitir que las empresas que necesitaban este tipo de productos los encontraran y contactaran con ellos con total confianza. Este proyecto partió de su misma necesidad de Synergix de encontrar un proveedor que cubriera estos requerimientos. Cuando se puso en contacto con su M360, inmediatamente comenzamos a trabajar y nuestra cultura corporativa hizo coincidió de inmediato.</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img008.jpg")} className="centered" alt="m360-marketing"/>
                            </div>
                        </Slide>
                    </div>
                </div>
                <h2 className="background-image " id="footer">Por esto garantizamos 100% de satisfacción</h2>
                <div className="story-container story-padding">
                        <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img009.jpg")}  alt="m360-marketing"/>
                        </Slide>
                    <div className="">
                        <Slide right duration={1500} distance="1400px">
                                <p className="story-padding-left">Con el objetivo de lograr siempre el 100 % de satisfacción del cliente, comenzamos con el flujo de trabajo. El sitio web ha generado muchos prospectos calificados en todo Estados Unidos y ha podido generar contactos y relaciones comerciales gracias a su solidez y claridad en la presentación de la empresa y su propuesta de valor.</p>
                        </Slide>
                    </div>
                </div>
            {/* FOOTER AND BACK TO TOP BUTTON */}
                <Footer/>
            </div>
            ):(
                <>
                    <div className="container-s" id="home">
                        <div className="center-align">
                                <Slide right duration={1500} distance="1400px">
                                    <h1 className="text-background top-space-s">Synergix</h1>
                                    <p className="story-paragraph-s">Hemos creado un sitio web optimizado para SEO que ayudará a aumentar su resultado en búsquedas orgánicas en Google. Por lo que es fácil encontrar sus productos.</p>
                                </Slide>
                            <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img007.jpg")} alt="m360-marketing" width={"70%"} className="story-image-s"/>
                            </Slide>
                            <img src={line2} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>
                        </div>
                        <div>
                            {isVisible 
                            && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                        }
                    </div>
                    <div className="story-container-s">
                            <Slide left duration={1500} distance="1400px">
                                    <div className="background-image">
                                        <h4 className=" left-align">La misión de Synergix es empoderar a individuos y empresas.</h4>
                                    </div>
                                    <p className="story-paragraph-s">Synergix Worldwide Inc. es una empresa orientada al servicio al cliente y dedicada a proporcionar a cada empresa e individuo turbocompresores y repuestos genuinos para motores marinos Hyundai y Doosan, así como también motores completamente nuevos.
                                <br/>
                                El desafío de Synergix era permitir que las empresas que necesitaban este tipo de productos los encontraran y contactaran con ellos con total confianza. Este proyecto partió de su misma necesidad de Synergix de encontrar un proveedor que cubriera estos requerimientos. Cuando se puso en contacto con su M360, inmediatamente comenzamos a trabajar y nuestra cultura corporativa hizo coincidió de inmediato.</p>
                            </Slide>
                        <div className="center-align">
                            <Slide right delay={150} duration={1000} distance="1200px">
                                    <img src={require("../assets/img008.jpg")} width={"70%"} className="story-image-s" alt="m360-marketing"/>
                            </Slide>
                        </div>
                    </div>
                    <div className="bottom-space">
                        <h4 className="inverted-background left-align" id="footer">Por esto garantizamos 100% de satisfacción</h4>
                                <Slide right duration={1500} distance="1400px">
                                        <p className="story-paragraph-s">With the goal of always achieving 100% customer satisfaction, we started with workflow. The website has generated many qualified leads across America and has been able to generate contacts and business relationships thanks to its robustness and clarity in presenting the company and its value proposition.</p>
                                </Slide>
                            <div className="center-align">
                                <Slide left delay={150} duration={1000} distance="1200px">
                                        <img src={require("../assets/img009.jpg")}  alt="m360-marketing" width={"70%"} className="story-image-s"/>
                                </Slide>
                            </div>
                        <Footer/>
                    </div>
                </div>
            </>
            )}
    </>
    )
}

export default Work;