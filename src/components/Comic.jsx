import "./home.css";
import React from "react";
import {Fade, Slide} from "react-reveal";
import { Grid } from '@mui/material';
import ilu1 from "../assets/ilu1.png";
import ilu2 from "../assets/ilu2.png";
import ilu3 from "../assets/ilu3.png";
import ilu4 from "../assets/ilu4.png";
import ilu5 from "../assets/ilu5.png";

function Comic() {
    return (
        <>
            <Grid container id="comic" className="container__comic" spacing={2}>
                <Slide left delay={250} duration={1000} distance="400px">
                    <Grid item xs={4}>
                        <img src={ilu1} style={{height: 350}} className="ilustration" alt="ilustration1" />
                        <h4>David Mayorga, founder of Turbomekanics...</h4>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={ilu2} style={{height: 350}} className="ilustration" alt="ilustration2" />
                    </Grid>
                </Slide>
                <Fade right delay={1250} duration={1000} distance="1600px">
                    <Grid item xs={4}>
                        <img src={ilu3} style={{height: 350}} className="ilustration" alt="ilustration3" />
                        <h4>Website design, word study...</h4>
                    </Grid>
                </Fade>
            </Grid>

            <Grid container className="container__comic" spacing={2}>
                <Fade left delay={1500}>
                    <Grid item xs={6}>
                        <img src={ilu4} style={{height: 350}} className="ilustration" alt="ilustration4" />
                        <h4>M360 proposes a strategy...</h4>
                    </Grid>
                </Fade>
                <Fade right delay={2000}>
                    <Grid className="ilustration5" item xs={6}>
                        <img src={ilu5} style={{height: 350}} alt="ilustration5" />
                        <h4>Sales have grown by %300...</h4>
                    </Grid>
                </Fade>
            </Grid>
        </>
    )
}
export default Comic;