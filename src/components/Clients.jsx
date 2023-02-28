import React, { useState, useEffect } from "react";
import "./css/home.css";
import {Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import line1 from "../assets/line1.png";
import client from "../assets/image8.png";
import { Link } from "react-router-dom";

function Clients() {
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
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #45337D;
        border-radius: 4rem;
        display: block;
        background: black;
        color: #624D8B;
        `;
    return (
        <>{matches && (

            <Grid container id="footer" spacing={1}>
                <Grid item xs={6}>
                    <div className="home-elements">
                        <Slide left delay={750} duration={1500} distance="40px">
                            <h1>Nuestros casos de éxito</h1>
                            <img src={line1} alt="line-m360" />
                        </Slide>
                        <p>Campañas de Google Ads de alto rendimiento orientadas a la consecución de los objetivos de tu marca. Junto a usted trazamos KPIs que nos permitirán medir el retorno de tu inversión. Siempre lo mantenemos informado por correo electrónico sobre cómo va su campaña. Y siempre, tendrá a su disposición el servicio de atención al cliente, un ejecutivo que velará por su proyecto, quien además controlará que la calidad del servicio que estás recibiendo esté a la altura de tus expectativas.</p>
                        <p>Hay miles de agencias y desarrolladores en el mundo, ¿por qué elegirnos? Sencillo, nos importa lo que a ti te importa y eso es lo que nos hace entregar todo en el campo en cada proyecto. No paramos hasta obtener la satisfacción total de nuestros apreciados clientes.</p>
                        <Link className="smoothscroll" to="/work">
                                <Button className="contact-button">
                                Ver nuestros trabajos
                                </Button>
                            </Link>
                    </div>
                </Grid>
                
                <Grid item xs={6}>
                    <img src={client} className="space" alt="client-m360" width={500}/>
                </Grid>
            </Grid>
        )}
        {!matches && (
            <div className="home-elements">
                <Slide left delay={750} duration={1500} distance="40px">
                    <h1>Nuestros casos de éxito</h1>
                    <img src={line1} alt="line-m360" />
                </Slide>
                <p>Campañas de Google Ads de alto rendimiento orientadas a la consecución de los objetivos de tu marca. Junto a usted trazamos KPIs que nos permitirán medir el retorno de tu inversión. Siempre lo mantenemos informado por correo electrónico sobre cómo va su campaña. Y siempre, tendrá a su disposición el servicio de atención al cliente, un ejecutivo que velará por su proyecto, quien además controlará que la calidad del servicio que estás recibiendo esté a la altura de tus expectativas.</p>
                <p>Hay miles de agencias y desarrolladores en el mundo, ¿por qué elegirnos? Sencillo, nos importa lo que a ti te importa y eso es lo que nos hace entregar todo en el campo en cada proyecto. No paramos hasta obtener la satisfacción total de nuestros apreciados clientes.</p>
                <Link className="smoothscroll" to="/work">
                                <Button className="contact-button">
                                Ver nuestros trabajos
                                </Button>
                            </Link>
                <img src={client} className="image" alt="client-m360" width={100}/>
        </div>
        )}
        </>
    )
};
export default Clients;