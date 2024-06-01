import React from 'react';
import Logo from "../../../shared/ui/logo";
import Navigation from "../../../shared/ui/navigation";
import {navList} from "./header";
import style from './header.module.scss'

const Nav = () => {
    return (
        <div className={style.navWrapper}>
            <Logo isWhite />
            <Navigation navList={navList} isHeader={true}/>
        </div>
    );
};

export default Nav;