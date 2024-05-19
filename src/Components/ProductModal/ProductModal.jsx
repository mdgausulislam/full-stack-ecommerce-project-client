import { Dialog, Rating } from '@mui/material';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import './ProductModal.css'
import QuantityBox from '../QuantityBox/QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";


const ProductModal = (props) => {


    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()} >
                <Button className='close_' onClick={() => props.closeProductModal()}><MdClose /></Button>
                <h4 className="mb-1 font-weight-bold">Nestle Original Coffee-Mate Coffee Creamer</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className='ml-2'>Welc's <br /></span>
                    </div>
                    <div className="d-flex align-items-center mr-4">
                        <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                        <span className='ml-2'>I review <br /></span>
                    </div>
                    <div className="d-flex align-items-center mr-4">
                        <span>SKU:</span>
                        <span className='ml-2'>SOBFA7 <br /></span>
                    </div>


                </div>
                <hr />
                <div className="row mt-2 productDetailModal">
                    <div className="col-md-5">
                        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>28%</div>
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg`} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg`} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg`} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg`} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32.jpg`} />
                                </div>

                            </Slider>
                        </div>

                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg`} className='w-100' onClick={() => goto(0)} />
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg`} className='w-100' onClick={() => goto(1)} />
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg`} className='w-100' onClick={() => goto(2)} />
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg`} className='w-100' onClick={() => goto(3)} />
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-27.jpg`} className='w-100' onClick={() => goto(4)} />
                            </div>
                        </Slider>
                    </div>

                    <div className="col-md-7">
                        <div className="d-flex align-items-center info mb-3">
                            <span className='oldPrice'>$9.25</span>
                            <span className='netPrice text-danger mr-2'>$17.25</span>
                        </div>
                        <div className="badge bg-success"> IN STOCK</div>

                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>


                        <div className="d-flex align-items-center">
                            <QuantityBox />
                            <Button className='btn-blue btn-big btn-round ml-3'>Add to cart</Button>
                        </div>

                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className='btn-round btn-sml' variant="outlined"><IoIosHeartEmpty /> &nbsp;  ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-sml ml-4' variant="outlined"><LuArrowUpDown /> &nbsp;  COMPARE</Button>
                        </div>


                    </div>
                </div>


            </Dialog >
        </>
    );
};

export default ProductModal;