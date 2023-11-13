import React from 'react';
import image from '../../../assets/images/latest_news_page_1.jpg'
import image5 from '../../../assets/images/latest_news_page_4.jpg'
import image2 from '../../../assets/images/latest_news_small_1.jpg'
import image3 from '../../../assets/images/latest_news_small_2.jpg'
import image4 from '../../../assets/images/latest_news_small_3.jpg'
import classNames from 'classnames';
import { IoMdSearch } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';
// IoMdSearch
const Blog = () => {
    return (
        <>
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
            <div className="bg-white min-h-screen container mx-auto flex items-center justify-center">
                <div className="container lg:ml-20 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">


                    {/* Left Part (Text) */}
                    <div className="md:w-2/3 md:pr-8">
                        <h2 style={{ fontSize: '24px' }} className='  font-bold '>BLOG POST </h2>
                        <div className="relative overflow-hidden max-w-full">
                            <img
                                src={image}
                                alt="Your Image"
                                className={classNames('w-full h-auto', /* Add any additional image-related classes here */)}
                            />
                            <div className="absolute right-0 bottom-0 m-4">
                                <div className="bg-[#4f287b] text-center text-white w-24 h-20">
                                    <h2 className="text-3xl">26</h2>
                                </div>
                                <div className="bg-[#fff] w-24 h-6 text-center">
                                    <h2>MAR</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: '14px' }} className='flex justify-between mt-7 text=[#5a5a5a]'>
                            <h2>By Johny Bravo</h2>
                            <h2>Category: Business, Industry</h2>
                        </div>

                        <a className='flex cursor-pointer mt-4'>
                            <FaRegCommentDots className='mt-1 mr-1'></FaRegCommentDots>
                            <h2>No Comments</h2>
                        </a>


                        <h2 style={{ fontSize: '24px' }} className='mt-5'>Benefits of Our Outstanding Services</h2>


                        <div
                            className="divider mb-4">

                        </div>
                        <div >
                            <h2 style={{fontSize: '14px'}} className='text-[#3e3e3e]'>
                            Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. It is a long established fact that a reader will be distracted.
                            </h2>
                            <h2 style={{fontSize: '14px'}} className='mt-2 text-[#3e3e3e]'>
                            It is a long established fact that a reader will be distracted. Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. It is a long established fact that a reader will be distracted It is a long established fact. Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. It is a long established fact that a reader will be distracted.
                            </h2>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mt-8'>
                            <img src={image} alt="" />
                            <img src={image5} alt="" />
                        </div>
                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        {/* search input */}
                        <form className="w-full text-black   md:w-full mb-4 md:mb-0 lg:mx-auto md:ml-44">
                            <fieldset className="form-control   container">
                                <div className="relative">
                                    <input
                                        style={{ border: '1px solid black' }}
                                        type="text"
                                        placeholder="Search Here"
                                        className="input input-bordered   md:w-96 pr-16"
                                    />
                                    <button className="btn bg-white text-2xl absolute top-0 sm:right-20 md:right-3 rounded-l-none"><IoMdSearch></IoMdSearch> </button>
                                </div>

                            </fieldset>
                        </form>
                        {/* lates part */}
                        <div>
                            <h2 style={{ fontSize: '28px' }} className='mt-4 mb-6'>Latest Post</h2>
                            <div className='flex gap-4'>
                                <img width={100} src={image2} alt="" />
                                <div>
                                    <h1 style={{ fontSize: '14px' }} className='mt-1 text-[#3e3e3e]'>November 21, 2017</h1>
                                    <h1 style={{ fontSize: '18px' }} className='mt-3 font-sans'>Cras sit amet nibh libero, in gravida nulla..</h1>
                                </div>
                            </div>

                            <div
                                className="divider mb-4">

                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '28px' }} className='mt-4 mb-6'>Latest Post</h2>
                            <div className='flex gap-4'>
                                <img width={100} src={image3} alt="" />
                                <div>
                                    <h1 style={{ fontSize: '14px' }} className='mt-1 text-[#3e3e3e]'>November 21, 2017</h1>
                                    <h1 style={{ fontSize: '18px' }} className='mt-3 font-sans'>Cras sit amet nibh libero, in gravida nulla..</h1>
                                </div>
                            </div>

                            <div
                                className="divider mb-4">

                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '28px' }} className='mt-4 mb-6'>Latest Post</h2>
                            <div className='flex gap-4'>
                                <img width={100} src={image4} alt="" />
                                <div>
                                    <h1 style={{ fontSize: '14px' }} className='mt-1 text-[#3e3e3e]'>November 21, 2017</h1>
                                    <h1 style={{ fontSize: '18px' }} className='mt-3 font-sans'>Cras sit amet nibh libero, in gravida nulla..</h1>
                                </div>
                            </div>

                            <div
                                className="divider mb-4">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blog;