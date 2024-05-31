import React, {useState} from 'react';
import style from './header.module.scss'
import Logo from "../../../shared/ui/logo";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navigation from "../../../shared/ui/navigation";

const navList = [
    'Home', 'Portfolio', 'Features', 'Blog'
]

const MobileHeader = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [selectedItem, setSelectedItem] = useState(navList[0]);

    const onButtonClick = () =>{
        setOpenMenu(!openMenu)
    }

    const onItemClick = (item) =>{
        setSelectedItem(item)
    }


    return (
        <div className={style.mobileHeaderWrapper}>
            <div className={style.burgerWrapper}>
                <div className={style.openMenu} onClick={onButtonClick}>
                    <FontAwesomeIcon icon={faBars} className={style.icon}/>
                    <h1>{selectedItem}</h1>
                </div>
                <div className={openMenu ? `${style.navItems} ${style.show}`: style.navItems}>
                    <Navigation navList={navList} isHeader selectEl={onItemClick}/>
                </div>
            </div>
            <Logo isWhite/>
        </div>
    );
};

export default MobileHeader;