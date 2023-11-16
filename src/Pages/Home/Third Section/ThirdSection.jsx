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
            {/* <div className='relative my-10 ml-10'>
                <img className='w-2/12' src={img1} alt="" />
                <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                    <h2 className='text-sm'>TAS</h2>
                </div>
            </div> */}



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
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative my-10 ml-0 md:ml-10'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='absolute top-0 left-0 bg-red-500 text-white p-2 curve-container-tas'>
                                <h2 className='text-sm mt-0 ml-1'>TAS</h2>
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