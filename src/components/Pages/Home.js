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

const Home = () => {
    const cursor = useRef()

    const styles = {
        mixBlendMode: 'difference',
        position: 'relative',
        zIndex: '5000',
    }
    console.log(welcomeClasses.submitBtn)
    const targets = ['a', 'img', 'button', 'input', 'select', '.button',

    ]

    return (
        <div className="App">
            <Header/>
            <Welcome cursor={cursor}/>
            <Description/>
            <Contact/>
            <JoinTelegram cursor={cursor}/>
            <Footer/>
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