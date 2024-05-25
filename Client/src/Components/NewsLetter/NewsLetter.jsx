import React from 'react';
import './NewsLetter.css';
import newsLetterImg from '../../assets/images/coupon.png'
import { CiMail } from "react-icons/ci";
import { Button } from '@mui/material';

const NewsLetter = () => {
    return (
        <div className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-0">
                        <p className='text-white'>$20 discount for your first order</p>
                        <h3 className='text-white'>Join our newsletter and get...</h3>
                        <p className='text-light'>oin our email subscription now to get updates on <br /> promotions and coupons.</p>
                        <form action="">
                            <CiMail />
                            <input type="text" placeholder='your email address...' className='' />
                            <Button>Subscriber</Button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src={newsLetterImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;