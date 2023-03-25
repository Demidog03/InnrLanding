import React from 'react';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
            <div className={classes.headerLogo}>
            </div>
            <div className={classes.headerLanguages}>
                <div className={classes.headerLanguagesBtn}>
                    ENG
                </div>
                <div className={classes.headerLanguagesBtn}>
                    RU
                </div>
            </div>
            </div>
        </div>

    );
};

export default Header;