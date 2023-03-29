import React from 'react';
import classes from "./contact.module.css";
import Countries from "../../data/Countries";
import oval1 from '../../assets/Oval1.png'
import rocket from '../../assets/emojis/rocket.png'
import launchBorder from  '../../assets/instant-border.svg'
import shineIcon1 from '../../assets/icons/shine-icon1.svg'
import shineIcon2 from '../../assets/icons/shine-icon2.svg'
import shineIcon3 from '../../assets/icons/shine-icon3.svg'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <h2 className={classes.contactTitle}>Let me know about
                <span className={classes.launchWord}> launch <img className={classes.launchBorder} src={launchBorder} alt=""/></span></h2>

            <div className={classes.contactDesc}>
                <div className={classes.contactField}>
                    <form className={classes.contactForm}>
                        <select className={classes.countriesSelect} name="country" id="" defaultValue={'Country'}>
                            <option value="Country" disabled={true} >Country</option>
                            <Countries/>
                        </select>
                        <div className={classes.emailWrapper}>
                            <input className={classes.emailInput} placeholder='E-mail' type="email"/>
                            <img className={classes.shineIcon1} src={shineIcon1} alt=""/>
                        </div>
                    </form>
                    <div className={classes.submitBtn}>
                        I am with you! <img src={rocket} alt=""/>
                        <img className={classes.shineIcon2} src={shineIcon2} alt=""/>
                        <img className={classes.shineIcon3} src={shineIcon3} alt=""/>
                    </div>
                </div>
                <img className={classes.oval} src={oval1} alt=""/>
            </div>



        </div>
    );
};

export default Contact;