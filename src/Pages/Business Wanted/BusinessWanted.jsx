import React, { useState } from 'react';
import img1 from '../../assets/images/bp-img (2).png'
import img2 from '../../assets/images/300x250.png'
import './BusinessWanted.css'
const BusinessWanted = () => {


    // pagination

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Replace with the actual total number of pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // You can fetch data for the new page here or perform any other necessary actions
    };

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
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
            <div className="bg-white container mx-auto flex items-center justify-center ">
                <div className="container lg:ml-36 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row ">

                    {/* Left Part (Text) */}
                    <div className="md:w-full xl:w-8/12 md:pr-8">
                    <div className=' mb-5'>
                                <hr className='h-1 bg-[#4f287b] w-16 ' />
                                <h2 className='text-2xl font-bold'>Business Wanted</h2>
                            </div>
                        <div className='flex flex-col items-center justify-center md:flex-row mt-2'>
                           

                            <div className='mb-5 py-2 bg-[#f4f4f4] w-full' style={{ border: '1px solid gray' }}>

                                <div className='w-full flex flex-col items-center justify-center md:flex-row xl:flex-row '>
                                    <div className='w-full xl:w-4/12 xl:ml-4 md:w-3/12 md:ml-3 lg:w-1/2 mt-5 xl:mr-4'>

                                        <img className='w-full' src={img1} alt="" />

                                        <div class="border-b hidden lg:block bo border-1 w-full border-slate-300 my-1"></div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-5 w-full '>
                                        <div className='w-full flex flex-row  items-center md:gap-3  md:w-full lg:w-1/2 xl:w-full xl:gap-2 xl:ml-10 md:ml-4'>
                                            <div>
                                                <h2 style={{ fontSize: '20px' }}>Darius N</h2>
                                                <h2 className='font-bold mt-2'>Business Industry:</h2>
                                                <h2 className='font-bold mt-2'>Business Category:</h2>
                                                <h2 className='font-bold mt-2'>Location:</h2>
                                                <h2 className='font-bold mt-2'>Investment Level:</h2>
                                            </div>
                                            <div className='flex  flex-row xl:mt-12 xl:ml-8'>
                                                <div>
                                                    <h2 style={{ fontSize: '14px' }} className='' >Agency</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3' >Category</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Australia</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Genius Business</h2>
                                                </div>
                                                <div className='w-full md:w-full lg:w-2/3 xl:w-2/3 xl:ml-7'>
                                                    <div className='flex flex-wrap md:flex-col'>
                                                        <h2>Buyer Comment</h2>
                                                        <div className='w-full divider container mx-auto text-black'></div>
                                                        <div>
                                                            <textarea name="" id="" className="w-full bg-white md:w-full" rows="2"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='xl:ml-56 md:ml-28'>
                                    <div className='w-full divider container mx-auto text-black'></div>
                                    <button className='bg-[#774e88] text-white py-3 px-5 '>Contact Seller</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row mt-2'>

                            <div className='mb-5 py-2 bg-[#f4f4f4] w-full' style={{ border: '1px solid gray' }}>

                                <div className='w-full flex flex-col items-center justify-center md:flex-row xl:flex-row '>
                                    <div className='w-full xl:w-4/12  md:ml-3 xl:ml-4 md:w-3/12 lg:w-1/2 mt-5 xl:mr-4'>

                                        <img className='w-full' src={img1} alt="" />

                                        <div class="border-b hidden lg:block bo border-1 w-full border-slate-300 my-1"></div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-5 w-full '>
                                        <div className='w-full flex flex-row  items-center md:gap-3  md:w-full lg:w-1/2 xl:w-full xl:gap-2 xl:ml-10 md:ml-4'>
                                            <div>
                                                <h2 style={{ fontSize: '20px' }}>Darius N</h2>
                                                <h2 className='font-bold mt-2'>Business Industry:</h2>
                                                <h2 className='font-bold mt-2'>Business Category:</h2>
                                                <h2 className='font-bold mt-2'>Location:</h2>
                                                <h2 className='font-bold mt-2'>Investment Level:</h2>
                                            </div>
                                            <div className='flex  flex-row xl:mt-12 xl:ml-8'>
                                                <div>
                                                    <h2 style={{ fontSize: '14px' }} className='' >Agency</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3' >Category</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Australia</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Genius Business</h2>
                                                </div>
                                                <div className='w-full md:w-full lg:w-2/3 xl:w-2/3 xl:ml-7'>
                                                    <div className='flex flex-wrap md:flex-col'>
                                                        <h2>Buyer Comment</h2>
                                                        <div className='w-full divider container mx-auto text-black'></div>
                                                        <div>
                                                            <textarea name="" id="" className="w-full bg-white md:w-full" rows="2"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='xl:ml-56 md:ml-28'>
                                    <div className='w-full divider container mx-auto text-black'></div>
                                    <button className='bg-[#774e88] text-white py-3 px-5 '>Contact Seller</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row mt-2'>

                            <div className='mb-5 py-2 bg-[#f4f4f4] w-full' style={{ border: '1px solid gray' }}>

                                <div className='w-full flex flex-col items-center justify-center md:flex-row xl:flex-row '>
                                    <div className='w-full xl:w-4/12  md:ml-3 xl:ml-4 md:w-3/12 lg:w-1/2 mt-5 xl:mr-4'>

                                        <img className='w-full' src={img1} alt="" />

                                        <div class="border-b hidden lg:block bo border-1 w-full border-slate-300 my-1"></div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-5 w-full '>
                                        <div className='w-full flex flex-row  items-center md:gap-3  md:w-full lg:w-1/2 xl:w-full xl:gap-2 xl:ml-10 md:ml-4'>
                                            <div>
                                                <h2 style={{ fontSize: '20px' }}>Darius N</h2>
                                                <h2 className='font-bold mt-2'>Business Industry:</h2>
                                                <h2 className='font-bold mt-2'>Business Category:</h2>
                                                <h2 className='font-bold mt-2'>Location:</h2>
                                                <h2 className='font-bold mt-2'>Investment Level:</h2>
                                            </div>
                                            <div className='flex  flex-row xl:mt-12 xl:ml-8'>
                                                <div>
                                                    <h2 style={{ fontSize: '14px' }} className='' >Agency</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3' >Category</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Australia</h2>
                                                    <h2 style={{ fontSize: '14px' }} className='mt-3'>Genius Business</h2>
                                                </div>
                                                <div className='w-full md:w-full lg:w-2/3 xl:w-2/3 xl:ml-7'>
                                                    <div className='flex flex-wrap md:flex-col'>
                                                        <h2 className=''>Buyer Comment</h2>
                                                        <div className='w-full divider container mx-auto text-black'></div>
                                                        <div>
                                                            <textarea name="" id="" className="w-full bg-white md:w-full" rows="2"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='xl:ml-56 md:ml-28'>
                                    <div className='w-full divider container mx-auto text-black'></div>
                                    <button className='bg-[#774e88] text-white py-3 px-5 '>Contact Seller</button>
                                </div>
                            </div>
                        </div>


                        {/* pagination */}

                        <div className="flex justify-center mt-4">
                            {pages.map((page) => (
                                <div
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`cursor-pointer mx-1 px-3 py-2 border rounded ${currentPage === page
                                        ? 'bg-blue-500 text-white'
                                        : 'border-gray-300 hover:bg-gray-200'
                                        }`}
                                >
                                    {page}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-1/3 mt-4 md:mt-0 hidden lg:block">

                        <div className='bg-[#774e88] p-8 lg:mr-24'>
                            <div className='max-w-md mx-auto'>
                                <h2 className='text-white text-2xl'>Refine Search</h2>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '8px 6px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>

                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>

                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer xl:text-lg sm:text-sm md:text-base lg:text-xl">
                                        <option>Please Select industry</option>
                                        <option>Agriculture/Primary</option>
                                        <option>Engineering</option>
                                        <option>Hospitality</option>
                                        <option>Manufacturing</option>
                                        <option>Retail</option>
                                        <option>Service</option>
                                        <option>Transport/Distribution</option>
                                    </select>
                                </div>


                                <div className='flex justify-center items-center py-2 mt-4 bg-[#1f3f81] ease-in-out duration-150  mb-7 w-11/12 xl:ml-3 cursor-pointer rounded-md hover:bg-[#128dd4] md:ml-4 ml-3 text-white'>

                                    <h2>Search</h2>
                                </div>

                            </div>
                        </div>
                        <img className='xl:ml-1 xl:mt-4 ' src={img2} alt="" />



                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessWanted;