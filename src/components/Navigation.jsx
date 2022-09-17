import "./style.css";
import { Grid } from '@mui/material';
import React from "react";
import Fade from "react-reveal";
import slogo from '../assets/logo_small.png';
import styled from "styled-components";

function Navigation() {
    const Button = styled.button`
        display: inline-block;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #45337D;
        border-radius: 4rem;
        display: block;
        background: black;
        color: white;
        `;
    return (
    <div>
        <Grid className="navbar" container spacing={2}>
            <Grid item xs={1}>
                <Fade bottom >
                    <a className="smoothscroll" href="#home">
                        <img src={slogo} alt="m360-logo" />
                    </a>
                    </Fade>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={1.5}>
                    <Button className="nav-button">
                        <a className="smoothscroll" href="#services">
                            Services
                        </a>
                    </Button>
                </Grid>
                <Grid item xs={1.5}>
                    <Button className="nav-button">
                        <a className="smoothscroll" href="#work">
                            Work
                        </a>
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="nav-button">
                        <a className="smoothscroll" href="#contact">
                            Get in touch
                        </a>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Navigation;