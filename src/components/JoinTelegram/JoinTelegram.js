import {memo, useState} from 'react';
import classes from "./joinTelegram.module.css";
import questionMark from '../../assets/question-mark.png'
import oval1 from '../../assets/Oval1.png'
import dividerLine from '../../assets/divider-line.png'
import qrTg from '../../assets/qr-tg.png'
import CustomCursor from "custom-cursor-react";

const JoinTelegram = ({cursor}) => {
    console.log(cursor)
    return (
        <div className={classes.joinTelegram}>
            <div className={classes.joinTelegramContainer}>
                <div className={classes.joinTelegramImages}>
                    <img className={classes.joinTelegramImage1} src={oval1} alt=""/>
                    <img className={classes.joinTelegramImage2}  src={oval1} alt=""/>
                </div>
                <div className={classes.joinTelegramContent}>
                    <div className={classes.joinTelegramWrapper}>
                    <div className={classes.joinTelegramText}>
                        <h2>Join Telegram</h2>
                        <img src={dividerLine} alt=""/>
                        <h3>Get updated news</h3>

                    </div>

                    <img onMouseOver={(event) => {
                        event.target.src=qrTg
                        console.log(cursor.current.children[0])
                        cursor.current.children[0].children[0].width.baseVal.value = 100;
                        cursor.current.children[0].children[0].height.baseVal.value = 100;
                        cursor.current.children[0].children[0].children[0].r.baseVal.value = 100

                    }}
                         onMouseLeave={(event) => {
                             event.target.src=questionMark
                             cursor.current.children[0].children[0].width.baseVal.value = 90;
                             cursor.current.children[0].children[0].height.baseVal.value = 90;
                             cursor.current.children[0].children[0].children[0].r.baseVal.value = 22.5
                         }}
                         className={classes.questionMark} src={questionMark} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(JoinTelegram);