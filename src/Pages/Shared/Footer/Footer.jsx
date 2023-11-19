import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
    return (
        <>
            <div className='bg-neutral'>

                {/* second part */}
                <div className='bg-[#774e88] overflow-hidden '>
                    <div className='container mx-auto overflow-hidden flex flex-col md:flex-row justify-between bg-[#774e88]  text-white'>
                        <div className='flex justify-center md:justify-start items-center md:items-start px-5 mb-4 md:mb-0'>
                            <h2 className='text-2xl ml-36 mt-12'>Do Business Where Business is Done</h2>

                        </div>

                        <div className="w-1/2 relative right-0 bottom-0  hidden sm:block h-36  py-20   bg-[#b4a5c7] translate-x-4 -skew-x-12 origin-left">
                            <div className='flex absolute right-72 bottom-16   justify-center items-center md:justify-end'>
                                <button className='p-3 px-10 transform hidden sm:flex md:hidden lg:block skew-x-12 bg-[#774e88]'>Sell Your Business</button>
                            </div>
                        </div>





                    </div>


                </div>

                {/* third part */}
                <footer className="footer p-4 md:p-10 bg-[#291958] text-white container mx-auto flex flex-col justify-between items-center max-h-screen overflow-y-auto">
                    <div style={{ fontSize: '14px' }} className="flex flex-wrap gap-6 justify-center mt-10 ml-10 mb-14 md:grid md:grid-cols-4 xl:grid-cols-6  xl:gap-16">
                        <ul className="mb-4">
                            <li className=""><Link style={{ fontSize: '14px' }} className="text-white">Company</Link> </li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/about'}>About Us</Link> </li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/gallery'}>Gallery</Link></li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2" ><Link to={'/contactPost'}>Contact Us</Link></li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/terms'}>Terms of Services</Link> </li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"> <Link to={'/privacy'}>Privacy Policy</Link> </li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Site Map</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/faq'}>FAQ</Link></li>
                        </ul>
                        <ul className="mb-4">
                            <li className="style={{ fontSize: '14px' }}">Business Search</li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business Opportunities</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/businessList'}>Franchise Opportunities</Link></li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Partnership Opportunities</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Innovation Opportunities</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Internet Opportunities</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Migration Opportunities</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="style={{ fontSize: '14px' }}">Advertise</li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Advertise for Free</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business Sales</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Franchise Sales</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Partnership Sales</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Innovation Sales</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Websites Sales</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business Migration</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="style={{ fontSize: '14px' }}">Marketplace</li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/price'}>Business Market</Link>
                            </li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business National</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">BInvest</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Immigration Post</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Franchise Post</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Biz search</li>
                        </ul>
                        <ul className="mb-4">
                            <li className="style={{ fontSize: '14px' }}">Entrepreneur Center</li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business Valuation</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2">Business Finance</li>
                            <li className="cursor-pointer hover:text-[#83c3f0] my-2"><Link to={'/blogs'}>Business Blog Posts</Link></li>
                        </ul>
                        <ul className="mb-4">
                            <li className="style={{ fontSize: '14px' }}">Stay Connected</li>
                            <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>
                            <li className="cursor-pointer flex hover:text-[#83c3f0] my-2 gap-3 ">
                            <div style={{borderRadius: '50px'}} className='bg-white text-center w-full text-black'>
                            <TiSocialFacebook className='text-xl xl:ml-1' />
                                </div> 
                            <h2>Facebook</h2>
                            </li>
                            <li className="cursor-pointer flex hover:text-[#83c3f0] my-2 gap-3 ">
                            <div style={{borderRadius: '50px'}} className='bg-white text-center w-full text-black'>
                            <TiSocialLinkedin className='text-xl xl:ml-1' />
                                </div> 
                            <h2>LinkedIn</h2>
                            </li>
                            <li className="cursor-pointer flex hover:text-[#83c3f0] my-2 gap-3 ">
                            <div style={{borderRadius: '50px'}} className='bg-white text-center w-full text-black'>
                            <TiSocialInstagram className='text-lg xl:ml-1' />
                                </div> 
                            <h2>Instagram</h2>
                            </li>
                            <li className="cursor-pointer flex hover:text-[#83c3f0] my-2 gap-3 ">
                            <div style={{borderRadius: '50px'}} className='bg-white text-center w-full text-black'>
                            <TiSocialPinterest className='text-lg xl:ml-1' />
                                </div> 
                            <h2>Pinterest</h2>
                            </li>
                            <li className="cursor-pointer flex hover:text-[#83c3f0] my-2 gap-3 ">
                            <div style={{borderRadius: '50px'}} className='bg-white text-center w-full text-black'>
                            <TiSocialYoutube className='text-lg xl:ml-1' />
                                </div> 
                            <h2>Youtube</h2>
                            </li>
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