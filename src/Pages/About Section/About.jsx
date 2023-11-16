import React, { useState } from 'react';
import img1 from '../../assets/images/Banner-template.jpg'
import img2 from '../../assets/images/profile-about.jpg'
import img3 from '../../assets/images/recaptcha.png'
import img4 from '../../assets/images/11.jpg'
import { FaRegDotCircle } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
const About = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [Overview, setOverview] = useState('overview');
    const [Choose, setChoose] = useState('Choose');
    const [Contact, setContact] = useState('contact');
    const handleContentClick = (content) => {
        setOverview(content);
        setChoose(content);
        setContact(content);
        setActiveTab(content);

    };

    const [Marketing, setMarketing] = useState(false);
    const [Business, setBusiness] = useState(false);
    const [Save, setSave] = useState(false);
    const [Easy, setEasy] = useState(false);
    const [Social, setSocial] = useState(false);
    const [Search, setSearch] = useState(false);

    const First = () => {

        setMarketing(!Marketing);
    };
    const Second = () => {

        setBusiness(!Business);
    };
    const Third = () => {

        setEasy(!Easy);
    };
    const Fourth = () => {

        setSocial(!Social);
    };
    const Fifth = () => {

        setSearch(!Search);
    };
    const Sixth = () => {

        setSave(!Save);
    };
    return (
        <>
            {/* title  */}
            <div className=" px-10 md:px-14 lg:px-10 bg-[#774E88] h-[130px] md:h-[160px] lg:h-[200px] flex justify-between items-center">
                <h1 className="mt-[80px] md:mt-0 lg:mt-0 text-2xl text-white lg:ml-32">About Us</h1>
                <div className="hidden md:block lg:block md:mt-[104px] lg:mt-[142px] xl:mr-12">
                    <button className="text-white bg-[#291958] p-4">Home</button>
                    <button className=" text-white bg-[#291958] p-4">Contact Business Post</button>
                </div>
            </div>


            {/* section apart */}



            <div className="bg-white container mx-auto flex items-center justify-center">
                <div className="container lg:ml-20 mx-auto gap-5 p-4 md:p-8 flex flex-col md:flex-row">

                    {/* Left Part (Text) border-b-2 p-3 */}
                    <div className="md:w-4/12 w-full xl:w-3/12  md:pr-8">

                        <div style={{ border: '2px solid #774e88 ' }} className='xl:w-60 w-full  text-start lg:ml-10'>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Overview === 'overview' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black  cursor-pointer p-3 bg-white'
                                }   border-white`} onClick={() => handleContentClick('overview')}>
                                <button className='font-semibold text-base'>Overview</button>
                            </div>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Choose === 'Choose' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black  p-3 cursor-pointer bg-white'
                                }   border-white`} onClick={() => handleContentClick('Choose')}>
                                <button className='font-semibold text-base'>Why Choose US</button>
                            </div>
                            <div style={{ border: '1px solid #3b92cf' }} className={`w-full md:w-full h-14 ${Contact === 'contact' ? ' bg-[#774e88] cursor-pointer text-white  p-3' : ' text-black p-3 cursor-pointer bg-white'
                                }   border-white`} onClick={() => handleContentClick('contact')}>
                                <button className='font-semibold text-base'>Contact business Post</button>
                            </div>
                        </div>
                        {/* image part */}
                        <img src={img1} className='xl:w-10/12 md:w-full w-full lg:ml-10 mt-5 hidden md:block lg:block' alt="" />

                    </div>

                    {/* Right Part (Image) */}
                    <div className="md:w-8/12 xl:w-10/12 w-full mt-4 md:mt-0">


                        <div className="p-2 ml-3 w-full h-full">
                            {activeTab === 'overview' && (
                                <>
                                    <div className='lg:ml-5 mb-5'>
                                        <hr className='h-1 bg-[#774E88] w-16 ' />
                                        <h2 className='text-[#774E88] mt-2'>OVERVIEW</h2>
                                        <div className='text-2xl flex font-bold'>
                                            <h2>Business</h2>
                                            <h2 className='text-[#774E88] ml-2'>Overview</h2>
                                        </div>
                                    </div>
                                    <div className="carousel w-full h-[600px]">
                                        <div id="slide1" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide4" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide2" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide2" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide1" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide3" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide3" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />



                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide2" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide4" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide4" className="carousel-item relative w-full">
                                            <img src={img2} className="w-full rounded-xl" />


                                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                                <a href="#slide3" className="btn bg-[#774e88] text-white  btn-square mr-5">❮</a>
                                                <a href="#slide1" className="btn bg-[#774e88] text-white  btn-square">❯</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                        <p>The Business Post has been established and crafted with a mission to serve Entrepreneurs in the business marketplace.
                                            We are a leading business opportunities platform for business sellers, business buyers and business brokers to come under one roof. We integrate the latest technology and digital marketing system that offers seamless facilitation while buying or selling businesses or franchises in Australia.</p>
                                    </div>
                                </>
                            )}
                            {activeTab === 'Choose' && (
                                <>
                                    <div className='flex flex-col xl:flex-row justify-between xl:mr-16'>
                                        <div className='mb-8 xl:mr-8'>
                                            <hr className='h-1 bg-[#774E88] w-16' />
                                            <h2 className='text-2xl font-semibold mt-1 mb-5 text-[#774e88]'>WHY CHOOSE US</h2>
                                            <h2 className='text-2xl font-semibold mb-3 text-[#774e88]'>WHY ARE WE DIFFERENT?</h2>
                                            <ol>
                                                <li>
                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Marketing Portal you can Trust</h1>
                                                    </div>
                                                </li>
                                                <li>

                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Business For Sale Network</h1>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Save Money and Hassle</h1>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Easy Registration, Fast Processing</h1>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Social Marketing</h1>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='flex my-4'>
                                                        <FaRegDotCircle className='mt-1 mr-2 text-[#774e88]'></FaRegDotCircle>
                                                        <h1 style={{ fontSize: '14px' }}>Search Engine Optimization</h1>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                        <img src={img4} className='w-full xl:w-6/12 xl:mt-14' alt="" />
                                    </div>
                                    <div className='container mx-auto mt-10'>
                                        <div className='my-1'>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={First}
                                            >
                                                <h2>Marketing Portal you can Trust</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Marketing && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>The Business Post portal has been designed by experienced business professionals who understand your requirements. With our exclusive experience in business marketplace, we make sure our enterprising portal system helps you to find ideal business or a buyer. You can entrust Business Post for buying or selling a business.</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className='my-1'>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={Second}
                                            >
                                                <h2>Business For Sale Network</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Business && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>Do you want to buy or sell your business across Australia? Business Post can help you reach to the best opportunities you ever wanted! With our dedicated business sales portals network, you can buy or sell a business anywhere in Australia.
                                                            Save Money and Hassle</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className='my-1'>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={Third}
                                            >
                                                <h2>Save Money and Hassle</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Easy && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>Business Post provides you with hassle-free, very low cost and effective marketing services. Whether you are planning to acquire a business or sell a business, our comprehensively designed portal system saves you time, money and efforts.</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className='my-1'>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={Fourth}
                                            >
                                                <h2>Easy Registration, Fast Processing</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Social && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>You can post your business promo with Business Post as a seller, franchisors or a business brokers in just a few easy steps, and start selling your opportunity to the business marketplace.</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className='my-1'>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={Fifth}
                                            >
                                                <h2>Social Marketing</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Search && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>The power of social media can be an absolute game changer for your business! Business Post offers you the advantage of reaching out to the business fraternity through the social media channels for better exposure. Our exquisite central social site, Business Market Hub lets you manage your marketing on social media sites such as YouTube, Facebook, Instagram and others.</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div>
                                            <div
                                                className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                                                onClick={Sixth}
                                            >
                                                <h2>Search Engine Optimization</h2>
                                            </div>

                                            <AnimatePresence>
                                                {Save && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                                        className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                                                    >
                                                        {/* Dropdown content goes here */}
                                                        <p>Reaching out to the right audience, at the right time, in the right way is important in the social media marketing and it needs skills. But you don’t need to bother, because our skillful SEO team is right here to help you at every step of the way. Business Post is proud to have a strong SEO team that is competent to take your business effectively to the social media channels and help you achieve higher exposure and better prospects.</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                </>
                            )}
                            {activeTab === 'contact' && (
                                <>
                                    <div className='lg:ml-5 mb-5 xl:ml-12'>
                                        <hr className='h-1 bg-[#774E88] w-16 ' />
                                        <h2 className='text-[#774E88] mt-2'>CONTACT BUSINESS POST</h2>
                                        <div className='text-2xl flex font-bold'>
                                            <h2>WE WANT TO</h2>
                                            <h2 className='text-[#774E88] ml-2'>HEAR FROM YOU
                                            </h2>
                                        </div>
                                    </div>
                                    {/* Form Inputs */}
                                    <form className='xl:ml-12'>
                                        {/* Name and Email Inputs */}
                                        <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="w-full md:w-1/2 lg:w-5/12 px-4 mb-2  py-4 border border-gray-300 rounded"
                                                required
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="w-full md:w-1/2 lg:w-5/12 mb-2 px-4 py-4 border border-gray-300 rounded"
                                                required
                                            />
                                        </div>

                                        <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4">

                                            {/* Phone Number Input */}
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                className="w-full md:w-1/2 lg:w-5/12 px-4 mb-2  py-4 border border-gray-300 rounded"
                                            />
                                            {/* Phone Number Input */}
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className="w-full md:w-1/2 lg:w-5/12 mb-2 px-4 py-4 border border-gray-300 rounded"
                                            />



                                        </div>



                                        {/* Message Text Input */}
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            className="w-full md:w-1/2 lg:w-10/12 mb-2 px-4 py-4 border border-gray-300 rounded"
                                            rows="4"
                                        ></textarea>

                                        {/* Captcha */}
                                        <div className="mt-5 mb-5">
                                            <img className='w-4/12' src={img3} alt="" />
                                        </div>

                                        {/* Submit Button */}
                                        <div className=''>
                                            <button
                                                type="submit"
                                                className="bg-[#774E88] text-white  px-6 py-2 rounded hover:bg-[#0a0a0a] hover:text-white duration-300 ease-in-out"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>



                    </div>

                </div>
            </div>





        </>
    );
};

export default About;