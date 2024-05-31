import React from 'react';
import Navigation from "../../../shared/ui/navigation";
import style from './header.module.scss'
import Logo from "../../../shared/ui/logo";

const navList = [
    'home', 'portfolio', 'features', 'blog'
]

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <Logo isWhite />
            <Navigation navList={navList} isHeader={true}/>
        </div>
    );
};

export default Header;