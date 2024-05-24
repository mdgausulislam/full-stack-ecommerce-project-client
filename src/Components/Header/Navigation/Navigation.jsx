import { Button } from '@mui/material';
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarNav] = useState(true);
    return (
        <nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button className='allCatTab align-items-center' onClick={() => setisOpenSidebarNav(!isOpenSidebarVal)}>
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`sideBarNav ${!isOpenSidebarVal === true ? "open" : ""}`}>
                                <ul>
                                    <li><Link to={"/"}><Button>Men <FaAngleRight className='ml-auto' /></Button></Link>
                                        <div className="subMenu">
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to={"/"}><Button>Women<FaAngleRight className='ml-auto' /></Button></Link>
                                        <div className="subMenu">
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                        </div></li>
                                    <li><Link to={"/"}><Button>Men<FaAngleRight className='ml-auto' /></Button></Link>
                                        <div className="subMenu">
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                            <Link to={"/"}><Button>Clothes</Button></Link>
                                            <Link to={"/"}><Button>Shirt</Button></Link>
                                            <Link to={"/"}><Button>Jeans</Button></Link>
                                        </div></li>
                                    <li><Link to={"/"}><Button>Men</Button></Link></li>
                                    <li><Link to={"/"}><Button>Men</Button></Link></li>
                                    <li><Link to={"/"}><Button>Men</Button></Link></li>
                                    <li><Link to={"/"}><Button>Men</Button></Link></li>
                                    <li><Link to={"/"}><Button>Men</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 d-flex align-items-center navPart2 ">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to={"/"}><Button>Home</Button></Link></li>
                            <li className="list-inline-item">
                                <Link to={"/"}><Button>Men</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to={"/"}><Button>Clothes</Button></Link>
                                    <Link to={"/"}><Button>Shirt</Button></Link>
                                    <Link to={"/"}><Button>Jeans</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Women</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to={"/"}><Button>Clothes</Button></Link>
                                    <Link to={"/"}><Button>Shirt</Button></Link>
                                    <Link to={"/"}><Button>Jeans</Button></Link>
                                </div></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Doctor</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to={"/"}><Button>Clothes</Button></Link>
                                    <Link to={"/"}><Button>Shirt</Button></Link>
                                    <Link to={"/"}><Button>Jeans</Button></Link>
                                </div></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Beauty</Button></Link>
                                <div className="subMenu shadow">
                                    <Link to={"/"}><Button>Clothes</Button></Link>
                                    <Link to={"/"}><Button>Shirt</Button></Link>
                                    <Link to={"/"}><Button>Jeans</Button></Link>
                                </div></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Watch</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Mobiles</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"}><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;