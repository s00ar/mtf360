import something from "../assets/something.png";
import bar1 from "../assets/line3.png";
import "./home.css";
import React from "react";
import { Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";

function PageII() {
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
            <Grid container id="next1" spacing={1}>
                <Slide left delay={100} duration={1000} distance="1200px">
                    <Grid item xs={8}>
                        <img src={something} className="images" alt="m360-do-something-marketing" />
                    </Grid>
                </Slide>
                <Grid item className="text" xs={4}>
                    You want to position yourself in the first places of organic searches "SEO", let's do it. Work with our team of SEO experts who rely on various software to find even the smallest error that you may have on your website in order to fix it. Once we have your website in order, we start with more advanced strategies for indexing, content creation and backlinks.
                    <Button className="contact-button">
                        <a className="smoothscroll" href="#services">
                        Check our services
                        </a>
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                    <img src={bar1} className="line3" alt="m360-bar1" />
                </Grid>
            </Grid>
        </>
    )
};

export default PageII;