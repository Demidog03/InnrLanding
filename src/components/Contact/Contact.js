import React from 'react';
import classes from "./contact.module.css";
import Countries from "../../data/Countries";
import oval1 from '../../assets/Oval1.png'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <h2 className={classes.contactTitle}>Let me know about launch</h2>

            <div className={classes.contactDesc}>
                <div className={classes.contactField}>
                    <form className={classes.contactForm}>
                        <select className={classes.countriesSelect} name="country" id="" defaultValue={'Country'}>
                            <option value="Country" disabled={true} >Country</option>
                            <Countries/>
                        </select>
                        <input className={classes.emailInput} placeholder='E-mail' type="email"/>
                    </form>
                    <button className={classes.submitBtn}>I am with you!</button>
                </div>
                <img src={oval1} alt=""/>
            </div>



        </div>
    );
};

export default Contact;