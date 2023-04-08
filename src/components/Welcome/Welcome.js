import {useRef, useState} from 'react';
import axios from 'axios';
import Select from 'react-select';
import classes from './welcome.module.css'
import welcomeBg from '../../assets/bg.svg'
import mainImg from '../../assets/main-img.png'
import instantBorder from  '../../assets/instant-border.png'
import instantBorderAlt from  '../../assets/instand-border-alt.png'
import rocketIcon from '../../assets/emojis/rocket.png'
import arrow from '../../assets/arrow.svg'
import Countries from "../../data/Countries";
import welcomeGreenBg from '../../assets/welcome-green-bg.png'

import Typewriter from 'typewriter-effect';
import CustomSelect from "../UI/CustomSelect/CustomSelect";
import Popup from "../UI/Popup/Popup";


const Welcome = ({cursor, t, i18n}) => {
    const email = useRef(null)
    const country = useRef(null)
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')

    const countries = Countries()
    const typingWordsStyle = {
        fontWeight: '600',
        fontSize: '1.5rem',
    }

    let messages = []
    if(i18n.language === 'en'){
        messages = ['Please, select your country and enter your email',
            'Please, enter an email',
            'Please, select your country',
            'Thank you for support! Check your email! P.S. Check spam if there is no message from us.'
        ]
    }
    else if(i18n.language === 'ru'){
        messages = ['Пожалуйста, введите страну проживания и почту',
            'Пожалуйста, введите почту',
            'Пожалуйста, выберите страну проживания',
            'Спасибо за поддержку! Проверьте свою почту! P.S. Если от нас сообщение не пришло, проверьте спам!'
        ]
    }


    const submitForm = (event) => {
        event.preventDefault()
        if (email.current.value === '' && country.current.getValue().length === 0) {
            setMessage(messages[0])
        } else if (email.current.value === '') {
            setMessage(messages[1])
        } else if (country.current.getValue().length === 0) {
            setMessage(messages[2])
        }
        else{
            setMessage(messages[3])

            const countryValue = country.current.getValue()[0].value
            setUserInfo({email: email.current.value, country: countryValue})

            const user = { email: email.current.value, country: countryValue};

            axios.post('https://innr-backend.onrender.com/users', user)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => console.error(error));
        }
    }

    const options = countries.map(country => {
        return {label: country, value: country}
    })

    return (
        <div className={classes.welcome}>
            <img className={classes.welcomeGreenBg} src={welcomeGreenBg} alt=""/>
            <img className={classes.welcomeBg} src={welcomeBg} alt=""/>
            <div className={classes.welcomeContent} >
                <img data-aos="fade-right" onMouseEnter={() => {
                    cursor.current.style.mixBlendMode = "normal"
                }} onMouseLeave={() => {
                    cursor.current.style.mixBlendMode = "difference"
                }}

                      className={classes.mainImg} src={mainImg} alt=""/>
                <div className={classes.welcomeText} >
                    <div data-aos="fade-down" data-aos-delay="300" className={classes.welcomeTitle}><p>{t('WelcomeTitle.1')}</p>
                        <span className={`${classes.instantWord} button`}> {t('WelcomeTitle.2')}
                            <img src={i18n.language === 'en' ? instantBorder : instantBorderAlt} alt=""/></span>
                        <p>{t('WelcomeTitle.3')}</p></div>
                    <div data-aos="fade-left" className={classes.welcomeSubtitle}>
                        <h2>{t('WelcomeSubtitle.1')}</h2>
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

                    <form onSubmit={submitForm} data-aos="zoom-in" data-aos-duration="1000">
                        <div className={classes.contactForm}>
                        <Select
                            isSearchable={true}
                            placeholder = {t('Country.1')}
                            className={`${classes.countriesSelect} button`}
                            options={options}
                            ref={country}
                            styles={{
                                control: (baseStyles) => ({
                                    ...baseStyles,
                                    border: 'none',
                                    background: "rgba(179, 219, 242, 0.05)",
                                    height: '100%'
                                }),
                                dropdownIndicator: (baseStyles) => ({
                                    ...baseStyles,
                                    fontWeight: 'bold',
                                    color: '#808080'
                                })
                            }}
                        />
                        <input ref={email} className={classes.emailInput} placeholder='E-mail' type="email"/>
                        </div>

                        <div className={classes.clickMe}>
                            <p className={classes.clickMeText}>{t('ClickMeText1.1')} <br/> {t('ClickMeText1.2')} <br/> {t('ClickMeText1.3')}</p>
                            <img className={classes.arrowIcon} src={arrow} alt=""/>
                            <div className={`${classes.submitBtn} button`}>{t("SubmitText.1")} <img src={rocketIcon} alt=""/></div>
                            <Popup userInfo={userInfo} message={message} lang={i18n.language}/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Welcome;