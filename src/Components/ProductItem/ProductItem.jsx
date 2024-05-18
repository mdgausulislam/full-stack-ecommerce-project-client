import React from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

import productImg1 from "../../assets/images/product img/1.PNG"
import productImg2 from "../../assets/images/product img/2.PNG"
import productImg3 from "../../assets/images/product img/3.PNG"
import productImg4 from "../../assets/images/product img/4.PNG"
import productImg5 from "../../assets/images/product img/5.PNG"
import { Button } from '@mui/material';


const ProductItem = () => {
    return (
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={productImg1} alt="product Imgage" className='w-100' />
                <span className="badge badge-primary">26%</span>
                <div className="action">
                    <Button><AiOutlineFullscreen /></Button>
                    <Button><FaRegHeart style={{ fontSize: '20px' }} /></Button>
                </div>
            </div>
            <div className='info'>
                <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
                <span className='text-success d-block'>IN STOCK</span>
                <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                <div className="d-flex">
                    <span className='oldPrice'>$20.00</span>
                    <span className='netPrice text-danger '>$18.00</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;