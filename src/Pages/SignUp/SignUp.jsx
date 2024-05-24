import React, { useContext, useEffect } from 'react';
import Logo from "../../assets/images/logo.svg"
import './SignUp.css'
import { MyContext } from '../../App';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import googleImg from '../../assets/images/google.png'

const SignUp = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false)
    }, [])
    return (
        <div className="section signInPage signUpPage">
            <div class="shape-bottom"> <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enableBackground: 'new 0 0 1921 819.8;' }} > <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg> </div>
            <div className="container">
                <div className="card shadow border-0 box">
                    <div className="text-center">
                        <img src={Logo} alt="" />
                    </div>

                    <form className='mt-2' action="">
                        <h2 className='mb-2'>Sign Up</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="from-group">
                                    <TextField label="Name"
                                        type='text'
                                        required
                                        variant="standard"
                                        className='w-100' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="from-group">
                                    <TextField label="Phone No."
                                        type='text'
                                        required
                                        variant="standard"
                                        className='w-100' />
                                </div>
                            </div>
                        </div>



                        <div className="from-group">
                            <TextField id="standard-basic" label="Email"
                                type='email'
                                required
                                variant="standard"
                                className='w-100' />
                        </div>
                        <div className="from-group">
                            <TextField id="standard-basic" label="Password"
                                type='password'
                                required
                                variant="standard"
                                className='w-100' />
                        </div>

                        <div className="d-flex align-items-center mt-2 mb-2">
                            <div className="row w-100">
                                <div className="col-md-6">
                                    <Button className='btn-blue w-100 btn-lg btn-big'>Sign In</Button>
                                </div>
                                <div className="col-md-6 pr-0">
                                    <Link to='/' className='w-100 d-block'><Button className='btn-lg btn-big w-100' variant='outlined' onClick={() => context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
                                </div>
                            </div>

                        </div>
                        <p className='text-light txt'>Registered? <Link to='/signIn' className='border-effect'>Sign Up</Link></p>

                        <h6 className='mt-2 text-center font-weight-bold'>Or continue with social account</h6>

                        {/* <span className='cursor'><img src={googleImg} alt="google signin" className='w-100' style={{height:"70px"}} /></span> */}

                        <Button className='loginWithGoogle mt-2' variant='outlined'><img src={googleImg} alt="loginWithGoogle" />Sign In With Google</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;