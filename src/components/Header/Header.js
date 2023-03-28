import React from 'react';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
            <h1>Innr</h1>
                <div className={classes.nav}>
                    <ul className={classes.menu}>
                        <a href="">Home</a>
                        <a href="">Partnership</a>
                    </ul>
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
        </div>

    );
};

export default Header;