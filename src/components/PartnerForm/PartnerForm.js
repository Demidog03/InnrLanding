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
                    <h2 className={classes.formTitle}>{t('PartnerForm.1')}</h2>
                    <div className={classes.formButtons}>
                        <a href="https://forms.gle/MfTHUszJGPT7TCnb8" className={classes.formButton}><div>{t('PartnerForm.2')}</div></a>
                        <a href="https://forms.gle/GDv7dScYvv4HruDn9" className={classes.formButton}><div>{t('PartnerForm.3')}</div></a>
                    </div>
                </div>
            </div>
            <div className={classes.partnerFacts}>
                <div className={classes.partnerFactsContainer}>
                    <h2 className={classes.partnerFactsTitle}>{t('WhyInnr.1')} <br/> {t('WhyInnr.2')}</h2>
                    <div className={classes.partnerFact}>
                        <img src={number1} alt=""/>
                        <h3>{t('WhyInnrFacts.1')}</h3>
                    </div>
                    <div className={classes.partnerFact}>
                        <h3>{t('WhyInnrFacts.2')}</h3>
                        <img src={number2} alt=""/>
                    </div>
                    <div className={classes.partnerFact}>
                        <img src={number3} alt=""/>
                        <h3>{t('WhyInnrFacts.3')}</h3>
                    </div>
                </div>
            </div>

            <div className={classes.question}>
                <div className={classes.questionContainer}>
                    <h2 className={classes.questionTitle}>{t('PartnerContact.1')} <img src={dividerLine} alt=""/></h2>

                    <a href="mailto:innrapp@gmail.com" className={classes.email}><span>{t('PartnerContact.2')}</span> <img src={arrowLeft} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default PartnerForm;