import React, {useRef} from 'react';
import Header from "../Header/Header";
import CustomCursor from "custom-cursor-react";
import joinTelegramClasses from "../JoinTelegram/joinTelegram.module.css";
import PartnerWelcome from "../PartnerWelcome/PartnerWelcome";
import PartnerForm from "../PartnerForm/PartnerForm";
import Footer from "../Footer/Footer";

const Partnership = () => {
    const cursor = useRef()

    const styles = {
        mixBlendMode: 'difference',
        zIndex: '1',
    }
    return (
        <div>
            <Header/>
            <PartnerWelcome/>
            <PartnerForm/>
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

export default Partnership;