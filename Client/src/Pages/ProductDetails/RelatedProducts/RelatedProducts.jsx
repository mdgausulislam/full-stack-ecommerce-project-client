import React from 'react';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './RelatedProducts.css'

const RelatedProducts = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <div className="info W-75">
                    <h3 className='mb-0 hd'>{props.title}</h3>
                </div>

            </div>

            <div className="product_row w-100 mt-4 product-1">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
};

export default RelatedProducts;