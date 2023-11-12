import React from 'react';
import image from '../../../assets/images/about-us-img.png'
const FirstSection = () => {
    return (
        <>
            <div className='grid grid-cols-2  my-12 ml-40'>
                <div className='ml-30 mt-28'>
                    <hr style={{border: '3px solid #774e88', borderRadius:'5px 5px 5px 5px', width: '80px'}} />
                    <h2 style={{fontSize: '28px'}} className='font-bold mt-2'>Welcome To Business Post</h2>
                    <div style={{fontSize: '14px'}} className='text-[#3e3e3e] font-serif mt-5'>
                        <h2>Business Post is a one-stop shop for aspiring entrepreneurs. Whether you are looking to buy a business,<br />
                            sell a business, or acquire a franchise, the Business Post is your Business Opportunities Hub. Get on <br />
                           board with the best business marketplace portal and find your dream business!
                        </h2>
                    </div>

                    <div className='flex mt-6'>
                        <div  style={{ border: '2px solid #774e88', padding: '5px 40px' }} className="dropdown hidden sm:block hover:bg-[#774e88]  duration-300 ease-in-out cursor-pointer  text-[#774e88] hover:text-white dropdown-bottom dropdown-end mr-20">
                            My Business
                        </div>
                        <div style={{ border: '2px solid #774e88', padding: '5px 40px' }} className="dropdown hidden sm:block hover:bg-[#774e88]  duration-300 ease-in-out cursor-pointer  text-[#774e88] hover:text-white dropdown-bottom dropdown-end mr-20">
                            My Business
                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-11/12 ml-5' src={image} alt="" />
                </div>
            </div>
        </>
    );
};

export default FirstSection;