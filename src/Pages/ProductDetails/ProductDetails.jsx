import React, { useState } from 'react';
import './ProductDetails.css'
import { Button, Rating, Tooltip } from '@mui/material';
import ProductZoom from '../../Components/ProductZoom/ProductZoom';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { BsCartFill } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { LuArrowUpDown } from 'react-icons/lu';

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);

    const isActive = (index) => {
        setActiveSize(index);
    }


    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-8 pl-5 pr-5">
                            <h2 className='hd text-capitalize'>Nestle Original Coffee-Mate Coffee Creamer</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className='text-light mr-2'>Brands:</span>
                                        <span>welchs</span>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                        <span className='text-light cursor ml-2'>1 review <br /></span>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className='text-light mr-2'>SKU:</span>
                                        <span>SOBFA7</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center info mb-3">
                                <span className='oldPrice'>$9.25</span>
                                <span className='netPrice text-danger mr-2'>$17.25</span>
                            </div>
                            <div className="badge bg-success"> IN STOCK</div>

                            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className='productSize d-flex align-items-center'>
                                <span>Size/Weight:</span>
                                <ul className='list list-inline mb-0 pl-4'>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>250gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>500gm</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>1000gm</a></li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center pt-3">
                                <QuantityBox />
                                <Button className='btn-blue btn-big btn-round ml-3'> <BsCartFill /> &nbsp; Add to cart</Button>

                                <Tooltip title='Add to WishList' placement='top'>
                                    <Button className='btn-big btn-circle btn-round ml-4'> <IoIosHeartEmpty /></Button>
                                </Tooltip>

                                <Tooltip title='Add to Compare' placement='top'>
                                    <Button className='btn-lg btn-big btn-circle ml-4'> <LuArrowUpDown /></Button>
                                </Tooltip>


                                {/* <Button className='btn-round btn-sml' variant="outlined"> &nbsp;  ADD TO WISHLIST</Button>
                                <Button className='btn-round btn-sml ml-4' variant="outlined"><LuArrowUpDown /> &nbsp;  COMPARE</Button> */}


                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
