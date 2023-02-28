import "./css/janneth.css";
import React, { useState, useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import Footer from './Footer';
import line2 from "../assets/Line 2.png";

function Janneth() {
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
            let heightToHideFrom = 900;
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
                                <img src={require("../assets/img005.jpg")} className="story-image" alt="m360-marketing"/>
                            </div>
                        </Slide>
                        <div>
                            <Slide right duration={1500} distance="1400px">
                                <div className="story-padding-left">
                                    <h1 className="text-background left-align">Janneth Spa</h1>
                                    <p className="story-paragraph">Hemos realizado una campaña digital completa, creando un sitio web, SEO, anuncios de Google Ads y una campaña de anuncios de Facebook para atraer más clientes a su negocio.</p>
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
                                <h1 className="background-image">Venga a relajarse con nosotros</h1>
                                <p className="story-paragraph">Este SPA cuenta con un enorme equipo de expertos, además de un impresionante espacio de trabajo en el que brinda servicios de calidad a sus consumidores. Sin embargo, no pudo atraer nuevos consumidores, ya que no tenía presencia en línea.
                                Creamos un sitio web con una fuerte estrategia de SEO para optimizar las búsquedas orgánicas. Mientras tanto, establecimos el perfil de su persona de comprador principal, secundaria y negativa, y utilizando toda esta información, creamos campañas para las redes de búsqueda y Display de Google, así como una campaña de anuncios de Facebook, impulsando las conversiones y maximizando el ROI.<br/><br/>
                                Trabajamos utilizando metodologuías colaborativas y entregas parciales constantes previas a la entrega final para asegurarnos su máxima satisfacción.</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img004.jpg")} className="centered" alt="m360-marketing"/>
                            </div>
                        </Slide>
                    </div>
                </div>
                <h2 className="background-image " id="footer">Por esto garantizamos 100% de satisfacción</h2>
                <div className="story-container story-padding">
                        <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img006.jpg")}  alt="m360-marketing"/>
                        </Slide>
                    <div className="">
                        <Slide right duration={1500} distance="1400px">
                                <p className="story-padding-left">"Atribuyo el éxito y el crecimiento más recientes de mi empresa al increíble equipo de Metamorphosis. Les he encargado múltiples proyectos. Son profesionales, entregan extremadamente rápido y tienen mucho talento. Todos los miembros del equipo se comunican bien y están siempre disponibles. Me han proporcionado exquisitos paquetes de marca y presentación. Inspiran confianza y le brindan herramientas para el éxito."<br/><br/>Alejandra Wyse </p>
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
                                    <h1 className="text-background top-space-s">Janneth Spa</h1>
                                    <p className="story-paragraph-s">Hemos realizado una campaña digital completa, creando un sitio web, SEO, anuncios de Google Ads y una campaña de anuncios de Facebook para atraer más clientes a su negocio.</p>
                                </Slide>
                            <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img005.jpg")} alt="m360-marketing" width={"70%"} className="story-image-s"/>
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
                                        <h4 className=" left-align">Venga a relajarse con nosotros</h4>
                                    </div>
                                    <p className="story-paragraph-s">Este SPA cuenta con un enorme equipo de expertos, además de un impresionante espacio de trabajo en el que brinda servicios de calidad a sus consumidores. Sin embargo, no pudo atraer nuevos consumidores, ya que no tenía presencia en línea.
                                Creamos un sitio web con una fuerte estrategia de SEO para optimizar las búsquedas orgánicas. Mientras tanto, establecimos el perfil de su persona de comprador principal, secundaria y negativa, y utilizando toda esta información, creamos campañas para las redes de búsqueda y Display de Google, así como una campaña de anuncios de Facebook, impulsando las conversiones y maximizando el ROI.<br/><br/>
                                Trabajamos utilizando metodologuías colaborativas y entregas parciales constantes previas a la entrega final para asegurarnos su máxima satisfacción.</p>
                            </Slide>
                        <div className="center-align">
                            <Slide right delay={150} duration={1000} distance="1200px">
                                    <img src={require("../assets/img005.jpg")} width={"70%"} className="story-image-s" alt="m360-marketing"/>
                            </Slide>
                        </div>
                    </div>
                    <div className="bottom-space">
                        <h4 className="inverted-background left-align" id="footer">Por esto garantizamos 100% de satisfacción</h4>
                                <Slide right duration={1500} distance="1400px">
                                        <p className="story-paragraph-s">"Atribuyo el éxito y el crecimiento más recientes de mi empresa al increíble equipo de Metamorphosis. Les he encargado múltiples proyectos. Son profesionales, entregan extremadamente rápido y tienen mucho talento. Todos los miembros del equipo se comunican bien y están siempre disponibles. Me han proporcionado exquisitos paquetes de marca y presentación. Inspiran confianza y le brindan herramientas para el éxito."<br/><br/> Alejandra Wyse</p>
                                </Slide>
                            <div className="center-align">
                                <Slide left delay={150} duration={1000} distance="1200px">
                                        <img src={require("../assets/img006.jpg")}  alt="m360-marketing" width={"70%"} className="story-image-s"/>
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

export default Janneth;