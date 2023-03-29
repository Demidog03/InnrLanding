import React from 'react';
import classes from "./partnerWelcome.module.css";
import bgOrange from '../../assets/partner-bg-orange.png'
import bgGreen from '../../assets/partner-bg-green.png'
import smile from '../../assets/smile.svg'
import wow from '../../assets/wow.png'

const PartnerWelcome = () => {
    return (
        <div className={classes.partnerWelcome}>
            <div className={classes.partnerContainer}>
                <div className={classes.oval}><img src={wow} alt=""/></div>
                <h1 className={classes.partnerTitle}>Would you like to <br/>
                    become a partner? <img src={smile} alt=""/></h1>
                <div className={classes.oval}></div>
                <img className={classes.bgOrange} src={bgOrange} alt=""/>
                <img className={classes.bgGreen} src={bgGreen} alt=""/>
            </div>
        </div>
    );
};

export default PartnerWelcome;