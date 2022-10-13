import React from 'react';
import { Fade, Slide } from "react-reveal";
import { useState } from "react";
import './css/contact.css';
import Footer from './Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/4b1bfb70-0859-11ed-be50-e78da9ee852d";


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
    setTimeout(() => {
        setSubmitted(true);
    }, 100);
    };

    if (submitted) {
    return (
        <>
            <div class="container">
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </div>
        </>
    );
    }


    return (
    <div class="container">

    <Fade bottom duration={1000}>
        <h1 className="white--header">
                    <span>Contact us and get your MTF360.io assesment today!</span>
                    </h1>
    </Fade>
    <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="form-container"
        >
            <h2 className="FormElement">
                <span className='FormText' >
                Please tell us  
                </span>
                <span  className="FormInput--container">
                    <input className="FormElement" type="text" placeholder="your name" name="name" required />
                </span>
            </h2>
            <h2>
                <span className="FormText">
                    and also give us  
                </span>
                <span  className="FormInput--container">
                    <input type="email" placeholder="your email" name="email" required />
                </span>
            </h2>
            <h2>
                <span className="FormText">
                    and last but not least
                </span>
                <span className="FormInput--container">
                    <input type="text" placeholder="tell us how we may assist you" name="message" required />
                </span>
            </h2>
            <h2 className="FormText">
                and we'll get back to you as soon as possible!
            </h2>
            <button className="FormText--button" type="submit" >
                Send
            </button>
            <div class="loader">
                <div class="check">
                    <span class="check-one"></span>
                    <span class="check-two"></span>
                </div>
            </div>
        </form>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
    );
};

export default Contact;