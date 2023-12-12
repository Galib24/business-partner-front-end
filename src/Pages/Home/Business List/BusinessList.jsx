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
import img5 from '../../../assets/images/baner.jpg'

const BusinessList = () => {
    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
      }, []);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleRangeChange = (e) => {
        setMinValue(e.target.value);
        setMaxValue(e.target.max - e.target.value);
    };

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
                <div className="container  mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">

                    {/* Left Part (Text) */}
                    <div className="md:w-2/3 md:pr-8">
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mb-5'>
                            <div style={{ border: '1px solid black' }} className="w-fit mathewMan">
                                <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                    <option>Listing Date</option>

                                </select>
                            </div>
                            <div style={{ border: '1px solid black' }} className="w-fit mathewMan">
                                <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
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
                        </div>
                        <div className='flex justify-between bg-[#4f287b] text-white p-2'>
                            <h2>Outdor Italian Desk - 100% Wood material</h2>
                            <div className='flex justify-center items-center'>
                                <h2>Saved</h2>
                                <CiStar></CiStar>
                            </div>
                        </div>
                        <div className='p-2 mb-5' style={{ border: '1px solid gray' }}>
                            <div className='  flex flex-col items-center justify-center md:flex-row'>
                                <Swiper

                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper w-full md:w-2/3 lg:w-1/2 xl:w-1/3"


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
                                <div className='mt-4 md:ml-4 md:w-full lg:w-1/2 xl:w-2/3'>
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
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#5CB85C] text-white py-2'>Contact Seller</button>
                                        <button className=' bg-[#4f287b]  text-white py-3'>View biz Profile</button>
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#2457cf] text-white py-2'>Submit Offer</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between bg-[#4f287b] text-white p-2'>
                            <h2>Outdor Italian Desk - 100% Wood material</h2>
                            <div className='flex justify-center items-center'>
                                <h2>Saved</h2>
                                <CiStar></CiStar>
                            </div>
                        </div>
                        <div className='p-2 mb-5' style={{ border: '1px solid gray' }}>
                            <div className='  flex flex-col items-center justify-center md:flex-row'>
                                <Swiper

                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper w-full md:w-2/3 lg:w-1/2 xl:w-1/3"


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
                                <div className='mt-4 md:ml-4 md:w-full lg:w-1/2 xl:w-2/3'>
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
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#5CB85C] text-white py-2'>Contact Seller</button>
                                        <button className=' bg-[#4f287b]  text-white py-3'>View biz Profile</button>
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#2457cf] text-white py-2'>Submit Offer</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between bg-[#4f287b] text-white p-2'>
                            <h2>Outdor Italian Desk - 100% Wood material</h2>
                            <div className='flex justify-center items-center'>
                                <h2>Saved</h2>
                                <CiStar></CiStar>
                            </div>
                        </div>
                        <div className='p-2 mb-5' style={{ border: '1px solid gray' }}>
                            <div className='  flex flex-col items-center justify-center md:flex-row'>
                                <Swiper

                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper w-full md:w-2/3 lg:w-1/2 xl:w-1/3"


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
                                <div className='mt-4 md:ml-4 md:w-full lg:w-1/2 xl:w-2/3'>
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
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#5CB85C] text-white py-2'>Contact Seller</button>
                                        <button className=' bg-[#4f287b]  text-white py-3'>View biz Profile</button>
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#2457cf] text-white py-2'>Submit Offer</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between bg-[#4f287b] text-white p-2'>
                            <h2>Outdor Italian Desk - 100% Wood material</h2>
                            <div className='flex justify-center items-center'>
                                <h2>Saved</h2>
                                <CiStar></CiStar>
                            </div>
                        </div>
                        <div className='p-2 mb-5' style={{ border: '1px solid gray' }}>
                            <div className='  flex flex-col items-center justify-center md:flex-row'>
                                <Swiper

                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper w-full md:w-2/3 lg:w-1/2 xl:w-1/3"


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
                                <div className='mt-4 md:ml-4 md:w-full lg:w-1/2 xl:w-2/3'>
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
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#5CB85C] text-white py-2'>Contact Seller</button>
                                        <button className=' bg-[#4f287b]  text-white py-3'>View biz Profile</button>
                                        <button onClick={() =>
                                            document.getElementById("my_modal_7").showModal()} className=' bg-[#2457cf] text-white py-2'>Submit Offer</button>
                                    </div>

                                </div>
                            </div>
                        </div>



                        {/* modal */}
                        <div>
                            <dialog id="my_modal_7" className="modal">
                                <div className="modal-box w-96 bg-[#f3f3f3]">
                                    {/* <form method="dialog">
                                      
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                            ✕
                                        </button>
                                    </form> */}
                                    {/* text editor */}
                                    <h2 className=" text-lg text-[#6c757d] font-semibold my-2">
                                        Contact the Seller
                                    </h2>
                                    <div
                                        className="divider mb-4">

                                    </div>
                                    <div>

                                    </div>

                                    {/* react hook form for getting data */}
                                    <form className=''>
                                        {/* Blog Title Field */}
                                        <div className="form-control my-4">
                                            <input
                                                type="text"
                                                placeholder="Name"

                                                className="w-full input input-bordered uppercase"
                                            />
                                        </div>
                                        <div className="form-control mb-4">

                                            <input
                                                type="text"
                                                placeholder="Email"

                                                className="w-full input input-bordered uppercase"
                                            />
                                        </div>
                                        <div className="form-control mb-4">

                                            <input
                                                type="text"
                                                placeholder="Subject"

                                                className="w-full input input-bordered uppercase"
                                            />
                                        </div>
                                        <div className="form-control mb-4">

                                            <input
                                                type="number"
                                                placeholder="Phone"

                                                className="w-full input input-bordered uppercase"
                                            />
                                        </div>




                                        <div className="form-control flex flex-col mt-2">

                                            <textarea
                                                id=""
                                                cols="30"
                                                rows="4"
                                                placeholder="Blog Description"

                                                className="textarea textarea-bordered textarea-md w-full "
                                            ></textarea>
                                        </div>


                                        <div className="text-center my-5">
                                            <form method="dialog">
                                                <input
                                                    className="bg-[#774e88] w-full py-1 text-white hover:bg-[#0d6efd] cursor-pointer ease-out duration-300"
                                                    type="submit"
                                                    value="Send a Message"
                                                />
                                            </form>

                                            <h2>Phone Number: 0290030333</h2>
                                        </div>
                                    </form>
                                </div>
                            </dialog>
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
                    <div className="md:w-1/3 mt-4 md:mt-0">


                        {/* <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[1959, 2023]}
                            max={2023}
                            min={1959}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}

                        /> */}

                        {/* other components */}
                        <div className='bg-[#774e88] p-8 lg:mr-24'>
                            <div className='max-w-md mx-auto'>
                                <h2 className='text-white text-2xl'>Refine Search</h2>
                                <input
                                    style={{ border: '1px solid black' }}
                                    type="text"
                                    placeholder="Keyword"
                                    className="input my-4 w-full"
                                />
                                <div style={{ border: '1px solid black' }} className="my-4">
                                    <select style={{ padding: '8px 6px' }} className="w-full bg-white cursor-pointer ">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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
                                    <select style={{ padding: '10px 8px' }} className="w-full bg-white cursor-pointer">
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


                                {/* Range bar */}
                                <div className="mt-10">
                                    <label htmlFor="range" className="block text-white  text-xl font-bold mb-2">
                                        Price Range
                                    </label>
                                    <div className="flex justify-between items-center text-center my-8">
                                        <h1 className='text-white'>Min$</h1>
                                        <span className="text-gray-600 w-20 h-10 bg-white"> {minValue}</span>
                                        <h2 className='text-white'>Min$</h2>
                                        <span className="text-gray-600 p-2 w-20 h-10 bg-white"> {maxValue}</span>
                                    </div>
                                    <input
                                        type="range"
                                        id="range"
                                        name="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        value={minValue}
                                        onChange={handleRangeChange}
                                        className="w-full mb-6"
                                    />

                                </div>
                                <img src={img5} alt="" />

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessList;