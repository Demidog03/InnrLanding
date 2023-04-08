import {useRef} from 'react';
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Description from "../Description/Description";
import Contact from "../Contact/Contact";
import JoinTelegram from "../JoinTelegram/JoinTelegram";
import Footer from "../Footer/Footer";
import CustomCursor from "custom-cursor-react";
import joinTelegramClasses from "../JoinTelegram/joinTelegram.module.css";
import welcomeClasses from '../Welcome/welcome.module.css'
import contactClasses from '../Contact/contact.module.css'
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t, i18n} = useTranslation()

    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }

    const cursor = useRef()

    const styles = {
        mixBlendMode: 'difference',
        position: 'relative',
        zIndex: '5000',
    }

    const targets = ['a', 'img', 'button', 'input', 'select', '.button',

    ]

    return (
        <div className="App">
            <Header t={t} i18n={i18n} handleClick={handleClick}/>
            <Welcome t={t} i18n={i18n} cursor={cursor}/>
            <Description t={t} />
            <Contact t={t} i18n={i18n} />
            <JoinTelegram t={t}  cursor={cursor}/>
            <Footer t={t} />
            <div ref = {cursor} style={styles}>
                <CustomCursor
                    style={styles}
                    targets={targets}
                    customClass={joinTelegramClasses.cursorCustom}
                    dimensions={90}
                    fill='#fff'
                    smoothness={{
                        movement: 0.4,
                        scale: 0.1,
                        opacity: 1,
                    }}
                    opacity={1}
                    targetOpacity={1}
                    targetScale={2}
                />
            </div>

        </div>
    );
};

export default Home;