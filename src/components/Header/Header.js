import React from 'react';
import classes from './header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <a href="" style={{textDecoration: 'none'}} ><Link to="/"  className={classes.headerLogo}>Innr</Link></a>
                <div className={classes.nav}>
                    <ul className={classes.menu}>
                        <a href=""><Link to="/">Home</Link></a>
                        <a href=""><Link to="/partnership">Partnership</Link></a>
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