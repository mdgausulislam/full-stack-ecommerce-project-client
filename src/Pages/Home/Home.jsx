import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import sideBanner1 from '../../assets/images/sidebar1.PNG'
import sideBanner2 from '../../assets/images/sidebar2.PNG'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../Components/ProductItem/ProductItem';
import HomeCategory from '../../Components/HomeCategory/HomeCategory';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {

    return (
        <div>
            <HomeBanner />
            <HomeCategory />
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={sideBanner1} alt="sideBanner" className='cursor w-100' />
                                </div>

                                <div className="banner mt-3">
                                    <img src={sideBanner2} alt="sideBanner" className='cursor w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info W-75">
                                    <h3 className='mb-0 hd'>BEST SELLERS</h3>
                                    <p className='dark-info text-sml mb-0'>Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
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
                                </Swiper>
                            </div>



                            <div className="d-flex align-items-center mt-5">
                                <div className="info W-75">
                                    <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                                    <p className='dark-info text-sml mb-0'>New products with updated stocks.</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>

                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner1} alt="sideBanner" className='cursor w-100' />
                                </div>
                                <div className="banner">
                                    <img src={banner2} alt="sideBanner" className='cursor w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLetter />
        </div>
    );
};

export default Home;