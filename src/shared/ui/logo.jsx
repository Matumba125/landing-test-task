import React from 'react';
import style from './logo.module.scss'
import whiteLogo from '../icons/landingHeader/logo.png'
import blackLogo from '../icons/footer/logo.png'
import whiteText from '../icons/landingHeader/name.png'
import blackText from '../icons/footer/name.png'

const Logo = ({isWhite}) => {
    return (
        <div className={style.logoWrapper}>
            <img src={isWhite ? whiteLogo : blackLogo} alt={"logo"}/>
            <div className={style.textWrapper}>
                <img src={isWhite ? whiteText : blackText} alt={'text'}/>
                <span style={{color: isWhite ? '#212529' : '#8C8C8C'}}>May the Joomla be with you</span>
            </div>
        </div>
    );
};

export default Logo;