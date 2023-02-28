import "./css/services.css";
import React from "react";
import { Slide } from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import Footer from './Footer';
import Img1 from "../assets/img002.jpg";
import Img2 from "../assets/img015.jpg";
import Img3 from "../assets/img001.jpg";
import Img4 from "../assets/img012.jpg";
import Img5 from "../assets/img003.jpg";
import line1 from "../assets/line1.png";
import next from "../assets/Vector2.png"
import prev from "../assets/Vector.png";
import { useState, useEffect } from 'react';
import BrochureApps from  "../assets/apps.pdf";
import BrochureWeb from "../assets/web.pdf";
import BrochureSEO from "../assets/seo.pdf";
import BrochureSEM from "../assets/sem.pdf";
import BrochureRedes from "../assets/redes.pdf";

function Services() {
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
    margin: 1em 1em 0 1em;
    //height: 48px;
    //border: 2px solid #45337D;
    border-radius: 4rem;
    color: #ffffff;
    background-color: #000;
    height: 2em;
    `;
    const Buttonsmall = styled.button`
        display: inline-block;
        // font-size: 1.2em;
        // margin: 1em;
        min-width: 12rem;
        height: 48px;
        border: 2px solid #45337D;
        border-radius: 4rem;
        color: #ffffff;
        // margin-bottom: 60px;
        background-color: #45337D;
        height: 3em;
        align-items: center;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        `;
        
        const arrayElements = [
            {
                name:"Aplicaciones móviles",
                text:"El desarrollo de aplicaciones móviles es una gran parte del mundo moderno. Podemos ayudarlo a hacer realidad su propia aplicación móvil. Ya sea que esté buscando desarrollar una aplicación para su negocio o simplemente quiera comenzar un proyecto de pasatiempo, podemos ayudarlo a crear exactamente lo que necesita. Nos especializamos en ayudar a los clientes con cualquier nivel de experiencia.",
                img:Img1,
                brochures: BrochureApps,
            },
            {
                name:"Desarrollo web",
                text:"Creamos sitios web únicos para cada cliente. Un sitio web debe expresar la personalidad irrepetible que posee cada marca, de la mano de conceptos UX/UI. Las marcas cada vez son más creativas a la hora de vender por internet, no te quedes atrás.",
                img:Img2,
                brochures: BrochureWeb,
            },
            {
                name:"Google ADS",
                text:"Creamos campañas de Google Ads de alto rendimiento orientadas a la consecución de los objetivos de tu marca. Junto a usted, trazamos los KPI que nos permitirán medir el retorno de su inversión, siempre lo mantenemos informado por correo electrónico. Ponemos a su disposición un ejecutivo que velará por su proyecto, que además va a controlar que la calidad del servicio que estás recibiendo esté a la altura de tus expectativas.",
                img:Img3,
                brochures: BrochureSEM,
            },
            {
                name:"SEO",
                text:"Quieres posicionarte en los primeros lugares de búsquedas orgánicas SEO. Trabaje con nuestro equipo de desarrolladores en mejorar su sitio web y corregirlo para posicionarse orgánicamente entre los primeros puestos. Una vez que tenemos tu sitio web en orden y totalmente semántico, comenzamos con estrategias más avanzadas de indexación, creación de contenido, backlinks y perfeccionamiento de tu SEO.",
                img:Img4,
                brochures: BrochureSEO,
            },
            {
                name: "Redes sociales",
                text:"Las redes sociales son la ventana de tu empresa al mundo, manejar las redes sociales es conversar con clientes y prospectos con la intención de generar confianza, seguridad y transparencia entre consumidor y proveedor.",
                img:Img5,
                brochures: BrochureRedes,
            },
];

const [text, setText] = useState(arrayElements[0].text);
const [img, setImg] = useState(arrayElements[0].img);
const [name, setName] = useState(arrayElements[0].name);
const [brochures, setBrochures] = useState(arrayElements[0].brochures);
const [count, setCount] = useState(1);
const [first, setFirst] = useState(true);
const [last, setLast] = useState(false);
const [isActiveI, setIsActiveI] = useState(true);
const [isActiveII, setIsActiveII] = useState(false);
const [isActiveIII, setIsActiveIII] = useState(false);
const [isActiveIV, setIsActiveIV] = useState(false);
const [isActiveV, setIsActiveV] = useState(false);

const navBtnNext = () => {
    if (count<4) {
        setFirst(false);
        setCount(count + 1);
    } else if(count===4){
        setLast(true);
    } else {
        setCount(0);
    }
    setName(arrayElements[count].name)
    setText(arrayElements[count].text)
    setImg(arrayElements[count].img)
    setBrochures(arrayElements[count].brochures)
}
const navBtnPrev = () => {
    if (count>0) {
        setCount(count - 1);
        setLast(false);
    } else {
        setCount(0);
        setFirst(true);
        setLast(false);
    }
    setName(arrayElements[count].name)
    setText(arrayElements[count].text)
    setImg(arrayElements[count].img)
    setBrochures(arrayElements[count].brochures)
}

const opc1 = () => {
    setText(arrayElements[0].text)
    setImg(arrayElements[0].img)
    setBrochures(arrayElements[0].brochures)
    setIsActiveI(true)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc2 = () => {
    setText(arrayElements[1].text)
    setImg(arrayElements[1].img)
    setBrochures(arrayElements[1].brochures)
    setIsActiveI(false)
    setIsActiveII(true)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc3 = () => {
    setText(arrayElements[2].text)
    setImg(arrayElements[2].img)
    setBrochures(arrayElements[2].brochures)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(true)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc4 = () => {
    setText(arrayElements[3].text)
    setImg(arrayElements[3].img)
    setBrochures(arrayElements[3].brochures)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(true)
    setIsActiveV(false)
}
const opc5 = () => {
    setText(arrayElements[4].text)
    setImg(arrayElements[4].img)
    setBrochures(arrayElements[4].brochures)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(true)
}

    return(
        <div>
        {matches ? (
            /* DESKTOP */
            <div className="container">
                <h1 className="title">
                    Éxito a través de la <strong className="title-strong"> DEDICACIÓN</strong>
                </h1>
                {/* NAVEGACIÓN INTERNA*/}

                <div className="services-nav">
                    <div>
                        <Button className={isActiveI ? 'services-button-active' : 'services-button'} onClick={opc1}>
                            Mobile Apps
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveII ? 'services-button-active' : 'services-button'} onClick={opc2}>
                            Desarrollo Web
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveIII ? 'services-button-active' : 'services-button'} onClick={opc3}>
                            Google Ads
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveIV ? 'services-button-active' : 'services-button'} onClick={opc4}>
                            SEO
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveV ? 'services-button-active' : 'services-button'} onClick={opc5}>
                            Redes Sociales
                        </Button>
                    </div>
                    
                </div>
                <img className="line" src={line1} alt="line-m360" />

            {/* CONTENIDO */}
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2} >
                    <Grid item className="" xs={8}>
                        <Slide left duration={1500} distance="1400px">
                            <div className="">
                                <p className="dinamic-text">{text}</p>
                            </div>
                        </Slide>
                    </Grid>
                    <Slide right delay={150} duration={1000} distance="1200px">
                        <Grid item xs={7}>

                            <img src={img} className="dinamic-img" alt="m360-marketing" />
                        </Grid>
                    </Slide>
                </Grid>
                <img className="line" src={line1} alt="line-m360" />
                <div className="brochure-bar">
                    <h4>¿Cómo lo hacemos? Descargue nuestro Brochure</h4>
                    <a href={brochures} target="_blank" className="brochure-button">
                    Descarga aquí
                    </a>
                </div>
        {/* FOOTER */}
            <Footer/>
            </div>
        ) : (
        /* MOBILE */
        <>
            <div className="container-s">
                    <h1 className="title-s">
                    Éxito a través de la <strong className="title-strong"> DEDICACIÓN</strong>
                    </h1>
                    {/* NAVEGACIÓN INTERNA*/}

                    <div className="services-nav-s">
                        {!first ? (
                            <div className="left-arrow">
                                <img src={prev} width= {"30%"} className="left-arrow" alt="m360-marketing" onClick={navBtnPrev} />
                            </div>
                        ):(
                            <div className="left-arrow">
                                <img src={prev} width= {"30%"} className="left-arrow hidden" alt="m360-marketing" onClick={navBtnPrev} />
                            </div>
                        )
                        }
                            <Buttonsmall>
                                {name}
                            </Buttonsmall>
                        {!last? (
                            <div className="right-arrow">
                                <img src={next} width= {"30%"} className="right-arrow" alt="m360-marketing" onClick={navBtnNext} />
                            </div>
                        ):( <div className="right-arrow">
                            <img src={next} width= {"30%"} className="hidden" alt="m360-marketing" onClick={navBtnNext} />
                        </div>
                        ) 
                        }
                        
                    </div>
                    <img className="line-s" src={line1} alt="line-m360" width={"100%"} />

                {/* CONTENIDO */}
                    <div>
                        <div>
                            <Slide left duration={1500} distance="1400px">
                                <div>
                                    <p className="dinamic-text-s">{text}</p>
                                </div>
                            </Slide>
                        </div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={img} width= {"100%"}className="dinamic-img-s" alt="m360-marketing" />
                            </div>
                        </Slide>
                    </div>
                <div className="brochure-bar-s">
                    <h6>¿Cómo lo hacemos? Descargue nuestro Brochure</h6>
                    <Buttonsmall>
                    <a href={brochures} target="_blank" className="brochure-button-s">
                    Descarga aquí
                    </a>
                    </Buttonsmall>
                </div>

            {/* FOOTER */}
                <Footer/>
                </div>
            </>
        )}
        </div>
    )
}

export default Services;