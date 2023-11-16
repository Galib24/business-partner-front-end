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

            <div className='container mx-auto'>
                <Swiper

                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full md:w-2/3 lg:w-5/6 xl:w-5/6"
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
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10 '>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                            <div className=' bg-red-300 w-full text-center'>
                                Deccan light - Estb in 2016
                            </div>
                            <div className='w-full my-4'>
                                <h2 className='text-xl'>Business Sales</h2>
                                <h2 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod impedit cupiditate explicabo laborum quas, labore iste ullam exercitationem. Error.</h2>
                            </div>

                            <div className='flex justify-between bg-green-400 w-full'>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
                                </div>
                                <div className='w-28 text-center  bg-red-500'>
                                    <h2 className='mt-2'>View Profile</h2>
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