import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

const CountryDropDown = () => {
    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>your location</span>
                    <span className='name'>Bangladesh</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
        </>
    );
};

export default CountryDropDown;