import React from "react";
import "./home.css";
import { Fade } from "react-reveal";
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import arrow from "../assets/Vector5.png";

function SocialNext() {
    return (
    <>
        <Grid container className="space" spacing={1}>
            <Grid item xs={5.5}>
                <TwitterIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>
            </Grid>
            <Fade>
                <Grid item xs={1}><a href="#footer">
                    <img src={arrow} className="arrow" alt="down-arrow" /></a>
                </Grid>
            </Fade>
            <Grid item xs={5.5}>
            </Grid>
        </Grid>
    </>)
}
export default SocialNext;