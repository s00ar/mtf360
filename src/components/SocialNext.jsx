import React from "react";
import "./home.css";
import {Fade, LightSpeed, Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import arrow from "../assets/Vector5.png";

function SocialNext() {
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
        <Grid container className="space" spacing={1}>
            <Grid item xs={5.5}>
                <TwitterIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>
            </Grid>
            <Fade>
                <Grid item xs={1}><a href="#next">
                    <img src={arrow} className="arrow" alt="down-arrow" /></a>
                </Grid>
            </Fade>
            <Grid item xs={5.5}>
            </Grid>
        </Grid>
    </>)
}
export default SocialNext;