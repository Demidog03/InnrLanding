import {useState} from 'react';
import classes from "./joinTelegram.module.css";
import questionMark from '../../assets/question-mark.png'
import oval1 from '../../assets/Oval1.png'
import dividerLine from '../../assets/divider-line.png'
import CustomCursor from "custom-cursor-react";

const JoinTelegram = () => {
    const [hover, isHover] = useState(false);
        console.log(hover)
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
                    <img onMouseEnter={()=> isHover(true)} onMouseLeave={()=> isHover(false)} className={classes.questionMark} src={questionMark} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinTelegram;