import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import style from './home.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import image from '../../../shared/img/home/headImg.png'

const images = [
    {
        url: image,
    },    {
        url: image,
    },

];

const Home = () => {
    return (
        <div id={'home'} className={style.homeWrapper}>
            <Swiper
                slidesPerView={1}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                modules={[Navigation, Autoplay]}
                className={style.customSwiper}
                loop={true}
                direction='horizontal'
                style={{ '--swiper-navigation-color': 'white' }}
            >
                {images.map((image, index)=>{
                    return(
                        <SwiperSlide key={index} className={style.slide}>
                            <img src={image.url} alt={`homeImg${index}`}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Home;