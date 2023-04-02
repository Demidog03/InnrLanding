import React from 'react';
import classes from "./description.module.css";
import smile from '../../assets/smile.svg'
import phone from '../../assets/phone.png'

import firstIcon from '../../assets/facts_places/first-icon.svg'
import secondIcon from '../../assets/facts_places/second-icon.png'
import thirdIcon from '../../assets/facts_places/third-icon.png'
import forthIcon from '../../assets/facts_places/forth-icon.png'

const Description = ({t}) => {
    return (
        <div className={classes.description}>
            <div data-aos="fade-right" className={classes.title}>
                <h2 >{t('AllInOne.1')}</h2>
                <img src={smile} alt=""/>
            </div>
            <div className={classes.facts}>
                <div className={classes.factsItems}>
                    <div className={classes.factsItem} data-aos="fade-right">
                        <img src={firstIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            {t('Facts.1')}
                        </div>
                    </div>
                    <div className={classes.factsItem} data-aos="fade-left">
                        <img src={secondIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            {t('Facts.2')}
                        </div>
                    </div>
                    <div className={classes.factsItem} data-aos="fade-right">
                        <img src={thirdIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            {t('Facts.3')}
                        </div>
                    </div>
                    <div className={classes.factsItem} data-aos="fade-left">
                        <img src={forthIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            {t('Facts.4')}
                        </div>
                    </div>
                </div>

                <img data-aos="zoom-out" data-aos-delay='500' data-aos-duration='1000' className={classes.phoneImg} src={phone} alt=""/>
            </div>
        </div>
    );
};

export default Description;