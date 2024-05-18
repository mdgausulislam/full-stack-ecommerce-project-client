import React from 'react';
import Slider from "react-slick";
import banner1 from '../../assets/images/slider-1.png'
import banner2 from '../../assets/images/slider-2.png'

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return (
        <div className='homeBannerSection'>
            <Slider {...settings}>
                <div className='item'>
                    <img src={banner1} alt="" className='w-100' />
                </div>
                <div className='item'>
                    <img src={banner2} alt="" className='w-100' />
                </div>
            </Slider>

        </div>
    );
};

export default HomeBanner;