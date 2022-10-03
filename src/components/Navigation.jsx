import "./navigation.css";
import { Grid } from '@mui/material';
import React from "react";
import Fade from "react-reveal";
import slogo from '../assets/logo_small.png';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation() {
    const Button = styled.button`
        display: inline-block;
        font-size: .8em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #45337D;
        border-radius: 2rem;
        display: block;
        background: black;
        color: white;
        `;
    return (
    <div>
        <Grid className="navbar" container spacing={1}>
            <Grid item xs={2}>
                <Fade bottom >
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/"
                            exact>
                        <img src={slogo} alt="m360-logo" />
                        </NavLink>
                    </Fade>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={2}>
                    <Button className="nav-button">
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/services">
                            Services
                        </NavLink>
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="nav-button">
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/work">
                            Work
                        </NavLink>
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="nav-button">
                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/contact">
                            Get in touch
                    </NavLink>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Navigation;