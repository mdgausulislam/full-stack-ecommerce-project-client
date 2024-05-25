import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { IoIosClose } from 'react-icons/io';
import { IoCartSharp } from 'react-icons/io5';

const Cart = () => {
    return (
        <>
            <div className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-1">Your Cart</h2>
                    <p>There are <b className='text-red'>3</b> products in your Cart</p>
                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <div className="table-responsive">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th width='0%'>Product</th>
                                            <th width='1%'>Price</th>
                                            <th width='1%'>Quantity</th>
                                            <th width='10%'>Subtotal</th>
                                            <th width='20%'>Remove</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-600x600.jpg" alt="" className='w-100' />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>	Nestle Original Coffee-Mate Coffee Creamer</h6>
                                                            <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-600x600.jpg" alt="" className='w-100' />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>	Nestle Original Coffee-Mate Coffee Creamer</h6>
                                                            <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-600x600.jpg" alt="" className='w-100' />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>	Nestle Original Coffee-Mate Coffee Creamer</h6>
                                                            <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-600x600.jpg" alt="" className='w-100' />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>	Nestle Original Coffee-Mate Coffee Creamer</h6>
                                                            <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width='45%'>
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-600x600.jpg" alt="" className='w-100' />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>	Nestle Original Coffee-Mate Coffee Creamer</h6>
                                                            <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoIosClose /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border p-3 cartDetails">
                                <h4>Card Totals </h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>SubTotal</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>
                                    <span className='ml-auto '><b>Free</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Estimate for</span>
                                    <span className='ml-auto'><b>Bangladesh</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Total</span>
                                    <span className='ml-auto text-red font-weight-bold'>$12.31</span>
                                </div>
                                <br />
                                <Button className='bg-red btn-blue btn-lg btn-big'> <IoCartSharp className='mr-3' />Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;