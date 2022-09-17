import logo from "../assets/logo.png";
import "./home.css";
import React from "react";
import {Fade, LightSpeed, Slide} from "react-reveal";
import { Grid, container, Button } from '@mui/material';
import styled from "styled-components";

function PageI() {
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
        <>
            <Grid container id="home" spacing={1}>
                <Grid item xs={4}>
                    <div className="home-elements">
                        <Fade>
                            <Slide left delay={1250} duration={1000} distance="400px">
                                <h1 className="text-dargrey">We are,</h1>
                            </Slide>
                        </Fade>
                        <Slide left delay={500} duration={1200} distance="40px">
                            <h1 className="text-grey">We Think,</h1>
                        </Slide>
                        <Slide left delay={750} duration={1500} distance="40px">
                            <h1 className="text-white">We do!</h1>
                        </Slide>
                        <p>We design and create a unique website for each cliente. A website must express the unique personality that each brand has, together with UX/UI concepts. Brands are becoming more creative when it comes to selling online, don't be left out. Count on us to develop the website you've always wanted.</p>
                        <Button className="contact-button">
                            <a className="smoothscroll" href="#contact">Get in touch</a>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <LightSpeed right delay={250} duration={1000} distance="40px">
                        <img src={logo} className="logo" alt="logo" />
                    </LightSpeed>
                </Grid>
            </Grid>
        </>
    );
}

export default PageI;