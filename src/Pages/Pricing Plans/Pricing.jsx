import React, { useEffect, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import './Pricing.css'
const Pricing = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [Monthly, setMonthly] = useState('overview'); // Set initial state to null
    const [Annually, setAnnually] = useState('Annually');

    const handleContentClick = (content) => {
        setActiveTab(content);
        setMonthly(content);
        setAnnually(content);


    };


    return (
        <>
            {/*title  */}
            <div className='p-24  container  mx-auto   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>My Business</h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute lg:block hidden left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            {/* section */}

            <div className='bg-white text-center w-full py-10'>
                <h2 style={{ fontSize: '28px' }} className=''>CHOOSE YOUR PLAN</h2>

                <div className='flex justify-center items-center mt-6 gap-4 '>
                    <div onClick={() => handleContentClick('Monthly')} className={`w-10 md:w-20 h-14 cursor-pointer ${Monthly === 'Monthly' ? 'bg-[#774e88] text-white' : 'bg-[#073855] text-white cursor-pointer'
                        } flex items-center justify-center border-r  border-white`}>
                        <h2>Monthly</h2>
                    </div>
                    <div onClick={() => handleContentClick('Annually')} className={`w-10 md:w-20 h-14 cursor-pointer ${Annually === 'Annually' ? 'bg-[#774e88] text-white' : 'bg-[#073855] text-white cursor-pointer'
                        } flex items-center justify-center border-r  border-white`}>
                        <h2>Annually</h2>
                    </div>
                </div>

                <div>
                    <p className='text-sm my-10'>Save Up to 50% with Annual Subscriptions</p>
                </div>


                {activeTab === 'overview' && (
                    <>
                        <div className='container mx-auto gap-6 flex flex-col md:flex-row h-auto w-full px-4 md:w-full xl:w-9/12 lg:px-16'>
                            <div style={{ border: '2px solid black' }} className='bg-white container mx-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] h-96 transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-[#808080] text-3xl font-bold'>
                                    <h2>Free Promo</h2>
                                </div>
                                <hr className='border-black' />
                                <div className='text-white  py-2 bg-[#073855]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44 '>PRESENTATION</h2>
                                </div>
                                <div className='text-black text-lg xl:mr-44 my-3'>
                                    <h2>Basic Profile</h2>
                                </div>
                                <hr className='border-black' />
                                <h2 className='text-black mr-24 my-2'>Upload up to one photo</h2>

                                <hr className='border-black' />
                                <h2 className='text-black  xl:mr-20 my-2'>Manage your promo 14/7</h2>
                                <hr className='border-black' />
                                <h2 className='text-black xl:mr-8 my-2'>One Free Promo Per Month Limit</h2>
                                <hr className='border-black' />

                                <div className='flex justify-center items-center py-2 bg-[#5a5a5a] hover:text-black  mt-3 mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md text-white'>
                                    <FaCheck></FaCheck>
                                    <h2>Select</h2>
                                </div>
                            </div>

                            <div style={{ border: '2px solid black' }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-[#1396e2] text-3xl font-bold'>
                                    <h2>Showcase</h2>
                                </div>
                                <hr className='border-black' />
                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$10</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-16 my-2'>Upload up to ten photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2'>Upload up to three videos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2 '>Manage your promo 24/7</h2>
                                <hr className='border-white' />
                                <div className='text-lg rounded-3xl bg-[#128dd4] py-2 mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='flex justify-center items-center py-2 mt-4 bg-[#128dd4] hover:text-black  mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md text-white '>
                                    <FaCheck ></FaCheck>
                                    <h2 >Select</h2>
                                </div>
                            </div>

                            <div style={{ border: '2px solid black', }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-red-600 text-3xl font-bold w-full'>
                                    <h2>Showcase Plus</h2>
                                    <div className='text-white py-5 absolute top-0  right-0 curve-mal   text-sm font-bold'>
                                        <h2 className='mt-4 ml-7'>Best Value</h2>
                                    </div>
                                </div>


                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$29</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Business Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-20 my-2'>Upload up to 10 photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-24 my-2'>Upload up to 3 videos</h2>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Creation</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Select from our video templates. Our team will produce a video for you.</h2>

                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Features </h2>
                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Promo Details</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Logo</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Photos</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Music</h2>
                                </div>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Marketing </h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Promoting your business on-Business Market  HUB social sites.</h2>
                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Sites </h2>
                                </div>

                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>YouTube</h2>

                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Facebook</h2>

                                </div>

                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Instagram</h2>

                                </div>
                                <hr className='border-white' />


                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Pinterest</h2>

                                </div>
                                <hr className='border-white' />
                                <h2 className='xl:mr-20'>Manage your promo 24/7</h2>
                                <div className='text-lg rounded-3xl bg-[#C79329] py-2 border-b-2   mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='text-lg rounded-3xl bg-[#C79329] border-b-2  py-2 mt-6'>
                                    <h2>View Sample Video</h2>
                                </div>


                                <div className='flex justify-center items-center py-2 mt-4  bg-[#C79329]  mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md hover:text-black  text-white'>
                                    <FaCheck></FaCheck>
                                    <h2>Select</h2>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'Monthly' && (
                    <>
                        <div className='container mx-auto gap-6 flex flex-col md:flex-row h-auto w-full px-4 md:w-full xl:w-9/12 lg:px-16'>
                            <div style={{ border: '2px solid black' }} className='bg-white container mx-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] h-96 transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-[#808080] text-3xl font-bold'>
                                    <h2>Free Promo</h2>
                                </div>
                                <hr className='border-black' />
                                <div className='text-white  py-2 bg-[#073855]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44 '>PRESENTATION</h2>
                                </div>
                                <div className='text-black text-lg xl:mr-44 my-3'>
                                    <h2>Basic Profile</h2>
                                </div>
                                <hr className='border-black' />
                                <h2 className='text-black mr-24 my-2'>Upload up to one photo</h2>

                                <hr className='border-black' />
                                <h2 className='text-black  xl:mr-20 my-2'>Manage your promo 14/7</h2>
                                <hr className='border-black' />
                                <h2 className='text-black xl:mr-8 my-2'>One Free Promo Per Month Limit</h2>
                                <hr className='border-black' />

                                <div className='flex justify-center items-center py-2 bg-[#5a5a5a] hover:text-black  mt-3 mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md text-white'>
                                    <FaCheck></FaCheck>
                                    <h2>Select</h2>
                                </div>
                            </div>
                            <div style={{ border: '2px solid black' }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-[#1396e2] text-3xl font-bold'>
                                    <h2>Showcase</h2>
                                </div>
                                <hr className='border-black' />
                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$10</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-16 my-2'>Upload up to ten photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2'>Upload up to three videos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2 '>Manage your promo 24/7</h2>
                                <hr className='border-white' />
                                <div className='text-lg rounded-3xl bg-[#128dd4] py-2 mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='flex justify-center items-center py-2 mt-4 bg-[#128dd4] hover:text-black  mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md text-white '>
                                    <FaCheck ></FaCheck>
                                    <h2 >Select</h2>
                                </div>
                            </div>

                            <div style={{ border: '2px solid black', }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-red-600 text-3xl font-bold w-full'>
                                    <h2>Showcase Plus</h2>
                                    <div className='text-white py-5 absolute top-0  right-0 curve-mal   text-sm font-bold'>
                                        <h2 className='mt-4 ml-7'>Best Value</h2>
                                    </div>
                                </div>


                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$10</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Business Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-20 my-2'>Upload up to 10 photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-24 my-2'>Upload up to 3 videos</h2>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Creation</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Select from our video templates. Our team will produce a video for you.</h2>

                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Features </h2>
                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Promo Details</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Logo</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Photos</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Music</h2>
                                </div>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Marketing </h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Promoting your business on-Business Market  HUB social sites.</h2>
                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Sites </h2>
                                </div>

                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>YouTube</h2>

                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Facebook</h2>

                                </div>

                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Instagram</h2>

                                </div>
                                <hr className='border-white' />


                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Pinterest</h2>

                                </div>
                                <hr className='border-white' />
                                <h2 className='xl:mr-20'>Manage your promo 24/7</h2>
                                <div className='text-lg rounded-3xl bg-[#C79329] py-2 border-b-2 mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='text-lg rounded-3xl bg-[#C79329] border-b-2 py-2 mt-6'>
                                    <h2>View Sample Video</h2>
                                </div>


                                <div className='flex justify-center items-center py-2 mt-4 bg-[#C79329]   mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md hover:text-black  text-white'>
                                    <FaCheck></FaCheck>
                                    <h2>Select</h2>
                                </div>
                            </div>
                        </div>

                    </>
                )}
                {activeTab === 'Annually' && (
                    <>
                        <div className='container mx-auto  flex flex-col md:flex-row h-auto w-full px-4 md:w-full xl:w-9/12 lg:px-16 xl:px-30'>
                        <div style={{ border: '2px solid black' }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-[#1396e2] text-3xl font-bold'>
                                    <h2>Showcase</h2>
                                </div>
                                <hr className='border-black' />
                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$10</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-16 my-2'>Upload up to ten photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2'>Upload up to three videos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-14 my-2 '>Manage your promo 24/7</h2>
                                <hr className='border-white' />
                                <div className='text-lg rounded-3xl bg-[#128dd4] py-2 mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='flex justify-center items-center py-2 mt-4 bg-[#128dd4] hover:text-black  mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md md:ml-4 ml-3 text-white '>
                                    <FaCheck ></FaCheck>
                                    <h2 >Select</h2>
                                </div>
                            </div>

                            <div style={{ border: '2px solid black', }} className='bg-[#062f47] text-white container mx-auto h-auto w-full md:w-4/12 mb-6 md:mb-0 transform hover:translate-y-[-5px] transition-all duration-500 ease-in-out'>
                                <div className='text-white py-5 bg-red-600 text-3xl font-bold w-full'>
                                    <h2>Showcase Plus</h2>
                                    <div className='text-white py-5 absolute top-0  right-0 curve-mal   text-sm font-bold'>
                                        <h2 className='mt-4 ml-7'>Best Value</h2>
                                    </div>
                                </div>


                                <div className='bg-[#5a5a5a] py-1 w-full h-20 text-white'>
                                    <h2 className='text-2xl font-bold mt-2'>$29</h2>
                                    <p>/Month</p>
                                </div>
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Business Presentation</h2>
                                </div>
                                <div className=' text-white text-lg xl:mr-24 my-2'>
                                    <h2>Full Business Profile</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white mr-24 my-2'>Upload your Biz Logo</h2>

                                <hr className='border-white' />
                                <h2 className='text-white  xl:mr-20 my-2'>Upload up to 10 photos</h2>
                                <hr className='border-white' />
                                <h2 className='text-white xl:mr-24 my-2'>Upload up to 3 videos</h2>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Creation</h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Select from our video templates. Our team will produce a video for you.</h2>

                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Video Features </h2>
                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Promo Details</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Logo</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Your Business Photos</h2>

                                </div>
                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Music</h2>
                                </div>
                                <hr className='border-white' />
                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Marketing </h2>
                                </div>
                                <hr className='border-white' />
                                <h2 className='text-white my-2 '>Promoting your business on-Business Market  HUB social sites.</h2>
                                <hr className='border-white' />

                                <div style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }} className='text-white py-2 bg-[#C79329]'>
                                    <h2 style={{ fontSize: '14px' }} className='xl:mr-44  '>Social Sites </h2>
                                </div>

                                <hr className='border-white' />
                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>YouTube</h2>

                                </div>
                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Facebook</h2>

                                </div>

                                <hr className='border-white' />

                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Instagram</h2>

                                </div>
                                <hr className='border-white' />


                                <div className='text-white my-2 flex xl:ml-5'>
                                    <GoDotFill className='mt-1'></GoDotFill>
                                    <h2>Pinterest</h2>

                                </div>
                                <hr className='border-white' />
                                <h2 className='xl:mr-20'>Manage your promo 24/7</h2>
                                <div className='text-lg rounded-3xl bg-[#C79329] py-2 border-b-2 mt-6'>
                                    <h2>View Sample Business Profile</h2>
                                </div>
                                <div className='text-lg rounded-3xl bg-[#C79329] border-b-2 py-2 mt-6'>
                                    <h2>View Sample Video</h2>
                                </div>


                                <div className='flex justify-center items-center py-2 mt-4 bg-[#C79329]   mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md hover:text-black md:ml-4 ml-3 text-white'>
                                    <FaCheck></FaCheck>
                                    <h2>Select</h2>
                                </div>
                            </div>
                        </div>
                    </>
                )}


            </div>


        </>
    );
};

export default Pricing;