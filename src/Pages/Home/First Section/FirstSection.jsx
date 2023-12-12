import React from 'react';
import image from '../../../assets/images/about-us-img.png';

const FirstSection = () => {
  
  return (
    <>
      <div className='container bg-white mx-auto'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2  mb-10  sm:mx-0 '>
          <div className='mt-8 ml-10 sm:mt-28 md:mt-10 lg:ml-40 lg:mt-32 md:ml-16'>
            <hr style={{ border: '3px solid #774e88', borderRadius: '5px 5px 5px 5px', width: '80px' }} />
            <h2 style={{ fontSize: '28px' }} className='font-bold mt-2'>
              Welcome To Business Post
            </h2>
            <div style={{ fontSize: '14px' }} className='text-[#3e3e3e] font-serif mt-5 '>
              <h2>
                Business Post is a one-stop shop for aspiring entrepreneurs. Whether you are looking to buy a business,
                sell a business, or acquire a franchise, the Business Post is your Business Opportunities Hub. Get on
                board with the best business marketplace portal and find your dream business!
              </h2>
            </div>

            <div className='flex-row mt-6  md:flex-row lg:flex-row '>
              <div
                style={{ border: '2px solid #774e88', padding: '5px 20px' }}
                className='dropdown mb-4  sm:mb-0 hover:bg-[#774e88] duration-300 ease-in-out cursor-pointer text-[#774e88] hover:text-white sm:mr-4'
              >
                My Business
              </div>
              <div
                style={{ border: '2px solid #774e88', padding: '5px 20px' }}
                className='dropdown hover:bg-[#774e88] duration-300 ease-in-out cursor-pointer ml-2 text-[#774e88] hover:text-white'
              >
                My Business
              </div>
            </div>
          </div>

          <div className='text-center mb-10'>
            <img className='lg:w-8/12 md:w-10/12 w-11/12 md:mt-10 xl:mt-20 mx-auto' src={image} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
