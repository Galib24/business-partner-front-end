import React from 'react';
import img1 from '../../assets/images/bp-img (2).png'

const BusinessWanted = () => {
    return (
        <>
            {/* title */}
            <div className='p-24  container  mx-auto   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>Business Wanted</h2>
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

                        <div className='flex flex-col items-center justify-center md:flex-row'>


                            <div className='p-2 mb-5' style={{ border: '1px solid gray' }}>
                                <div className='  flex flex-col items-center justify-center md:flex-row'>
                                    <div className='w-full xl:ml-10 md:w-2/3 lg:w-1/2 xl:w-4/12'>

                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                    <div className='mt-4 md:ml-2 md:w-full lg:w-1/2 xl:w-2/3'>
                                        <div className='flex justify-between'>
                                            <h2>BUSINESS CONTENT</h2>
                                            <h2>$1,849</h2>
                                        </div>
                                        <div
                                            className="divider mb-4">
                                        </div>
                                        <p className='text-[#5a5a5a]'>Traditional Country Style 8 Drawer Coffee Table Good Condition. Just dont have the room for it at Ormeau Call Peter, so this product really best for you Garden Dining Sets, Garden Sofa Sets, Garden Corner Sofas</p>
                                        <div
                                            className="divider mb-4">
                                        </div>
                                        <div className='grid grid-cols-3 gap-5'>
                                            <button className=' bg-[#5CB85C] text-white py-2'>Contact Seller</button>
                                            <button className=' bg-[#4f287b]  text-white py-3'>View biz Profile</button>
                                            <button className=' bg-[#2457cf] text-white py-2'>Submit Offer</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-1/3 mt-4 md:mt-0">





                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessWanted;