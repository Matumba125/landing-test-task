import React from 'react';
import {featuresList} from "./utils";
import style from './features.module.scss'


const Features = () => {
    return (
        <div id={'Features'} className={style.featuresWrapper}>
            <h1>More and More Features</h1>
            <div className={style.featuresList}>
            {featuresList.map((el, index) => {
                return(
                    <div key={index} className={style.feature}>
                        <div className={style.iconWrapper}>
                        <img src={el.icon} alt={el.title}/>
                        </div>
                        <h1>{el.title.toUpperCase()}</h1>
                        <p>{el.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default Features;