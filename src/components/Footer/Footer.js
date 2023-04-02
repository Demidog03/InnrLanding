import React from 'react';
import classes from "./footer.module.css";
import instagramIcon from '../../assets/instagram-icon.svg'
import tiktokIcon from '../../assets/tiktok-icon.svg'


const Footer = () => {
    return (
        <footer>
            <p>innrapp@gmail.com</p>
            <p>Copyright © 2023 Innr. </p>

            <div className={classes.footerIcons}>
                <a href="https://instagram.com/innrapp?igshid=YmMyMTA2M2Y="><img src={instagramIcon} alt=""/></a>
                <a href="https://www.tiktok.com/@innrapp?_t=8b9inHub7xd&_r=1"><img src={tiktokIcon} alt=""/></a>
            </div>
        </footer>
    );
};

export default Footer;