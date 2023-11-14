import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-neutral'>

                {/* second part */}
                <div className='bg-[#774e88] overflow-hidden'>
                    <div className='container mx-auto overflow-hidden flex flex-col md:flex-row justify-between bg-[#774e88]  text-white'>
                        <div className='flex justify-center md:justify-start items-center md:items-start px-5 mb-4 md:mb-0'>
                            <h2 className='text-2xl ml-36 mt-12'>Do Business Where Business is Done</h2>

                        </div>

                        <div className="w-1/2 relative right-0 bottom-0 hidden sm:block h-36  py-20   bg-[#b4a5c7] translate-x-4 -skew-x-12 origin-left">
                            <div className='flex absolute right-72 bottom-16   justify-center items-center md:justify-end'>
                                <button className='p-3 px-10 transform skew-x-12 bg-[#774e88]'>Sell Your Business</button>
                            </div>
                        </div>


                    </div>


                </div>

                {/* third part */}
                <footer className="footer p-4 md:p-10 bg-[#291958] text-white container mx-auto flex flex-col justify-between items-center max-h-screen overflow-y-auto">
                    <div style={{ fontSize: '14px' }} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-10 lg:gap-10">
                        <ul className="mb-4">
                            <li className="footer-title">Company</li>
                            <li className="link link-hover">About Us</li>
                            <li className="link link-hover">Gallery</li>
                            <li className="link link-hover">Contact Us</li>
                            <li className="link link-hover">Terms of Services</li>
                            <li className="link link-hover">Privacy Policy</li>
                            <li className="link link-hover">Site Map</li>
                            <li className="link link-hover">FAQ</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Business Search</li>
                            <li className="link link-hover">Business Opportunities</li>
                            <li className="link link-hover"><Link to={'/businessList'}>Franchise Opportunities</Link></li>
                            <li className="link link-hover">Partnership Opportunities</li>
                            <li className="link link-hover">Innovation Opportunities</li>
                            <li className="link link-hover">Internet Opportunities</li>
                            <li className="link link-hover">Migration Opportunities</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Advertise</li>
                            <li className="link link-hover">Advertise for Free</li>
                            <li className="link link-hover">Business Sales</li>
                            <li className="link link-hover">Franchise Sales</li>
                            <li className="link link-hover">Partnership Sales</li>
                            <li className="link link-hover">Innovation Sales</li>
                            <li className="link link-hover">Websites Sales</li>
                            <li className="link link-hover">Business Migration</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Marketplace</li>
                            <li className="link link-hover">Business Market
                            </li>
                            <li className="link link-hover">Business National</li>
                            <li className="link link-hover">BInvest</li>
                            <li className="link link-hover">Immigration Post</li>
                            <li className="link link-hover">Franchise Post</li>
                            <li className="link link-hover">Biz search</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Entrepreneur Center</li>
                            <li className="link link-hover">Business Valuation</li>
                            <li className="link link-hover">Business Finance</li>
                            <li className="link link-hover"><Link to={'/blogs'}>Business Blog Posts</Link></li>
                        </ul>
                        <ul className="mb-4">
                            <li className="footer-title">Stay Connected</li>
                            <li className="link link-hover">Facebook</li>
                            <li className="link link-hover">Linkedin</li>
                            <li className="link link-hover">Instagram</li>
                            <li className="link link-hover">Pinterest</li>
                            <li className="link link-hover">Youtube</li>
                        </ul>
                    </div>
                    {/* search input */}
                    <form className="w-full text-black  md:w-1/4 mb-4 md:mb-0 lg:mx-auto md:ml-44">
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