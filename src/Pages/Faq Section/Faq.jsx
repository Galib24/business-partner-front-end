import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [Visible, setVisibility] = useState(false);
    const [Interest, setInterest] = useState(false);
    const [Information, setInformation] = useState(false);
    const [Website, setWebsite] = useState(false);
    const [Contact, setContact] = useState(false);
    const [Remaining, setRemaining] = useState(false);
    const [BuyerFaq1, setBuyerFaq1] = useState(false);
    const [BuyerFaq2, setBuyerFaq2] = useState(false);
    const [BuyerFaq3, setBuyerFaq3] = useState(false);
    const [Seller1, setSeller1] = useState(false);
    const [Seller2, setSeller2] = useState(false);
    const [Seller3, setSeller3] = useState(false);
    const [Franchisor1, setFranchisor1] = useState(false);
    const [Franchisor2, setFranchisor2] = useState(false);
    const [Franchisor3, setFranchisor3] = useState(false);
    const [Broker1, setBroker1] = useState(false);
    const [Broker2, setBroker2] = useState(false);
    const [Broker3, setBroker3] = useState(false);
    const [Broker4, setBroker4] = useState(false);


    const toggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);

    };
    const mad = () => {

        setVisibility(!Visible);
    };
    const QuestionThree = () => {


        setInterest(!Interest);
    };
    const QuestionFour = () => {

        setInformation(!Information);
    };
    const QuestionFive = () => {

        setWebsite(!Website);
    };
    const QuestionSix = () => {

        setContact(!Contact);
    };
    const QuestionSeven = () => {

        setRemaining(!Remaining);
    };
    const BuyerQuestionOne = () => {


        setBuyerFaq1(!BuyerFaq1);
    };
    const BuyerQuestionTwo = () => {


        setBuyerFaq2(!BuyerFaq2);
    };
    const BuyerQuestionThree = () => {


        setBuyerFaq3(!BuyerFaq3);
    };
    const SellerFAQ1 = () => {


        setSeller1(!Seller1);
    };
    const SellerFAQ2 = () => {


        setSeller2(!Seller2);
    };
    const SellerFAQ3 = () => {


        setSeller3(!Seller3);
    };
    const FranchisorFAQ1 = () => {


        setFranchisor1(!Franchisor1);
    };
    const FranchisorFAQ2 = () => {


        setFranchisor2(!Franchisor2);
    };
    const FranchisorFAQ3 = () => {


        setFranchisor3(!Franchisor3);
    };
    const BrokerFAQ1 = () => {


        setBroker1(!Broker1);
    };
    const BrokerFAQ2 = () => {


        setBroker2(!Broker2);
    };
    const BrokerFAQ3 = () => {


        setBroker3(!Broker3);
    };
    const BrokerFAQ4 = () => {


        setBroker4(!Broker4);
    };

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
            <div className='container mx-auto'>
                <div className="my-5">
                    <div className='lg:ml-48 mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <h2 className='text-2xl font-bold'>FAQs</h2>
                    </div>
                    
                    <div
                        className="bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={mad}
                    >
                        <h2>  Q 1.Why Choose Business Post?</h2>
                    </div>

                    <AnimatePresence>
                        {Visible && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Business Post is a one stop solution for entrepreneurs in the business marketplace. You can trust us for finding business opportunities whether you are a business seller, business buyer or a business broker. Designed by experienced business professionals, this portal is free to join and market your business with low cost and effective marketing services.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <h2>Q 2. How can I look for business that i'm interested in?</h2>
                    </div>

                    <AnimatePresence>
                        {isDropdownVisible && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can look for the businesses of your interest from the business listings available on the website. Click on ‘Buy a Business’ or ‘Buy a Franchise’ and you land on the specific page.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={QuestionThree}
                    >
                        <h2>Q 3. How do I register with Business Post?</h2>
                    </div>

                    <AnimatePresence>
                        {Interest && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Getting registered on Business Post is easy. Just click on ‘My Business’ option available on the site and fill the form.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={QuestionFour}
                    >
                        <h2>Q 4.Goes Business Post display sufficient information about business ?</h2>
                    </div>

                    <AnimatePresence>
                        {Information && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Yes, you get all the required information about the business of your interest on the Business Post.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={QuestionFive}
                    >
                        <h2>Q 5.Where does Business Post data about the business from?</h2>
                    </div>

                    <AnimatePresence>
                        {Website && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Business Post gets data about businesses from the advertisers who have registered on our website.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={QuestionSix}
                    >
                        <h2>Q 6.How do buyers make a contact with me?</h2>
                    </div>

                    <AnimatePresence>
                        {Contact && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>As you have provided the information about the business you are selling on Business Post while advertising with us, the buyers can contact you using that information.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className=" bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={QuestionSeven}
                    >
                        <h2>Q 7.Can I remain anonymous when selling?</h2>
                    </div>

                    <AnimatePresence>
                        {Remaining && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Yes, you can sell your business on Business Post even by remaining anonymous.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Buyers FAQ */}



                {/* sections */}


                <div className="my-10">
                    <div className='lg:ml-48 mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <h2 className='text-2xl font-bold'>Buyer's FAQs</h2>
                    </div>
                    <div
                        className="divider mb-4">

                    </div>
                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BuyerQuestionOne}
                    >
                        <h2>Q 1.How do I get more details about a business for sale?</h2>
                    </div>

                    <AnimatePresence>
                        {BuyerFaq1 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can easily get details about the business for sale by contacting the business sellers on the Business Post website.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="my-10">
                    <div
                        className="bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BuyerQuestionTwo}
                    >
                        <h2>Q 2.How to find business for sale?</h2>
                    </div>

                    <AnimatePresence>
                        {BuyerFaq2 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can go to the listings section on Business Post website and look out for the businesses for sale that you are interested in.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className="bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BuyerQuestionThree}
                    >
                        <h2>Q 3.What all should I include in my enquiry?</h2>
                    </div>

                    <AnimatePresence>
                        {BuyerFaq3 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>While making an inquiry, you can give information about yourself and explain what attracted you to the business and how you are planning to get your business funded. You should look like a serious buyer in your enquiry and stand out from the others who are also enquiring the sellers.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Seller FAQ */}

                <div className="my-10">
                    <div className='lg:ml-48 mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <h2 className='text-2xl font-bold'>Seller's FAQs</h2>
                    </div>
                    <div
                        className="divider mb-4">

                    </div>
                    <div
                        className="bg-[#4f287b]  w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={SellerFAQ1}
                    >
                        <h2>Q 1.How do I market my business for sale?</h2>
                    </div>

                    <AnimatePresence>
                        {Seller1 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can easily get details about the business for sale by contacting the business sellers on the Business Post website.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* seller FAQ */}
                <div className="my-10">

                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={SellerFAQ2}
                    >
                        <h2>Q 2.Do You need a broker to sell a business?</h2>
                    </div>

                    <AnimatePresence>
                        {Seller2 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]' >No, you can put an ad about your business for sale on the Business Post website and can sell your business conveniently. You don’t need a broker to do this part of the job, so you save money here.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">

                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={SellerFAQ3}
                    >
                        <h2>Q 3.How do I sell my business privately?</h2>
                    </div>

                    <AnimatePresence>
                        {Seller3 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can advertise on the Business post website and sell your business privately on this portal.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Franchisor's FAQs */}


                <div className="my-10">
                    <div className='lg:ml-48 mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <h2 className='text-2xl font-bold'>Franchisor's FAQs</h2>
                    </div>
                    <div
                        className="divider mb-4">

                    </div>
                    <div
                        className=" bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={FranchisorFAQ1}
                    >
                        <h2>Q 1.How do I sell my franchise here?</h2>
                    </div>

                    <AnimatePresence>
                        {Franchisor1 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can advertise your franchise details that you want to sell here on the Business Post website and conveniently sell your franchise.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={FranchisorFAQ2}
                    >
                        <h2>Q 2.Where to buy a franchise from?</h2>
                    </div>

                    <AnimatePresence>
                        {Franchisor2 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm'>Undoubtedly, Business Post. You can buy a franchise from Business Post very conveniently.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">
                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={FranchisorFAQ3}
                    >
                        <h2>Q 3.I want to buy a franchise. Where do I star?</h2>
                    </div>

                    <AnimatePresence>
                        {Franchisor3 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>If you have made up your mind to buy a franchise, do not look any further. Find your most desired franchise business only here at the Business Post website.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="my-10">
                    <div className='lg:ml-48 mb-5'>
                        <hr className='h-1 bg-[#4f287b] w-16 ' />
                        <h2 className='text-2xl font-bold'>Broker's FAQs</h2>
                    </div>
                    <div
                        className="divider mb-4">

                    </div>
                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BrokerFAQ1}
                    >
                        <h2>Q 1.How do I register as a broker on business Post?</h2>
                    </div>

                    <AnimatePresence>
                        {Broker1 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>If you want to register as a broker on the Business Post, complete the provided registration form and just follow the instructions. You will be assigned a user name and password once you have registered. With this, you can access the account maintenance page that helps you add, track and maintain your listings.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">

                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BrokerFAQ2}
                    >
                        <h2>Q 2.How long will it take my listing to get enquiries?</h2>
                    </div>

                    <AnimatePresence>
                        {Broker2 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>There is no specific time duration for your listing to get an enquiry. However, it depends on your business type and your demanded price that determines how fast you receive a buyer’s inquiry.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">

                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BrokerFAQ3}
                    >
                        <h2>Q 3.How can i get bulk listing for my clients?</h2>
                    </div>

                    <AnimatePresence>
                        {Broker3 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>Once you have registered with Business Post, you can get bulk listings for your clients easily.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="my-10">

                    <div
                        className="bg-[#4f287b] w-full md:w-9/12 mx-auto sm:w-full text-white p-4 cursor-pointer"
                        onClick={BrokerFAQ4}
                    >
                        <h2>Q 4.What if i encounter any technical issue regarding the use of the site? </h2>
                    </div>

                    <AnimatePresence>
                        {Broker4 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                                className="bg-gray-100 p-4 w-full md:w-9/12 mx-auto sm:w-full shadow-md overflow-hidden"
                            >
                                {/* Dropdown content goes here */}
                                <p className='text-sm text-[#3e3e3e]'>You can always contact us by filling out the provided ‘contact us’ form if you encounter any technical issue regarding the use of the site and one of our team members will get back to you soon to resolve your issue.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>



            </div>


        </>
    );
};

export default Faq;