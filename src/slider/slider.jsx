import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    return (
        <div className="container">
            <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                navigation>
                <SwiperSlide><img className="cert" src={require("../img/cert1.png")} alt="img"/></SwiperSlide>
                <SwiperSlide><img className="cert" src={require("../img/cert2.png")} alt="img"/></SwiperSlide>
                <SwiperSlide><img className="cert" src={require("../img/cert3.png")} alt="img"/></SwiperSlide>
                <SwiperSlide><img className="cert" src={require("../img/cert4.png")} alt="img"/></SwiperSlide>
            </Swiper>
        </div>
    );
};