import React, { useState } from 'react';
import img1 from '../../assets/images/Banner-template.jpg'
import img2 from '../../assets/images/profile-about.jpg'

const About = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [Overview, setOverview] = useState('overview');
    const [Choose, setChoose] = useState('Choose');
    const [Contact, setContact] = useState('contact');
    const handleContentClick = (content) => {
        setOverview(content);
        setChoose(content);
        setContact(content);
        setActiveTab(content);

    };
    return (
        <>
            {/* title  */}
            <div className=" px-10 md:px-14 lg:px-10 bg-[#774E88] h-[130px] md:h-[160px] lg:h-[200px] flex justify-between items-center">
                <h1 className="mt-[80px] md:mt-0 lg:mt-0 text-2xl text-white lg:ml-32">About Us</h1>
                <div className="hidden md:block lg:block md:mt-[104px] lg:mt-[142px]">
                    <button className="text-white bg-[#291958] p-4">Home</button>
                    <button className=" text-white bg-[#291958] p-4">Contact Business Post</button>
                </div>
            </div>


            {/* section apart */}



            <div className="bg-white container mx-auto flex items-center justify-center">
                <div className="container lg:ml-20 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">

                    {/* Left Part (Text) border-b-2 p-3 */}
                    <div className="md:w-4/12 w-full xl:w-3/12 bg-green-300 md:pr-8">

                        <div style={{ border: '2px solid #774e88 ' }} className='xl:w-60 w-full  text-start lg:ml-10'>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Overview === 'overview' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black  cursor-pointer p-3 bg-white'
                                }   border-white`} onClick={() => handleContentClick('overview')}>
                                <button className='font-semibold text-base'>Overview</button>
                            </div>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Choose === 'Choose' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black  p-3 cursor-pointer bg-white'
                                }   border-white`} onClick={() => handleContentClick('Choose')}>
                                <button className='font-semibold text-base'>Why Choose US</button>
                            </div>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Contact === 'contact' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black p-3 cursor-pointer bg-white'
                                }   border-white`} onClick={() => handleContentClick('contact')}>
                                <button className='font-semibold text-base'>Contact business Post</button>
                            </div>
                        </div>
                        {/* image part */}
                        <img src={img1} className='xl:w-10/12 md:w-full w-full lg:ml-10 mt-5' alt="" />

                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-8/12 xl:w-10/12 w-full mt-4 md:mt-0">


                        <div className="p-2 ml-3 w-full h-full">
                            {activeTab === 'overview' && (
                                <>
                                    <div className="carousel w-full h-[600px]">
                                        <div id="slide1" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide4" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide2" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide2" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide1" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide3" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide3" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />



                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide2" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide4" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide4" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide3" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide1" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                        <p>The Business Post has been established and crafted with a mission to serve Entrepreneurs in the business marketplace.
                                            We are a leading business opportunities platform for business sellers, business buyers and business brokers to come under one roof. We integrate the latest technology and digital marketing system that offers seamless facilitation while buying or selling businesses or franchises in Australia.</p>
                                    </div>
                                </>
                            )}
                            {activeTab === 'Choose' && (
                                <>
                                    <h2>Choose</h2>
                                </>
                            )}
                            {activeTab === 'contact' && (
                                <>
                                    <h2>Contact</h2>
                                </>
                            )}
                        </div>



                    </div>

                </div>
            </div>





        </>
    );
};

export default About;