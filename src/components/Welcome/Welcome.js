import {useState} from 'react';
import classes from './welcome.module.css'
import welcomeBg from '../../assets/bg.svg'
import mainImg from '../../assets/main-img.png'
import instantBorder from  '../../assets/instant-border.svg'
import rocketIcon from '../../assets/emojis/rocket.png'
import arrow from '../../assets/arrow.svg'
import Countries from "../../data/Countries";

import Typewriter from 'typewriter-effect';

const Welcome = () => {
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const typingWordsStyle = {
        fontWeight: '600',
        fontSize: '1.5rem',
    }

    const handleSend = () => {
        if(email==='' && country===''){
            alert('Please, select your country and enter your email')
            return;
        }
        else if(email===''){
            alert('Please, enter an email')
            return;
        }
        else if(country==='' || country==='Country'){
            alert('Please, select your country')
            return;
        }
        window.Email.send({
            SecureToken: '0d90727e-5880-49e0-9e0b-c215e9b2e7ab',
            To : email,
            From : 'olzhasaitu362@gmail.com',
            Subject : "Innr",
            Body : `Thank you for support! **Telegram link**`
        }).then(message => {
                console.log(message)
                alert('Thank you for support!')
        }
        );
    }

    return (
        <div className={classes.welcome}>
            <img className={classes.welcomeBg} src={welcomeBg} alt=""/>
            <div className={classes.welcomeContent}>
                <img className={classes.mainImg} src={mainImg} alt=""/>
                <div className={classes.welcomeText}>
                    <h1 className={classes.welcomeTitle}>Scan for
                        <span className={classes.instantWord}> instant <img src={instantBorder} alt="instantBorder"/></span>
                        facial skin diagnosis</h1>
                    <div className={classes.welcomeSubtitle}>
                        <h2>Solutions for every skin concern offered </h2>
                        <Typewriter style={typingWordsStyle}
                                    options={{
                                        wrapperClassName: classes.typingWords,
                                        strings: [
                                            '<span style="display:inline-block;">&#x1F525</span>',
                                            '<span style="display:inline-block;">&#x1F680</span>',
                                            '<span style="display:inline-block;">&#x1F929</span>',
                                            '<span style="display:inline-block;">&#x1F49B</span>',
                                            '<span style="display:inline-block;">&#x1F4AF</span>',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 2000,
                                    }}
                        />
                    </div>

                    <form className={classes.contactForm}>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}
                                className={classes.countriesSelect} name="country" id="country-select" defaultValue={'Country'}>
                            <option value="Country" selected={true}>Country</option>
                            <Countries/>
                        </select>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} className={classes.emailInput} placeholder='E-mail' type="email"/>
                    </form>
                    <div className={classes.clickMe}>
                        <p className={classes.clickMeText}>Click to be <br/>
                            the first</p>
                        <img className={classes.arrowIcon} src={arrow} alt=""/>
                        <div onClick={handleSend} className={classes.submitBtn}>I am with you! <img src={rocketIcon} alt=""/></div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Welcome;