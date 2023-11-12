import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-neutral'>
                <footer className="footer container p-10 px-40 mx-auto bg-[#291958] text-neutral-content">
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-24'>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                    </div>

                </footer>
                {/* second part */}
                <div className='bg-[#774e88]'>
                    <div className='container mx-auto  flex flex-col md:flex-row justify-between bg-[#774e88]  text-white'>
                        <div className='flex justify-center md:justify-start items-center md:items-start px-5 mb-4 md:mb-0'>
                            <h2 className='text-2xl ml-36 mt-12'>Do Business Where Business is Done</h2>

                        </div>

                        <div className="w-1/2 relative right-0 bottom-0  h-36  py-20   bg-[#b4a5c7] translate-x-4 -skew-x-12 origin-left">
                            <div className='flex absolute right-72 bottom-16   justify-center items-center md:justify-end'>
                                <button  className='p-3 px-10 transform skew-x-12 bg-[#774e88]'>Sell Your Business</button>
                            </div>
                        </div>


                    </div>


                </div>

                {/* third part */}
                <footer className="footer  p-4 md:p-10 bg-[#291958] text-white container mx-auto flex flex-col justify-between items-center">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-20 lg:gap-28">
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Services</li>
                            <li className="link link-hover">Branding</li>
                            <li className="link link-hover">Design</li>
                            <li className="link link-hover">Marketing</li>
                            <li className="link link-hover">Advertisement</li>
                        </ul>
                    </div>
                    {/* search input */}
                    <form className="w-full  md:w-1/4 mb-4 md:mb-0 lg:mx-auto md:ml-44">
                        <fieldset className="form-control container">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered w-full md:w-80 pr-16"
                                />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                            <label className="label mt-2 md:mt-0 md:ml-4">
                                <span className="label-text text-center ml-20">Enter your email address</span>
                            </label>
                        </fieldset>
                    </form>
                </footer>

            </div>
        </>
    );
};

export default Footer;