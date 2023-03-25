import React from 'react';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerLogo}>
            </div>
            <div className={classes.headerLanguages}>
                <button className={classes.headerLanguagesBtn}>
                    ENG
                </button>
                <button className={classes.headerLanguagesBtn}>
                    RU
                </button>
            </div>
        </div>

    );
};

export default Header;