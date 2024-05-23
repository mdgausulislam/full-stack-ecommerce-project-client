import { Dialog, Rating } from '@mui/material';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import './ProductModal.css'
import QuantityBox from '../QuantityBox/QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import ProductZoom from '../ProductZoom/ProductZoom';
import { MyContext } from '../../App';


const ProductModal = (props) => {
    const context = useContext(MyContext)

    return (
        <>
            <Dialog open={context.isOpenProductModal} className='productModal' onClose={() => context.setisOpenProductModal()} >
                <Button className='close_' onClick={() => context.setisOpenProductModal()}><MdClose /></Button>
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
                        <ProductZoom />
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

                        <hr />


                    </div>
                </div>


            </Dialog >
        </>
    );
};

export default ProductModal;