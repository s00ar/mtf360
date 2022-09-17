import React from "react";
import "./home.css";
import {Fade, LightSpeed, Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Comic from "./Comic";
import PageII from "./PageII";
import Clients from "./Clients";
import SocialNext from "./SocialNext";
import arrow from "../assets/Vector5.png";
import logo from "../assets/logo.png";

function Home() {
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
      <div className="App">
        {/* MAIN PAGE START */}
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
              <p>We design and create a unique website for each cliente. A website must express the unique personality that each brand has, together with UX/UI concepts. Brands are becoming more creative when it comes to selling online, don't be left out.
              Count on us to develop the website you've always wanted.
              </p>
                <Button className="contact-button">
                    <a className="smoothscroll" href="#contact">
                        Get in touch
                    </a>
                </Button>
            </div>
          </Grid>
          <Grid item xs={8}>
          <LightSpeed right delay={250} duration={1000} distance="40px">
            <img src={logo} className="logo" alt="logo" />
            </LightSpeed>
          </Grid>
        </Grid>

        {/* NEXT BUTTON */}

        <Grid container className="space" spacing={1}>
          <Grid item xs={5.5}>
          </Grid>
            <Fade delay={1000}>
          <Grid item className="centered" xs={1}><a href="#next1">
            <img src={arrow} className="arrow" alt="down-arrow" /></a>
          </Grid>
            </Fade>
          <Grid item xs={5.5}>
          </Grid>
        </Grid>

        <PageII/>
        <SocialNext/>
        <Comic/>
        <SocialNext/>
        <Clients/>
        
        {/* BACK TO TOP BUTTON */}

                <Grid container className="space-bottom" spacing={1}>
          <Grid item xs={5.5}>
            <TwitterIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
          </Grid>
            <Fade delay={1000}>
          <Grid item className="centered" xs={1}><a href="#home">
            <img src={arrow} className="up-arrow" alt="down-arrow" /></a>
          </Grid>
            </Fade>
          <Grid item xs={5.5}>
          </Grid>
        </Grid>
      </div>
    );
  }

export default Home;