import "./css/work.css";
import React from "react";
import { Slide, Fade } from "react-reveal";
import { Grid } from '@mui/material';
import Footer from './Footer';

const { useState, useEffect } = React;

function Work() {
        const [isVisible, setIsVisible] = useState(true);

        const [height, setHeight] = useState(0)
        
        useEffect(() => {   
            window.addEventListener("scroll", listenToScroll);
            return () => 
            window.removeEventListener("scroll", listenToScroll); 
        }, [])
        
        const listenToScroll = () => {
            let heightToHideFrom = 600;
            const winScroll = document.body.scrollTop || 
                document.documentElement.scrollTop;
            setHeight(winScroll);
            if (winScroll > heightToHideFrom) {  
                isVisible && setIsVisible(false);
            } else {
                setIsVisible(true);
            }  
        };


    return(
        <div id="work">
            <div className="container" id="home">
            <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2} >
                <Slide left delay={150} duration={1000} distance="1200px">
                    <Grid item xs={7}>
                        <img src={require("../assets/img005.jpg")} className="centered" alt="m360-marketing"/>
                    </Grid>
                </Slide>
                <Grid item xs={5}>
                    <Slide right duration={1500} distance="1400px">
                        <div className="padding">
                            <h1 className="text-background">Janneth Spa</h1>
                            <p>We've done a complete digital campaign, creating a Web site, SEO, Google Adds, Unified listing and a Facebook ad campaign to attract more customers to their business</p>
                        </div>
                    </Slide>
                </Grid>
            </Grid>
                </div>
                    {/* NEXT BUTTON */}
            <div>
                {
                    isVisible 
                    && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                }
            </div>
            <Grid container className="floating" spacing={1}>
                <Grid item xs={5.5}>
                </Grid>
                <Fade delay={200}>
                    <Grid item className="centered" xs={1}>
                    </Grid>
                </Fade>
                <Grid item xs={5.5}></Grid>
            </Grid>
                    {/* OTHER CONTAINER */}
            <div className="container">    
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={7}>
                        <Slide left duration={1500} distance="1400px">
                            <div className="padding">
                                <div>
                                <h1 className="background-image">Come relax with us</h1>
                                </div>
                                <p>This SPA had a huge team of experts, in addition to an impressive workspace in which to provide quality services to its consumers. However, it was unable to attract new consumers, since it did not have an online presence.
    We created a web site with a strong SEO strategy to optimize organic searches. Meanwhile, we established the profile of their primary, secondary and negative buyer persona, and using all this information, we created campaigns for Google search and display networks, as well as a Facebook ads campaign, boosting conversions and maximizing ROI.
    We work using collaborative work methodologies offering partial reviews prior the final delivery of the product. </p>
                            </div>
                        </Slide>
                    </Grid>
                    <Slide right delay={150} duration={1000} distance="1200px">
                        <Grid item xs={3}>
                            <img src={require("../assets/img004.jpg")} className="centered" alt="m360-marketing"/>
                        </Grid>
                    </Slide>
                </Grid>
            </div>
                {/* OTHER CONTAINER */}
            <div className="container">    
                <div className="centered" id="footer">
                    <h2 className="background-image">This why we ensure 100% satisfaction</h2>
                    <br />
                </div>
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Slide left delay={150} duration={1000} distance="1200px">
                        <Grid item xs={7}>
                            <img src={require("../assets/img006.jpg")} className="centered" alt="m360-marketing"/>
                        </Grid>
                    </Slide>
                    <Grid item xs={5}>
                        <Slide right duration={1500} distance="1400px">
                            <div className="padding">
                                <p className="smaller-text">I attribute my company ‘s must recent success and growth to the amazing team of Metamorphosis I have commissioned mutile projects with them. They are professional, deliver extremely fast and are highly talented. All the team members communicate well and are always available. They have provided me with exquisite branding and presentation packages. They inspire confidence and give you tools for success.

    Alejandra Wyse </p>
                            </div>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        {/* FOOTER AND BACK TO TOP BUTTON */}
            <Footer/>
        </div>
    )
}

export default Work;