import React from 'react';
import classes from "./partnerForm.module.css";
import number1 from  '../../assets/number1.png'
import number2 from  '../../assets/number2.png'
import number3 from  '../../assets/number3.png'
import dividerLine from '../../assets/divider-line.png'
    import arrowLeft from '../../assets/arrow-left.png'

const PartnerForm = () => {
    return (
        <div>
            <div className={classes.partnerForm}>
                <div className={classes.formContainer}>
                    <h2 className={classes.formTitle}>Fill out the form</h2>
                    <div className={classes.formButtons}>
                        <div className={classes.formButton}>For Kazakhstani Specialists</div>
                        <div className={classes.formButton}>For Worldwide Specialists</div>
                    </div>
                </div>
            </div>
            <div className={classes.partnerFacts}>
                <div className={classes.partnerFactsContainer}>
                    <h2 className={classes.partnerFactsTitle}>Why to bacome a medical <br/> partner on Innr?</h2>
                    <div className={classes.partnerFact}>
                        <img src={number1} alt=""/>
                        <h3>Why to bacome a medical partner on Innr?</h3>
                    </div>
                    <div className={classes.partnerFact}>
                        <h3>Why to bacome a medical partner on Innr?</h3>
                        <img src={number2} alt=""/>
                    </div>
                    <div className={classes.partnerFact}>
                        <img src={number3} alt=""/>
                        <h3>Why to bacome a medical partner on Innr?</h3>
                    </div>
                </div>
            </div>

            <div className={classes.question}>
                <div className={classes.questionContainer}>
                    <h2 className={classes.questionTitle}>Do you have questions? <img src={dividerLine} alt=""/></h2>

                    <p className={classes.email}>Contact Us: innr@gmail.com <img src={arrowLeft} alt=""/></p>
                </div>
            </div>
        </div>
    );
};

export default PartnerForm;