import React from 'react';
import classes from "./partnerForm.module.css";
import number1 from  '../../assets/number1.png'
import number2 from  '../../assets/number2.png'
import number3 from  '../../assets/number3.png'

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
            <div>
                <h2>Why to bacome a medical partner on Innr?</h2>
                <div>
                    <img src={number1} alt=""/>
                    <h3>Why to bacome a medical partner on Innr?</h3>
                </div>
                <div>
                    <h3>Why to bacome a medical partner on Innr?</h3>
                    <img src={number2} alt=""/>
                </div>
                <div>
                    <img src={number3} alt=""/>
                    <h3>Why to bacome a medical partner on Innr?</h3>
                </div>
            </div>
        </div>
    );
};

export default PartnerForm;