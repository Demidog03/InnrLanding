import {useRef} from 'react';
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Description from "../Description/Description";
import Contact from "../Contact/Contact";
import JoinTelegram from "../JoinTelegram/JoinTelegram";
import Footer from "../Footer/Footer";
import CustomCursor from "custom-cursor-react";
import joinTelegramClasses from "../JoinTelegram/joinTelegram.module.css";

const Home = () => {
    const cursor = useRef()

    const styles = {
        mixBlendMode: 'difference',
        zIndex: '1',
    }

    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <Description/>
            <Contact/>
            <JoinTelegram cursor={cursor}/>
            <Footer/>
            <div ref = {cursor} style={styles}>
                <CustomCursor

                    style={styles}
                    targets={['a', '.link', 'img', 'button', 'input', 'select']}
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
                    targetScale={3}
                />
            </div>

        </div>
    );
};

export default Home;