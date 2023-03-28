import React from 'react';
import classes from './welcome.module.css'
import welcomeBg from '../../assets/bg.svg'
import mainImg from '../../assets/main-img.png'
import Countries from "../../data/Countries";
import Header from "../Header/Header";

import Typewriter from 'typewriter-effect';

const Welcome = () => {
    const typingWordsStyle = {
        fontWeight: '600',
        fontSize: '1.5rem',
    }

    return (
        <div className={classes.welcome}>
            <Header/>
            <img className={classes.welcomeBg} src={welcomeBg} alt=""/>
            <div className={classes.welcomeContent}>
                <img className={classes.mainImg} src={mainImg} alt=""/>
                <div className={classes.welcomeText}>
                    <h1 className={classes.welcomeTitle}>Scan for instant facial skin diagnosis</h1>
                    <div className={classes.welcomeSubtitle}>
                        <h2>Solutions for every skin concern offered </h2>
                        <Typewriter style={typingWordsStyle}
                                    options={{
                                        wrapperClassName: classes.typingWords,
                                        strings: ['expert guidance', 'lightning-last results', 'affordable solutions'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                        />
                    </div>

                    <form className={classes.contactForm}>
                        <select className={classes.countriesSelect} name="country" id="" defaultValue={'Country'}>
                            <option value="Country" disabled={true} >Country</option>
                            <Countries/>
                        </select>
                        <input className={classes.emailInput} placeholder='E-mail' type="email"/>
                    </form>
                    <button className={classes.submitBtn}>I am with you!</button>
                </div>
            </div>


        </div>
    );
};

export default Welcome;