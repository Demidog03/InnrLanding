import React, {useRef, useState} from 'react';
import classes from "./contact.module.css";
import Countries from "../../data/Countries";
import oval1 from '../../assets/danial-contact.png'
import rocket from '../../assets/emojis/rocket.png'
import launchBorder from  '../../assets/instant-border.png'
import shineIcon1 from '../../assets/icons/shine-icon1.svg'
import shineIcon2 from '../../assets/icons/shine-icon2.svg'
import shineIcon3 from '../../assets/icons/shine-icon3.svg'
import Select from "react-select";
import axios from "axios";
import Popup from "../UI/Popup/Popup";

const Contact = ({t, i18n}) => {
    const email = useRef(null)
    const country = useRef(null)
    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState('')

    const countries = Countries()

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
            console.log(country.current.getValue())
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
        <div className={classes.contact}>
            <h2 data-aos="fade-right" className={classes.contactTitle} >{t('LetMeKnow.1')}
                <span className={classes.launchWord}> {t('LetMeKnow.2')} <img className={classes.launchBorder} src={launchBorder} alt=""/></span></h2>

            <div className={classes.contactDesc}>
                <div className={classes.contactField}>
                    <form onSubmit={submitForm} data-aos="zoom-in" className={classes.contactForm}>
                        <div className={classes.formContent}>
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

                        <div className={`${classes.submitBtn} button`}>
                            {t('SubmitText.1')} <img src={rocket} alt=""/>
                            <img className={classes.shineIcon2} src={shineIcon2} alt=""/>
                            <img className={classes.shineIcon3} src={shineIcon3} alt=""/>
                            <Popup userInfo={userInfo} message={message} lang={i18n.language}/>
                        </div>
                    </form>
                </div>
                <img data-aos="zoom-out" className={classes.oval} src={oval1} alt=""/>
            </div>



        </div>
    );
};

export default Contact;