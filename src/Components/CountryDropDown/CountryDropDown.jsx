import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropDown = () => {
    const context = useContext(MyContext)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([])

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModal(false)
        context.setSelectedCountry(country)
    }
    useEffect(() => {
        setCountryList(context.countryList)
    }, [])


    const filterList = (e) => {

        const keyWord = e.target.value.toLowerCase();
        if (keyWord !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyWord)
            })
            setCountryList(list)
        } else {
            setCountryList(context.countryList)
        }


    }
    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>your location</span>
                    <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry : "Select Location"}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" name="" id="" placeholder='search your area...' onChange={filterList} />
                    <Button> <IoIosSearch /></Button>
                </div>
                <div className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab === index ? ' active ' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }
                </div>
            </Dialog>

        </>
    );
};

export default CountryDropDown;