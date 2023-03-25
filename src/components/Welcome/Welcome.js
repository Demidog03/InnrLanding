import React from 'react';
import classes from './welcome.module.css'
import welcomeBg from '../../assets/bg.svg'
import mainImg from '../../assets/main-img.svg'
import Countries from "../../data/Countries";
import Header from "../Header/Header";

const Welcome = () => {
    return (
        <div className={classes.welcome}>
            <Header/>
            <img className={classes.welcomeBg} src={welcomeBg} alt=""/>
            <div className={classes.welcomeContent}>
                <img className={classes.mainImg} src={mainImg} alt=""/>
                <div className={classes.welcomeText}>
                    <h1 className={classes.welcomeTitle}>Say goodbye to <br/>
                        skincare guesswork</h1>
                    <h2 className={classes.welcomeSubtitle}>Get personalized skin care advice</h2>
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