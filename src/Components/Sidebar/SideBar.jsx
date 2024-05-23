import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [value, setValue] = useState([100, 6000])
    const [value2, setValue2] = useState(0)
    return (
        <>
            <div className='sidebar'>
                <div className="sticky">
                    <div className="filterBox">
                        <h6>PRODUCT CATEGORIES</h6>
                        <div className="scroll">
                            <ul>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Men" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Women" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Beauty" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Watch" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="filterBox">
                        <h6>FILTER BY PRICE</h6>
                        <RangeSlider value={value} onInput={setValue} min={100} max={6000} step={5} />
                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span>From: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                            <span className='ml-auto'>From: <strong className='text-dark'>Rs: {value[1]}</strong></span>
                        </div>
                    </div>
                    <div className="filterBox">
                        <h6>PRODUCT STATUS</h6>
                        <div className="scroll">
                            <ul>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="In Stock" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="On sale" />
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="filterBox">
                        <h6>BRANDS</h6>
                        <div className="scroll">
                            <ul>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Fariota Lay" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Nespersso" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Oreo" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Quakers" />
                                </li>
                                <li> <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Wechles" />
                                </li>
                            </ul>
                        </div>

                    </div>

                    <Link to='#'><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" className='w-100' /></Link>
                </div>
            </div>
        </>
    );
};

export default SideBar;