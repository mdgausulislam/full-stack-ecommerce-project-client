import React from 'react';
import banner1 from '../../assets/images/slider-1.png';
import banner2 from '../../assets/images/slider-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="container mt-3">
            <div className='homeBannerSection'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    loop={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner1} alt="Banner 1" className='w-100' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <img src={banner2} alt="Banner 2" className='w-100' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeBanner;
