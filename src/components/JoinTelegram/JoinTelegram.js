import {memo, useState, useEffect} from 'react';
import classes from "./joinTelegram.module.css";
import questionMark from '../../assets/question-mark.png'
import oval1 from '../../assets/danial-and-girl.png'
import dividerLine from '../../assets/divider-line.png'
import qrTg from '../../assets/qr-tg.png'
import telegramYellowBg from  '../../assets/telegram-yellow-bg.png'

const JoinTelegram = ({cursor, t}) => {
    const [qrUrl, setQrUrl] = useState('');

    useEffect(() => {
        // Загружаем локальную фотографию при монтировании компонента
        const image = new Image();
        image.src = process.env.PUBLIC_URL + qrTg;
        image.onload = () => {
            setQrUrl(image.src);
        };
    }, []);

    return (
        <div className={classes.joinTelegram}>
            <img className={classes.telegramYellowBg} src={telegramYellowBg} alt=""/>
            <div className={classes.joinTelegramContainer}>
                <div className={classes.joinTelegramImages} data-aos="fade-up-right" data-aos-delay='300' data-aos-duration='500'>
                    <img className={classes.joinTelegramImage2}  src={oval1} alt=""/>
                </div>
                <div className={classes.joinTelegramContent}>
                    <div className={classes.joinTelegramWrapper}>
                    <div className={classes.joinTelegramText}>
                        <h2>{t('JoinTelegram.1')}</h2>
                        <img src={dividerLine} alt=""/>
                        <h3>{t('JoinTelegram.2')}</h3>

                    </div>
                        <a href="https://t.me/innrprelaunh">
                    <img data-aos="zoom-in" data-aos-delay='200' data-aos-duration='500'
                         onMouseOver={(event) => {
                        event.target.src=qrUrl
                        cursor.current.children[0].children[0].width.baseVal.value = 160;
                        cursor.current.children[0].children[0].height.baseVal.value = 160;
                        cursor.current.children[0].children[0].children[0].r.baseVal.value = 100

                    }}
                         onMouseLeave={(event) => {
                             event.target.src=questionMark
                             cursor.current.children[0].children[0].width.baseVal.value = 90;
                             cursor.current.children[0].children[0].height.baseVal.value = 90;
                             cursor.current.children[0].children[0].children[0].r.baseVal.value = 22.5
                         }}
                         className={classes.questionMark} src={questionMark} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(JoinTelegram);