import React from 'react';
import img1 from '../../../assets/images/business-sale-feature-img-1.jpg'
import './ThirdSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';


const ThirdSection = () => {
    return (

        <>

            <div className='container bg-[#e9e9e9] xl:px-16 md:px-16 px-10 mx-auto'>
            <div className='lg:ml-10  mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <div className='flex gap-2'>
                        <h2 className='text-2xl font-bold'>Featured </h2>
                        <h2 className='text-2xl text-[#774e88] font-bold'>Business Sale</h2>
                        </div>
                    </div>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full md:w-full  lg:full xl:w-full"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        620: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        }
                        ,
                        840: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Business Sales</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    {/* Add other slides similarly */}
                </Swiper>
            <div className='lg:ml-10 mt-10'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <div className='flex gap-2'>
                        <h2 className='text-2xl  font-bold'>Featured </h2>
                        <h2 className='text-2xl  text-[#774e88] font-bold'>Franchise Sale</h2>
                        </div>
                    </div>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full md:w-full lg:full xl:w-full"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        620: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        }
                        ,
                        840: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-[#d4ccdd] w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='bg-white px-3 py-10 rounded-md'>
                                <div className='w-full  mb-2 ml-5'>
                                    <h2 className='text-xl font-semibold'>Sell A Franchise</h2>
                                    <h2 className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                                </div>

                                <div className='flex justify-between bg-white-400 w-full '>
                                    <div className='w-24 text-white text-center cursor-pointer bg-[#774e88] ml-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                    <div className='w-24 cursor-pointer text-white text-center  bg-[#774e88] mr-5'>
                                        <h2 className='mt-1'>View Profile</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    {/* Add other slides similarly */}
                </Swiper>
            </div>


        </>

    );
};

export default ThirdSection;