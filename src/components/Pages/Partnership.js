import React, {useRef} from 'react';
import Header from "../Header/Header";
import CustomCursor from "custom-cursor-react";
import joinTelegramClasses from "../JoinTelegram/joinTelegram.module.css";
import PartnerWelcome from "../PartnerWelcome/PartnerWelcome";
import PartnerForm from "../PartnerForm/PartnerForm";
import Footer from "../Footer/Footer";
import partnerFormClasses from "../PartnerForm/partnerForm.module.css";

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
                    targets={['a', 'img', 'button', 'input', 'select', `.${partnerFormClasses.formButton}`]}
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

export default Partnership;