import React from 'react';
import classes from './header.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Header = ({handleClick, t}) => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <a href="" style={{textDecoration: 'none'}} ><Link to="/"  className={classes.headerLogo}>Innr</Link></a>
                <div className={classes.nav}>
                    <ul className={classes.menu}>
                        <a href=""><Link to="/">{t('HeaderLinks.1')}</Link></a>
                        <a href=""><Link to="/partnership">{t('HeaderLinks.2')}</Link></a>
                    </ul>
                    <div className={classes.headerLanguages}>
                        <div onClick={() => handleClick('en')} className={classes.headerLanguagesBtn}>
                            ENG
                        </div>
                        <div onClick={() => handleClick('ru')} className={classes.headerLanguagesBtn}>
                            RU
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Header;