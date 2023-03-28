import React from 'react';
import classes from "./footer.module.css";
import instagramIcon from '../../assets/instagram-icon.svg'
import tiktokIcon from '../../assets/tiktok-icon.svg'


const Footer = () => {
    return (
        <footer>
            <p>innr@gmail.com</p>
            <p>Copyright © 2023 Innr. </p>

            <div className={classes.footerIcons}>
                <a href=""><img src={instagramIcon} alt=""/></a>
                <a href=""><img src={tiktokIcon} alt=""/></a>
            </div>
        </footer>
    );
};

export default Footer;