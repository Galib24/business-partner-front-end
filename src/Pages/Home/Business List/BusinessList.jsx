import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import './Business.css'

import img1 from '../../../assets/images/result-page-img.jpg'
import img2 from '../../../assets/images/result-page-img.jpg'
import img3 from '../../../assets/images/result-page-img.jpg'
import img4 from '../../../assets/images/result-page-img.jpg'

const BusinessList = () => {

    return (
        <>
            {/* title */}
            <div className='p-24  container  mx-auto   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>Business Listings</h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute lg:block hidden left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            {/* separate  part */}
            <div className="bg-white container mx-auto flex items-center justify-center">
                <div className="container lg:ml-20 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">


                    {/* Left Part (Text) */}
                    <div className="md:w-2/3 md:pr-8">
                        <div className='grid grid-cols-2 mb-5'>
                            <div style={{ border: '1px solid black' }} className="w-fit mathewMan">
                                <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
                                    <option>Location</option>
                                    <option>Business For Sale</option>

                                </select>
                            </div>
                            <div style={{ border: '1px solid black' }} className="w-fit mathewMan">
                                <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
                                    <option>Location</option>
                                    <option>Business For Sale</option>

                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between bg-[#4f287b] text-white p-2'>
                            <h2>Outdor Italian Desk - 100% Wood material</h2>
                            <div className='flex justify-center items-center'>
                                <h2>Saved</h2>
                                <CiStar></CiStar>
                            </div>
                        </div>
                        <div className='md:w-full mt-3 flex items-center justify-center'>
                            <Swiper
                                
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"


                            >


                                <SwiperSlide>

                                    <div className='relative  w-full'>
                                        <img className='w-full' src={img1} alt="" />
                                        <div className='curve-container'>
                                            <h2 className='flex justify-center items-center text-white'>BUSINESS FOR SALE</h2>
                                        </div>
                                        <div className='bg-[#1396e2] text-white p-2 w-14 absolute top-0 right-5 '>
                                            <h2 className='flex justify-center items-center'>QLD</h2>
                                        </div>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative   w-full'>
                                        <img className='w-full' src={img1} alt="" />
                                        <div className='curve-container'>
                                            <h2 className='flex justify-center items-center text-white'>BUSINESS FOR SALE</h2>
                                        </div>
                                        <div className='bg-[#1396e2] text-white p-2 w-14 absolute top-0 right-5 '>
                                            <h2 className='flex justify-center items-center'>QLD</h2>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative  w-full'>
                                        <img className='w-full' src={img1} alt="" />
                                        <div className='curve-container'>
                                            <h2 className='flex justify-center items-center text-white'>BUSINESS FOR SALE</h2>
                                        </div>
                                        <div className='bg-[#1396e2] text-white p-2 w-14 absolute top-0 right-5 '>
                                            <h2 className='flex justify-center items-center'>QLD</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='relative   w-full'>
                                        <img className='w-full' src={img1} alt="" />
                                        <div className='curve-container'>
                                            <h2 className='flex justify-center items-center text-white'>BUSINESS FOR SALE</h2>
                                        </div>
                                        <div className='bg-[#1396e2] text-white p-2 w-14 absolute top-0 right-5 '>
                                            <h2 className='flex justify-center items-center'>QLD</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                            <div className='ml-40'>
                                <div className='flex justify-between'>
                                <h2>BUSINESS CONTENT</h2>
                                <h2>$1,849</h2>
                                </div>
                                <div
                                    className="divider mb-4">
                                </div>
                                <p>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                <div
                                    className="divider mb-4">
                                </div>
                                <div className='grid grid-cols-3 gap-4'>
                                    <button className='btn'>Contact Seller</button>
                                    <button className='btn'>View biz Profile</button>
                                    <button className='btn'>Submit Offer</button>
                                </div>

                            </div>
                        </div>



                        {/* <div className='grid grid-cols-2  bg-red-500 p-5 gap-4'>
                    
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem est sequi adipisci sit earum ab! Ipsum, nisi cupiditate animi esse quae fuga quos, nam molestiae, commodi repellendus quibusdam eligendi adipisci.
                        </div>
                       </div> */}




                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-1/3 mt-4 md:mt-0">

                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[1959, 2023]}
                            max={2023}
                            min={1959}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}

                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessList;