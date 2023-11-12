import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Login.css'

import { BiLinkExternal } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Login = () => {
    const [selectedContent, setSelectedContent] = useState('overview');

    const handleContentClick = (content) => {
        setSelectedContent(content);
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
        <>
            {/* title part */}
            <div className='p-24  bg bg-red-400'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>My Business</h2>
                <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  w-60 px-5 text-white bg-[#291958]'>
                    <h2>Home </h2>
                    <h2>My business</h2>
                </div>
                <hr className='absolute left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            {/* form and video player  */}
            <>


                <div className='grid grid-cols-2 mt-5 container mx-auto'>
                    <div>
                        <div
                            className="px-4">
                            <div>
                                <button onClick={() => handleContentClick('overview')} className='btn'>
                                    Login
                                </button>
                                <button onClick={() => handleContentClick('businessActivity')} className='btn'>
                                    Register
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

                                            <div>
                                                <input
                                                    className="ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4 rounded-lg hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9]"
                                                    type="submit"
                                                    value="Login" />
                                            </div>

                                        </form>

                                        {/* social login section start */}
                                        <div
                                            className="w-[100%] max-w-2xl mx-auto mt-7">
                                            {/* divider */}
                                            <div
                                                className="divider mb-4">
                                                Or
                                            </div>



                                        </div>


                                    </>
                                )}

                                {selectedContent === 'businessActivity' && (
                                    <>
                                        <Link to={'/overview'}>Overview</Link>
                                        <h1>My Profile</h1>
                                        <h1>My Business Profile</h1>
                                        <h1>Business Profile <br /> questioner</h1>
                                        <h1>Photo Gallery</h1>
                                        <h1>Video Gallery</h1>
                                        <h1>Upload Center</h1>
                                    </>
                                )}

                            </div>




                        </div>
                    </div>
                    <div>
                        <YouTube
                            videoId="zLCcLmm-0_U"  // Replace with your actual video ID
                            opts={opts}
                            onReady={onReady}
                        />
                    </div>
                </div>



            </>
        </>
    );
};

export default Login;