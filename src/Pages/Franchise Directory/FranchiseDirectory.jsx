import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

import img1 from '../../assets/images/latest_news_page_1.jpg'
import img2 from '../../assets/images/img4.jpg'
import img3 from '../../assets/images/recaptcha.png'
import img4 from '../../assets/images/contactSeller.jpg'
const FranchiseDirectory = () => {
    return (
        <>
            {/* title */}

            <div className=" px-10 md:px-14 lg:px-10 bg-[#774E88] h-[130px] md:h-[160px] lg:h-[200px] flex justify-between items-center">
                <h1 className="mt-[80px] md:mt-0 lg:mt-0 text-2xl text-white"> Business Profile</h1>
                <div className="hidden md:block lg:block md:mt-[104px] lg:mt-[142px]">
                    <button className="text-white bg-[#291958] p-4">Home</button>
                    <button className=" text-white bg-[#291958] p-4"> Business Profile</button>
                </div>
            </div>
            <div className="bg-white min-h-screen container mx-auto flex items-center justify-center">
                <div className="container lg:ml-20 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">


                    {/* Left Part (Text) */}
                    <div className="md:w-2/3 md:pr-8">
                        <div className='p-3 w-28 text-center mb-4 bg-red-500'>
                            Back
                        </div>
                        <div className=''>
                            <Swiper
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper md:w-2/3 lg:w-full xl:w-full"
                            >
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'> {/* Center the image on medium devices and larger */}
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>



                        </div>
                        {/* second part */}
                        <div className=''>
                            <Swiper
                                slidesPerView={4}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper md:w-4/6 lg:w-full xl:w-full"
                            >
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'> {/* Center the image on medium devices and larger */}
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full md:mx-auto'>
                                        <img className='w-full' src={img1} alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>



                        </div>
                        {/* third part */}
                        <h2 className='mt-3 mb-5 text-xl'>Business Discription</h2>
                        <p className='mb-2 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                        {/* divider part */}
                        <div
                            className="divider mb-4">

                        </div>

                        {/* fourth part */}
                        <h2 className='mt-3 mb-5 text-xl'>Best Attributes</h2>
                        <p className='mb-2 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                        {/* divider part */}
                        <div
                            className="divider mb-4">

                        </div>
                        {/* fifth part */}
                        <h2 className='mt-3 mb-5 text-xl'>Features Potentials</h2>
                        <p className='mb-2 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam molestiae, est repellat a similique blanditiis beatae eveniet animi. Quo quod eius laudantium asperiores delectus sequi ad eum dolor reiciendis! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed atque sequi. Error porro quidem ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit praesentium perferendis ipsa ipsum. Quas porro quo maxime deleniti architecto soluta rem, hic sed.</p>
                        {/* divider part */}
                        <div
                            className="divider mb-4">

                        </div>
                        {/* sixth part */}
                        <div>
                            <h2 className='text-xl'>Website Links</h2>
                            <h2>Website:</h2>
                        </div>
                        {/* divider part */}
                        <div
                            className="divider mb-4 mt-2">

                        </div>
                        {/* seventh part */}
                        <h2 className='text-xl'>Video Links</h2>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <img className='w-full md:w-2/6' src={img2} alt="" />
                            <img className='w-full md:w-2/6' src={img2} alt="" />
                            <img className='w-full md:w-2/6' src={img2} alt="" />
                        </div>
                        {/* eighth part */}

                        {/* divider part */}
                        <div
                            className="divider mb-4 mt-2">

                        </div>
                        <div>


                        </div>

                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-1/3 mt-4 md:mt-0">

                    </div>

                </div>

            </div>
            <div className='container  mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row bg-white '>
                <div className='w-1/6'>
                    <h2 className='text-xl'>Contact Seller</h2>
                    <img className='w-full' src={img4} alt="" />
                </div>



                {/* Form Inputs */}
                <form>
                    {/* Name and Email Inputs */}
                    <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full md:w-1/2 lg:w-1/2 px-4 mb-2  py-2 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full md:w-1/2 lg:w-1/2 mb-2 px-4 py-2 border border-gray-300 rounded"
                            required
                        />
                    </div>


                    <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4 ">
                        {/* Phone Number Input */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full md:w-1/2 lg:w-full px-4 py-2 border border-gray-300 rounded mb-2"
                        />


                    </div>
                    <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4 ">
                        {/* Phone Number Input */}
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full md:w-1/2 lg:w-full px-4 py-2 border border-gray-300 rounded mb-2"
                        />


                    </div>


                    {/* Message Text Input */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded "
                        rows="4"
                    ></textarea>

                    {/* Captcha */}
                    <div className="mt-5 mb-5">
                        <img className='w-2/6' src={img3} alt="" />
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="bg-[#774E88] text-white  px-6 py-2 rounded hover:bg-[#0a0a0a] hover:text-white duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* contact seller */}
                <div className='bg-red-500 w-full md:w-3/12 h-auto md:h-48 rounded-2xl p-4'>
                    <h2 className='text-center text-lg font-bold mb-2'>Contact Seller</h2>
                    {/* divider part */}
                    <div className="divider mb-4 mt-2"></div>
                    <div className='flex flex-col md:flex-row mb-2'>
                        <h2 className='font-bold md:mr-2'>Contact:</h2>
                        <h2>Lions Business brokers</h2>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <h2 className='font-bold md:mr-2'>Phone:</h2>
                        <h2>1300309094</h2>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FranchiseDirectory;