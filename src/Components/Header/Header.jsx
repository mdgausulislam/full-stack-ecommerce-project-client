import React from 'react';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom';
import CountryDropDown from '../CountryDropDown/CountryDropDown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';



const Header = () => {

    const context = useContext(MyContext)

    return (
        <div className='headerWrapper'>
            <div className='top-strip bg-blue'>
                <div className='container'>
                    <p className='mb-0 mt-0 text-center'>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                </div>
            </div>

            <header className='header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='logowrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}>   <img src={Logo} alt="logo image" /></Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>

                            {
                                context.countryList.length !== 0 && <CountryDropDown />
                            }


                            {/* header search start */}
                            <SearchBox />
                            {/* header search end */}


                            <div className="part3 d-flex align-items-center ml-auto">

                                {
                                    context.isLoging !== true ? <Link to='/signIn'> <Button className='btn-blue btn-round mr-3'>Sign In</Button></Link> :
                                        <Button className='circle mr-3'><FiUser /></Button>
                                }

                                <div className="ml-auto cartTab d-flex align-items-center">
                                    <span className='price'>$3.29</span>
                                    <div className="position-relative ml-2">
                                        <Link to='/cart'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </header>


            <Navigation />
        </div>
    );
};

export default Header;