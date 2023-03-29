import React from 'react';
import classes from "./description.module.css";
import smile from '../../assets/smile.svg'
import phone from '../../assets/phone.svg'

import firstIcon from '../../assets/facts_places/first-icon.svg'
import secondIcon from '../../assets/facts_places/second-icon.png'
import thirdIcon from '../../assets/facts_places/third-icon.png'
import forthIcon from '../../assets/facts_places/forth-icon.png'

const Description = () => {
    return (
        <div className={classes.description}>
            <div className={classes.title}>
                <h2>All in 1 App</h2>
                <img src={smile} alt=""/>
            </div>
            <div className={classes.facts}>
                <div className={classes.factsItems}>
                    <div className={classes.factsItem}>
                        <img src={firstIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            Diagnostics of your problems in 30 sec
                        </div>
                    </div>
                    <div className={classes.factsItem}>
                        <img src={secondIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            Diagnostics of your problems in 30 sec
                        </div>
                    </div>
                    <div className={classes.factsItem}>
                        <img src={thirdIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            Diagnostics of your problems in 30 sec
                        </div>
                    </div>
                    <div className={classes.factsItem}>
                        <img src={forthIcon} alt=""/>
                        <div className={classes.factsDesc}>
                            Diagnostics of your problems in 30 sec
                        </div>
                    </div>
                </div>

                <img className={classes.phoneImg} src={phone} alt=""/>
            </div>
        </div>
    );
};

export default Description;