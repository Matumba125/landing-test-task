import React from 'react';
import style from './footer.module.scss'
import Logo from "../../../shared/ui/logo";
import facebook from '../../../shared/icons/footer/facebook.png'
import twitter from '../../../shared/icons/footer/twitter.png'
import google from '../../../shared/icons/footer/google.png'
import linkedin from '../../../shared/icons/footer/linkedin.png'
import BlogItem from "./blogItem";
import {blogItems} from "./utils";
import ContactUs from "./contactUs";

const Footer = () => {
    return (
        <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
            <div className={style.mainInfo}>
                <Logo/>
                <div className={style.infoWrapper}>
                    <div className={style.address}>
                        <h2>Address:</h2>
                        <span>28 Jackson Btvd Ste</span>
                        <span>1020 Chicago</span>
                        <span>IL 60604-2340</span>
                    </div>
                    <div className={style.contactInfo}>
                        <h2>Phone:</h2>
                        <span>800-2345-6789</span>
                        <h2>E-Mail:</h2>
                        <span>info@demolink.org</span>
                    </div>
                </div>
                <div className={style.linksWrapper}>
                    <img src={facebook} alt={'facebook'}/>
                    <img src={twitter} alt={'twitter'}/>
                    <img src={google} alt={'google'}/>
                    <img src={linkedin} alt={'linkedin'}/>
                </div>
            </div>
            <div className={style.blogWrapper}>
                <h1>Latest from the blog</h1>
                {blogItems.map((el, index)=>{
                   return( <BlogItem key={index} data={el}/>)
                })}
            </div>
            <div>
                <ContactUs/>
            </div>
        </div>
            <div className={style.copyright}>
                <p>Jedi © 2017. <span>Privacy Policy</span></p>
            </div>
        </div>
    );
};

export default Footer;