import React from 'react';
import classes from "./partnerForm.module.css";
import number1 from  '../../assets/number1.png'
import number2 from  '../../assets/number2.png'
import number3 from  '../../assets/number3.png'
import dividerLine from '../../assets/divider-line.png'
    import arrowLeft from '../../assets/arrow-left.png'

const PartnerForm = ({t}) => {
    return (
        <div>
            <div className={classes.partnerForm}>
                <div className={classes.formContainer}>
                    <h2 data-aos="fade-down" className={classes.formTitle}>{t('PartnerForm.1')}</h2>
                    <div className={classes.formButtons}>
                        <a data-aos="fade-right" data-aos-delay='200' href="https://forms.gle/MfTHUszJGPT7TCnb8" className={classes.formButton}><div>{t('PartnerForm.2')}</div></a>
                        <a data-aos="fade-left" data-aos-delay='400'  href="https://forms.gle/GDv7dScYvv4HruDn9" className={classes.formButton}><div>{t('PartnerForm.3')}</div></a>
                    </div>
                </div>
            </div>
            <div className={classes.partnerFacts}>
                <div className={classes.partnerFactsContainer}>
                    <h2 data-aos="fade-down" className={classes.partnerFactsTitle}>{t('WhyInnr.1')} <br/> {t('WhyInnr.2')}</h2>
                    <div className={classes.partnerFact}>
                        <img data-aos="fade-right" src={number1} alt=""/>
                        <h3 data-aos="fade-left" data-aos-delay='300' >{t('WhyInnrFacts.1')}</h3>
                    </div>
                    <div className={classes.partnerFact}>
                        <h3 data-aos="fade-right" data-aos-delay='500'>{t('WhyInnrFacts.2')}</h3>
                        <img data-aos="fade-left" data-aos-delay='300'  src={number2} alt=""/>
                    </div>
                    <div className={classes.partnerFact}>
                        <img data-aos="fade-right" data-aos-delay='300' src={number3} alt=""/>
                        <h3 data-aos="fade-left" data-aos-delay='500'>{t('WhyInnrFacts.3')}</h3>
                    </div>
                </div>
            </div>

            <div className={classes.question}>
                <div className={classes.questionContainer}>
                    <h2 data-aos="fade-right" data-aos-delay='500' className={classes.questionTitle}>{t('PartnerContact.1')} <img src={dividerLine} alt=""/></h2>

                    <a data-aos="zoom-out" href="mailto:innrapp@gmail.com" className={classes.email}><span>{t('PartnerContact.2')}</span> <img src={arrowLeft} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default PartnerForm;