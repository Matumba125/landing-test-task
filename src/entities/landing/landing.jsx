import React from 'react';
import Header from "./header/header";
import Home from "./home/home";
import Portfolio from "./portfolio/portfolio";
import Features from "./features/features";
import Footer from "./footer/footer";
import style from "./landing.module.scss"
import MobileHeader from "./header/mobileHeader";

const Landing = () => {
    return (
        <div className={style.landingWrapper}>
            <Header/>
            <MobileHeader/>
            <Home/>
            <Portfolio/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Landing;