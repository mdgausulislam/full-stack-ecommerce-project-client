import React, { useState } from 'react';
import './ProductDetails.css'
import { Button, Rating, Tooltip } from '@mui/material';
import ProductZoom from '../../Components/ProductZoom/ProductZoom';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { BsCartFill } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { LuArrowUpDown } from 'react-icons/lu';
import RelatedProducts from './RelatedProducts/RelatedProducts';

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

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

                            </div>

                        </div>
                    </div>

                    <br />

                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(0)

                                        }}
                                    >Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(1)

                                        }}
                                    >Additional info</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(2)
                                        }}
                                    >Reviews (3)</Button>
                                </li>

                            </ul>


                            <br />

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>
                                    <p>currentProduct</p>
                                </div>

                            }


                            {
                                activeTabs === 1 &&

                                <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr class="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            }



                            {
                                activeTabs === 2 &&

                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>Customer questions & answers</h3>
                                            <br />

                                            <div className='card p-4 reviewsCard flex-row'>
                                                <div className='image'>
                                                    <div className='rounded-circle'>
                                                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                                    </div>
                                                    <span className='text-g d-block text-center font-weight-bold'>Hemo</span>
                                                </div>


                                                <div className='info pl-5'>
                                                    <div className='d-flex align-items-center w-100'>
                                                        <h5 className='text-light'>07/01/2000</h5>
                                                        <div className='ml-auto'>
                                                            <Rating name="half-rating-read"
                                                                value={4.5} precision={0.5} readOnly size='small' />
                                                        </div>
                                                    </div>

                                                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                                </div>

                                            </div>

                                            <br className='res-hide' />

                                            <br className='res-hide' />



                                            <form className='reviewForm'>

                                                <h4>Add a review</h4>
                                                <div className='form-group'>
                                                    <textarea className='form-control' placeholder='Write a Review'
                                                        name="review"></textarea>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type='text' className='form-control' placeholder='Name' name='userName' />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <Rating name="rating" value={4.5} precision={0.5}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                                <br />
                                                <div className='form-group'>
                                                    <Button type='submit' className='btn-blue btn-lg btn-big btn-round'>Submit Review</Button>
                                                </div>

                                            </form>

                                        </div>




                                        <div className='col-md-4 pl-5 reviewBox'>
                                            <h4>Customer reviews</h4>

                                            <div className='d-flex align-items-center mt-2'>
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size='small' />
                                                <strong className='ml-3'>4.8 out of 5</strong>
                                            </div>

                                            <br />




                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>5 star</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '75%', height: '20px' }}>75%</div>
                                                </div>
                                            </div>


                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>4 star</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '50%', height: '20px' }}>50%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>3 star</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '55%', height: '20px' }}>55%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>2 star</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>1 star</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '25%', height: '20px' }}>25%</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            }

                        </div>
                    </div>

                    <br />

                    <RelatedProducts title='RELATED PRODUCTS'/>

                    <RelatedProducts title='RECENTLY VIEWED PRODUCTS'/>

                </div>
            </section>
        </>
    );
};

export default ProductDetails;
