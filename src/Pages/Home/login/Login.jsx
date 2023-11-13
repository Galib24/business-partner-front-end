import React, { useState } from 'react';
import YouTube from 'react-youtube';
import image1 from './../../../assets/images/recaptcha.png'
import { TfiFacebook } from 'react-icons/tfi';
import './Login.css'

import { BiLinkExternal } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Login = () => {

    const [selectedContent, setSelectedContent] = useState('overview');

    const handleContentClick = (content) => {
        setSelectedContent(content);
        // Add your logic or state updates as needed
    };

    // youtube function
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,  // Set to 0 to disable autoplay
        },
    };

    const onReady = (event) => {
        // Access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
    return (
        <div>
            {/* title part */}
            <div className='p-24    w-full   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>My Business</h2>
                <div className='hidden sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            {/* form and video player  */}
            <div>
           

                <div className='absolute overflow-clip top-72 left-28'>
                    <hr className='bg-red-400' style={{ border: '2px solid black' }} />
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl'>Welcome, </h1>
                        <h2 className='text-2xl text-[#774e88]'>LOGIN/REGISTER</h2>
                    </div>
                </div>
                <div className='grid  lg:grid-cols-12 lg:w-fit mt-5 container m-10 p-10 mx-auto '>
                    <div className='col-span-6'>
                        <div
                            className="px-4">
                            <div className="flex  w-full">
                                <button
                                    style={{ border: '2px solid #774e88', borderRadius: '10px  0 0 10px' }}
                                    onClick={() => handleContentClick('overview')}
                                    className={`flex-1 py-2 px-4 border  text-[#774e88] bg-white focus:outline-none ${selectedContent === 'overview' ? 'active' : ''
                                        }`}
                                >
                                    <span className="btm-nav-label">Login</span>
                                </button>
                                <button
                                    style={{ border: '2px solid #774e88', borderRadius: '0  10px 10px 0' }}
                                    onClick={() => handleContentClick('businessActivity')}
                                    className={`flex-1 py-2 px-4 border text-[#774e88] bg-white focus:outline-none ${selectedContent === 'businessActivity' ? 'active' : ''
                                        }`}
                                >
                                    <span className="btm-nav-label">Register</span>
                                </button>
                            </div>

                            <div className="p-2 ml-3 w-full h-full">
                                {selectedContent === 'overview' && (
                                    <>
                                        {/* form section start */}
                                        <form
                                        >
                                            <div
                                                className="flex items-center  rounded-none">

                                                <input
                                                    name="email"
                                                    type="text"
                                                    placeholder="Enter Email"

                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>

                                            <div
                                                className="mt-10 flex items-center rounded-none">

                                                <input
                                                    name="password"
                                                    type='password'
                                                    placeholder="Enter Password"
                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>

                                            <div className='flex justify-between mt-4'>
                                                <div className="mb-4 flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="rememberMe"
                                                        name="rememberMe"
                                                        className="form-checkbox h-5 w-5 text-blue-500"
                                                    />
                                                    <label htmlFor="rememberMe" className="ml-2 text-gray-600">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <label
                                                >
                                                    <button

                                                        className="label-text-alt link link-hover font-semibold text-sm" >
                                                        Forgot password?
                                                    </button>
                                                </label>
                                            </div>
                                            <img className='w-2/6' src={image1} alt="" />
                                            <div className='mt-10 flex justify-center '>
                                                <button className='btn bg-[#774e88] text-white hover:bg-[#0d6efd] ease-in-out duration-200 items-center'>Login</button>
                                            </div>

                                        </form>

                                        {/* social login section start */}
                                        <div
                                            className="w-[100%] max-w-2xl mx-auto mt-7">
                                            {/* divider */}
                                            <div
                                                className="divider mb-4">
                                                OR
                                            </div>



                                        </div>


                                    </>
                                )}

                                {selectedContent === 'businessActivity' && (
                                    <>
                                        <form
                                        >
                                            <div
                                                className="flex items-center mt-6 rounded-none">

                                                <input
                                                    name="FirstName"
                                                    type="text"
                                                    placeholder="First Name"

                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>
                                            <div
                                                className="flex items-center my-9  rounded-none">

                                                <input
                                                    name="LastName"
                                                    type="text"
                                                    placeholder="Last Name"

                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>
                                            <div
                                                className="flex items-center  rounded-none">

                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter Email"

                                                    className="py-4 px-2 w-full  font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>

                                            <div
                                                className="mt-10 flex items-center rounded-none">

                                                <input
                                                    name="password"
                                                    type='password'
                                                    placeholder="Enter Password"
                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>
                                            <div
                                                className="mt-10 flex items-center rounded-none">

                                                <input
                                                    name="ConfirmPassword"
                                                    type='password'
                                                    placeholder="Confirm Password"
                                                    className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                                                    required />
                                            </div>

                                            <div className="mb-4 mt-6 flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    className="form-checkbox h-5 w-5 text-blue-500"
                                                />
                                                <label htmlFor="rememberMe" className="ml-2 text-gray-600">
                                                    I have read and agree the business market term
                                                </label>
                                            </div>


                                            <div className="mb-4 flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    className="form-checkbox h-5 w-5 text-blue-500"
                                                />
                                                <label htmlFor="rememberMe" className="ml-2 text-gray-600">
                                                    Remember me
                                                </label>
                                            </div>

                                            <img className='w-2/6' src={image1} alt="" />
                                            <div className='mt-10 flex justify-center '>
                                                <button className='btn bg-[#774e88] text-white hover:bg-[#0d6efd] ease-in-out duration-200 items-center'>Register</button>
                                            </div>

                                            {/* divider */}
                                            <div
                                                className="divider mb-4">
                                                OR
                                            </div>

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
                    <div className='col-span-6'>
                        <YouTube
                            videoId="zLCcLmm-0_U"  // Replace with your actual video ID
                            opts={opts}
                            onReady={onReady}
                            className='ml-5'
                        />
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Login;