import React from 'react';
import Navigation from "../../../shared/ui/navigation";
import style from './portfolio.module.scss'
import img from '../../../shared/img/portfolio/img.png'
import img1 from '../../../shared/img/portfolio/img_1.png'
import img2 from '../../../shared/img/portfolio/img_2.png'


const navList = [
    'all', 'business', 'creative', 'portfolio', 'blog', 'infrastructure', 'industrial', 'other'
]

const Portfolio = () => {
    return (
        <div id={'Portfolio'} className={style.portfolioWrapper}>
            <h1>Our Projects</h1>
            <h2>Check out other themes based on <strong>JEDI</strong></h2>
            <Navigation navList={navList} isHeader={false}/>
            <div className={style.imagesWrapper}>
                <img src={img} alt={'portfolioImage1'}/>
                <img src={img1} alt={'portfolioImage1'}/>
                <img src={img2} alt={'portfolioImage1'}/>
            </div>
        </div>
    );
};

export default Portfolio;