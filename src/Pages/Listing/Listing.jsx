import React, { useState } from 'react';
import SideBar from '../../Components/Sidebar/SideBar';
import './Listing.css'
import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/slider-1.png';
import { Button } from '@mui/material';
import { IoIosMenu } from 'react-icons/io';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { HiViewGrid } from 'react-icons/hi';
import { CgMenuGridR } from 'react-icons/cg';
import { FaAngleDown } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four')

    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='product_Listing_Page'>
            <div className="container">
                <div className="productListing d-flex">
                    <SideBar />

                    <div className="content_Right">
                        <Link to='#'><img src={banner1} alt="" className='w-100' style={{ borderRadius: "5px" }} /></Link>

                        <div className="showBy mt-3 mb-3 d-flex align-items-center">
                            <div className="d-flex align-items-center btnWrapper">
                                <Button className={productView === 'one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                                <Button className={productView === 'two' && 'act'} onClick={() => setProductView('two')}><HiViewGrid /></Button>
                                <Button className={productView === 'three' && 'act'} onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                                <Button className={productView === 'four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                            </div>

                            <div className="ml-auto showByFilter">
                                <Button onClick={handleClick}>Show 9<FaAngleDown /></Button>
                                <Menu
                                    className='w-100 showPerPageDropDown'
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openDropDown}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>10</MenuItem>
                                    <MenuItem onClick={handleClose}>20</MenuItem>
                                    <MenuItem onClick={handleClose}>30</MenuItem>
                                    <MenuItem onClick={handleClose}>40</MenuItem>
                                    <MenuItem onClick={handleClose}>50</MenuItem>
                                    <MenuItem onClick={handleClose}>60</MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <div className="productListing">
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                            <ProductItem itemVIew={productView} />
                        </div>

                        <div className="d-flex align-items-center justify-items-center mt-5" size="large">
                            <Pagination count={10} color="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;