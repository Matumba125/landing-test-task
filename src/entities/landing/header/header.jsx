import React from 'react';
import style from './header.module.scss'
import Nav from "./nav";
import MobileNav from "./mobileNav";

export const navList = [
    'Home', 'Portfolio', 'Features', 'Blog'
]

const Header = () => {

    document.addEventListener('scroll', ()=> {

        if (window.scrollY >= 400) {
            document.getElementById("head").className=(`${style.headerWrapper} ${style.unTransparentHeader}`)
        } else {
            document.getElementById("head").className=(style.headerWrapper)
        }
    });

    return (
        <div id={'head'} className={style.headerWrapper}>
            <Nav/>
            <MobileNav/>
        </div>
    );
};

export default Header;