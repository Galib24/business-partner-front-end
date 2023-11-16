import React, { useState } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import image from '../../../assets/images/img-single1.jpg'
import image1 from '../../../assets/images/player1.png'
import image3 from '../../../assets/images/s1.jpg'
import image4 from '../../../assets/images/s2.jpg'
const Gallery = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedContent, setSelectedContent] = useState('overview');
    const [businessActivity, setSelectedContentBusinessActivity] = useState('businessActivity');
    const [Franchise, setSelectedContentFranchise] = useState('Franchise');
    const [Business, setSelectedContentBusiness] = useState('Business');
    const [Partnership, setSelectedContentPartnership] = useState('Partnership');
    const [Innovation, setSelectedContentInnovation] = useState('Innovation');
    const [Opportunities, setSelectedContentOpportunities] = useState('Opportunities');
    const [Interest, setSelectedContentInterest] = useState('Interest');

    const handleContentClick = (content) => {
        setSelectedContent(content);
        setSelectedContentBusinessActivity(content);
        setSelectedContentFranchise(content);
        setSelectedContentBusiness(content);
        setSelectedContentPartnership(content);
        setSelectedContentInnovation(content);
        setSelectedContentOpportunities(content);
        setSelectedContentInterest(content);
        setActiveTab(content);
    };

    return (
        <>
            {/* title */}
            <div className='p-24  container  mx-auto   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>Gallery</h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute lg:block hidden left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            {/* content py-2 my-2 bg-[#774e88] */}
            <div>
                <div className='flex flex-col md:flex-row justify-center py-2 my-2 bg-[#774e88]'>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={() => handleContentClick('overview')}
                            className={`w-full md:w-full h-14 ${selectedContent === 'overview' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r  border-white`}
                        >
                            All <IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('businessActivity')}
                            className={`w-full md:w-full h-14 ${businessActivity === 'businessActivity' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Business Sales <IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>

                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Franchise')}
                            className={`w-full md:w-full h-14 ${Franchise === 'Franchise' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Franchise Sales <IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>

                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Business')}
                            className={`w-full md:w-full h-14 ${Business === 'Business' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Business Migration <IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>

                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Partnership')}
                            className={`w-full md:w-full h-14 ${Partnership === 'Partnership' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Partnership Sales<IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>
                        {/* Partnership */}
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Innovation')}
                            className={`w-full md:w-full h-14 ${Innovation === 'Innovation' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Innovation Sales<IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>
                        {/* Innovation */}
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Opportunities')}
                            className={`w-full md:w-full h-14 ${Opportunities === 'Opportunities' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Business Opportunities<IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>
                        {/* Opportunities */}
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleContentClick('Interest')}
                            className={`w-full md:w-full h-14 ${Interest === 'Interest' ? 'bg-white text-black' : 'bg-[#774e88] text-white'
                                } flex items-center justify-center border-r border-white`}>
                            Interest Opportunities<IoIosArrowDropright className='ml-2  text-black bg-white rounded-full' />
                        </button>
                        {/* Interest */}
                    </div>

                </div>
            </div>
            <div className="p-2 ml-3 w-full h-full">
                {activeTab === 'overview' &&  (
                    <>

                        <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>

                    </>
                )}
{/*  */}
                {activeTab === 'businessActivity' && (
                    <>
                        <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/*  */}
                {activeTab === 'Franchise' && (
                    <>
                        <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image4}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image3} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/*  */}
                {activeTab === 'Business' &&(
                    <>
                         <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/*  */}
                {activeTab === 'Partnership' && (
                    <>
                         <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/*  */}
                {activeTab === 'Innovation' && (
                    <>
                        <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/*  */}
                {activeTab === 'Opportunities' &&(
                    <>
                         <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
{/*  */}
                {activeTab === 'Interest' && (
                    <>
                         <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/6 p-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}



            </div>
        </>
    );
};

export default Gallery;