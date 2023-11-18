import React, { useState } from 'react';
import YouTube from 'react-youtube';
import image1 from './../../../assets/images/recaptcha.png';
import { TfiFacebook } from 'react-icons/tfi';
// import { FaFacebookSquare } from "react-icons/fa";
import img from '../../../assets/images/google-icon.png'
import img2 from '../../../assets/images/facebook-icon.png'
import './Login.css';

const Login = () => {
    const [selectedContent, setSelectedContent] = useState('overview');

    const handleContentClick = (content) => {
        setSelectedContent(content);
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div>
            {/* Title part */}
            <div className='p-24 container mx-auto bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>
                    My Business
                </h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28 lg:w-60 px-5 text-white bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr
                    className='absolute lg:block hidden left-0 top-64 mt-3 w-full'
                    style={{
                        border: '3px solid #291958',
                        borderRadius: '5px 5px 5px 5px',
                    }}
                />
            </div>

            {/* Form and video player */}
            <div className='flex flex-col lg:flex-row lg:w-full mt-5 container m-10 p-10 mx-auto '>
                <div className='lg:w-1/2'>
                    <div className='px-4'>
                        <div className='flex w-full'>
                            <button
                                style={{ border: '2px solid #774e88', borderRadius: '10px  0 0 10px' }}
                                onClick={() => handleContentClick('overview')}
                                className={`flex-1 py-2 px-4 border  text-[#774e88] bg-white focus:outline-none ${selectedContent === 'overview' ? 'active' : ''
                                    }`}
                            >
                                <span className='btm-nav-label'>Login</span>
                            </button>
                            <button
                                style={{ border: '2px solid #774e88', borderRadius: '0  10px 10px 0' }}
                                onClick={() => handleContentClick('businessActivity')}
                                className={`flex-1 py-2 px-4 border text-[#774e88] bg-white focus:outline-none ${selectedContent === 'businessActivity' ? 'active' : ''
                                    }`}
                            >
                                <span className='btm-nav-label'>Register</span>
                            </button>
                        </div>

                        <div className='p-2  lg:w-full lg:h-full'>
                            {selectedContent === 'overview' && (
                                <>
                                    {/* Form section start */}
                                    <form>
                                        <div className='flex items-center mt-6 rounded-none'>
                                            <input
                                                name='email'
                                                type='text'
                                                placeholder='Enter Email'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>

                                        <div className='mt-10 flex items-center rounded-none'>
                                            <input
                                                name='password'
                                                type='password'
                                                placeholder='Enter Password'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>

                                        <div className='flex justify-between mt-4'>
                                            <div className='mb-4 flex items-center'>
                                                <input
                                                    type='checkbox'
                                                    id='rememberMe'
                                                    name='rememberMe'
                                                    className='form-checkbox h-5 w-5 text-blue-500'
                                                />
                                                <label htmlFor='rememberMe' className='ml-2 text-gray-600'>
                                                    Remember me
                                                </label>
                                            </div>
                                            <label>
                                                <button className='label-text-alt link link-hover font-semibold text-sm'>
                                                    Forgot password?
                                                </button>
                                            </label>
                                        </div>
                                        <img className='w-2/6' src={image1} alt='' />
                                        <div className='mt-10 flex justify-center '>
                                            <button className='btn bg-[#774e88] text-white hover:bg-[#0d6efd] ease-in-out duration-200 items-center'>
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                    {/* Social login section start */}
                                    <div className='w-[100%] max-w-2xl mx-auto mt-7'>
                                        {/* Divider */}
                                        <div className='divider mb-4'>OR</div>
                                    </div>

                                    {/* <div style={{ borderRadius: '50px' }} className='bg-white w-20 h-20 text-center flex items-center justify-center hover:shadow-xl '>
                                        <h2 className='mt-2'>G</h2>
                                    </div> */}
                                    <div className='flex justify-center items-center gap-5'>
                                        <div
                                            style={{ borderRadius: '50px' }}
                                            className='bg-white w-16 h-16 text-center flex items-center justify-center gem-box'
                                        >
                                            <h2 className='mt-2'>
                                                <img src={img2} alt="" />
                                            </h2>
                                        </div>
                                        <div
                                            style={{ borderRadius: '50px' }}
                                            className='bg-white w-16 h-16 text-center flex items-center justify-center gem-box'
                                        >
                                            <h2 className='mt-2'>
                                                <img src={img} alt="" />
                                            </h2>
                                        </div>
                                    </div>


                                </>
                            )}

                            {selectedContent === 'businessActivity' && (
                                <>
                                    <form>
                                        <div className='flex items-center mt-6 rounded-none'>
                                            <input
                                                name='FirstName'
                                                type='text'
                                                placeholder='First Name'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>
                                        <div className='flex items-center my-9 rounded-none'>
                                            <input
                                                name='LastName'
                                                type='text'
                                                placeholder='Last Name'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>
                                        <div className='flex items-center rounded-none'>
                                            <input
                                                name='email'
                                                type='email'
                                                placeholder='Enter Email'
                                                className='py-4 px-2 w-full  font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>

                                        <div className='mt-10 flex items-center rounded-none'>
                                            <input
                                                name='password'
                                                type='password'
                                                placeholder='Enter Password'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>
                                        <div className='mt-10 flex items-center rounded-none'>
                                            <input
                                                name='ConfirmPassword'
                                                type='password'
                                                placeholder='Confirm Password'
                                                className='py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0'
                                                required
                                            />
                                        </div>

                                        <div className='mb-4 mt-6 flex items-center'>
                                            <input
                                                type='checkbox'
                                                id='rememberMe'
                                                name='rememberMe'
                                                className='form-checkbox h-5 w-5 text-blue-500'
                                            />
                                            <label htmlFor='rememberMe' className='ml-2 text-gray-600'>
                                                I have read and agree to the business market terms
                                            </label>
                                        </div>

                                        <div className='mb-4 flex items-center'>
                                            <input
                                                type='checkbox'
                                                id='rememberMe'
                                                name='rememberMe'
                                                className='form-checkbox h-5 w-5 text-blue-500'
                                            />
                                            <label htmlFor='rememberMe' className='ml-2 text-gray-600'>
                                                Remember me
                                            </label>
                                        </div>

                                        <img className='w-2/6' src={image1} alt='' />
                                        <div className='mt-10 flex justify-center '>
                                            <button className='btn bg-[#774e88] text-white hover:bg-[#0d6efd] ease-in-out duration-200 items-center'>
                                                Register
                                            </button>
                                        </div>

                                        {/* Divider */}
                                        <div className='divider mb-4'>OR</div>

                                        <div className='flex justify-center '>
                                            <div className='bg-[#3B5998] text-white p-6'>
                                                <TfiFacebook></TfiFacebook>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4'>
                    <div className='lg:hidden mb-5'>
                        <YouTube videoId='zLCcLmm-0_U' opts={{ ...opts, width: '100%' }} onReady={onReady} />
                    </div>
                    <div className='hidden lg:block'>
                        <div className='w-full lg:w-96 mx-auto'>
                            <YouTube videoId='zLCcLmm-0_U' opts={opts} onReady={onReady} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
