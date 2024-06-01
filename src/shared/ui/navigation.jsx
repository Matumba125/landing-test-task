import React, {useState} from 'react';
import style from './navigation.module.scss'
import {Link} from "react-scroll";

const Navigation = ({navList, isHeader, selectEl}) => {

    const [selectedEl, setSelectedEl] = useState();

    const onElementClick = (el) => {
        setSelectedEl(el)
        selectEl && selectEl(el)
    }

    return (
        <>
            {isHeader ?
                <div className={style.linksWrapper}>
                    {navList.map((el, index) => {
                        return (
                            <Link
                                key={index}
                                activeClass={style.activeLink}
                                className={style.link}
                                to={el}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                onClick={() => onElementClick(el)}
                            >{el.toUpperCase()}</Link>
                        )
                    })}
                </div>
                :
            <div className={style.navWrapper}>
                {navList.map((el, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => onElementClick(el)}
                            className={selectedEl === el ? style.activeNav : style.navElement}
                        >{el.toUpperCase()}</div>
                    )
                })}
            </div>
        }
        </>
    );
};

export default Navigation;