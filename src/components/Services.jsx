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
import { useState } from 'react';

function Services() {
    const Button = styled.button`
        display: inline-block;
        font-size: 1.2em;
        margin: 1em;
        border-radius: 4rem;
        display: block;
        background: black;
        color: #ffffff;
        `;
        
        const arrayElements = [
            {
                text:"Mobile app development is a huge part of the modern world, and we can help you make your own mobile app a reality. Whether you're looking to develop an app for your business or just want to start a hobby project, we can help you create exactly what you need. We specialize in helping clients with any level of experience—from those who have never coded before to those who want to bring their existing code into the next generation of mobile apps.",
        img:Img1,
    },
    {
        text:"Creating an unique website for each client; a website must express the unrepeatable personality that each brand possesses, hand in hand with UX/UI concepts. Brands are becoming more creative when it comes to selling for internet,don't be left behind",
        img:Img2,
    },
    {
        text:"High-performance Google Ads campaigns aimed at achieving the objectives of your brand. Together with you, we trace the KPIs that will allow us to measure the return on your investment, we always keep you informed by email about. How is your campaign going? And you always,always have customer service at your disposal, we put at your disposal an executive who will watch over your project, who is also going to control that the quality of the service you are getting meet your expectations.",
        img:Img3,
    },
    {
        text:"You want to position yourself in the first places of organic searches SEO, let's do it. Work with our team of FullStack experts who rely on various software to find even the smallest error you have on your website and fix it. Once we have your website in order and totally semantic, we start with more advanced indexing strategies, content creation, backlinks and perfecting your SEO.",
        img:Img4,
    },
    {
        text:"Keep your business information in order and consistent so that people who find you through any portal, is essential in a strategy of digital marketing, in this way you can gain trust and provoke contact with your business.",
        img:Img5,
    },
];

const [text, setText] = useState(arrayElements[0].text);
const [img, setImg] = useState(arrayElements[0].img);

const opc1 = () => {
    setText(arrayElements[0].text)
    setImg(arrayElements[0].img)
}
const opc2 = () => {
    setText(arrayElements[1].text)
    setImg(arrayElements[1].img)
}
const opc3 = () => {
    setText(arrayElements[2].text)
    setImg(arrayElements[2].img)
}
const opc4 = () => {
    setText(arrayElements[3].text)
    setImg(arrayElements[3].img)
}
const opc5 = () => {
    setText(arrayElements[4].text)
    setImg(arrayElements[4].img)
}
    return(
        <>
            <div className="container">
                <h1 className="title">
                    Success through<strong className="title-strong"> DEDICATION</strong>
                </h1>
                {/* NAVEGACIÓN INTERNA*/}

                <Grid className="services-nav" container>
                    <Grid item xs={3}>
                        <Button className="nav-button" onClick={opc1}>
                            Mobile Apps
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button className="nav-button" onClick={opc2}>
                            Web development
                        </Button>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Button className="nav-button" onClick={opc3}>
                            Google Ads
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button className="nav-button" onClick={opc4}>
                            SEO
                        </Button>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Button className="nav-button" onClick={opc5}>
                            Unified Listing
                        </Button>
                    </Grid>
                    
                <img className="line" src={line1} alt="line-m360" />
                </Grid>

            {/* CONTENIDO */}
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2} >
                    <Grid item className="text" xs={5}>
                        <Slide left duration={1500} distance="1400px">
                            <div className="padding">
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

        {/* FOOTER */}
            <Footer/>
            </div>
        </>
    )
}

export default Services;