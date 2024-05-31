import React, {useState} from 'react';
import style from './navigation.module.scss'

const Navigation = ({navList, isHeader, selectEl}) => {

    const [selectedEl, setSelectedEl] = useState();

    const onElementClick = (el) => {
        setSelectedEl(el)
        selectEl && selectEl(el)
    }

    return (
        <div className={isHeader ? style.linksWrapper : style.navWrapper}>
            {navList.map((el, index) =>{
                return(
                    <div
                        key={index}
                        onClick={() => onElementClick(el)}
                        className={isHeader ? (selectedEl === el ? style.activeLink : style.link) : (selectedEl === el ? style.activeNav :style.navElement)}
                    >{el.toUpperCase()}</div>
                )
            })}
        </div>
    );
};

export default Navigation;