import React from 'react';
import classes from "./partnerWelcome.module.css";
import bgOrange from '../../assets/partner-bg-orange.png'
import bgGreen from '../../assets/partner-bg-green.png'
import smile from '../../assets/smile.svg'
import wow from '../../assets/wow.png'
import danialPartnership from '../../assets/danial-partnership.png'
import girlPartnership from '../../assets/girl-partnership.png'
const PartnerWelcome = ({t}) => {
    return (
        <div className={classes.partnerWelcome}>
            <div className={classes.partnerContainer}>
                <div data-aos="fade-down" className={classes.oval}>
                    <img className={classes.danialPartnership} src={danialPartnership} /><img className={classes.wow} src={wow} alt=""/>
                </div>
                <h1 data-aos="zoom-in" data-aos-duration='1000' className={classes.partnerTitle}>{t('Partner.1')} <br/>
                    {t('Partner.2')} <img src={smile} alt=""/></h1>
                <div data-aos="fade-up" data-aos-delay='300' className={classes.oval}>
                    <img className={classes.girlPartnership} src={girlPartnership} alt=""/>
                </div>
                <img className={classes.bgOrange} src={bgOrange} alt=""/>
                <img className={classes.bgGreen} src={bgGreen} alt=""/>
            </div>
        </div>
    );
};

export default PartnerWelcome;