import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import img1 from './../../../assets/images/logoname.png';
import img2 from './../../../assets/images/profile-setting-icon.png';
import img3 from './../../../assets/images/whish-list-icon.png';
import img4 from './../../../assets/images/ads-icon-img.png';
import menu from './../../../assets/images/menu-color.png';
import leftArrow from './../../../assets/images/menu-color2.png';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
'./Navbar.css'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const imageToShow = menuOpen ?  leftArrow :  menu
    return (
        <div
            className="bg-white w-full fixed z-30 top-0 py-2 lg:py-0">
            <header
                className="container mx-auto">
                <nav
                    className="py-2 navbar mx-auto max-w-screen-3xl">
                    {/* Desktop part */}
                    <div
                        className="lg:flex lg:ml-36 items-center justify-between h-full lg:px-4 w-full">
                        <Link className="hidden sm:block">
                            <img style={{ width: '150px' }} src={img1} alt="" />
                        </Link>
                        <div>
                            <ul className="hidden sm:flex text-black items-center">
                                <li>

                                    <div className="dropdown   dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Buy a Business <MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Search For Business</a></li>
                                        </ul>
                                    </div>

                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Buy a Franchise<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Search For Franchise</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Sell a Business<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Sell For free</a></li>
                                        </ul>
                                    </div>

                                </li>
                                <li>



                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Business Brokers<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Brokers Directory</a></li>
                                            <li><a>Business sales Promo</a></li>
                                            <li><a>Brokers Directory Promo</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Franchisor<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56">
                                            <li><a>Franchisors Directory</a></li>
                                            <li><a>Franchisors Sales Promo</a></li>
                                            <li><a>Franchisors Directory Promo</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="w-fit">
                                        <h2>Business Wanted</h2>
                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div style={{ border: '1px solid black' }} className="dropdown hidden sm:block hover:bg-[#774e88]  duration-300 ease-in-out  text-black dropdown-bottom dropdown-end mr-20">
                            <label tabIndex={0} className="flex  justify-center items-center cursor-pointer hover:text-white   m-1">
                                <img width={20} className='mr-1' src={img2} alt="" />
                                My Business  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></label>

                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img4} alt="" />
                                        <h2>Post a Free Ad</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img4} alt="" />
                                        <h2>Manage Ads</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img3} alt="" />
                                        <h2>My Watchlist</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} className='mr-1' src={img2} alt="" />
                                        <h2>Profile Setting</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* sm */}
                        <div
                            className="sm:hidden cursor-pointer grid grid-cols-12 gap-5 items-center">
                            <div
                                onClick={toggleMenu}
                                className="flex items-starts justify-center col-span-2">
                                {/* <HiMenuAlt2 className="w-9 h-9 text-black ms-1" /> */}
                                <img src={imageToShow} alt="" />
                            </div>
                            <Link
                                className="col-span-5  flex items-center justify-center"
                            >
                                <img style={{ width: '150px' }} src={img1} alt="" />
                            </Link>
                            <div style={{ border: '1px solid black' }} className="dropdown  col-span-5  hover:bg-[#774e88]  duration-300 ease-in-out  text-black dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="flex  justify-center items-center cursor-pointer hover:text-white">
                                <img width={18} className='mr-1' src={img2} alt="" />
                                My Business  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></label>

                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img4} alt="" />
                                        <h2>Post a Free Ad</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img4} alt="" />
                                        <h2>Manage Ads</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} src={img3} alt="" />
                                        <h2>My Watchlist</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <img width={16} className='mr-1' src={img2} alt="" />
                                        <h2>Profile Setting</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        </div>
                    </div>

                    {/* dashboard for small device interface */}
                    <div
                        className={`fixed top-20 left-0 w-[60%] sm:hidden h-screen bg-indigo-50 p-10  transition-transform duration-500 ease-in-out ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                            }`}
                    >
                        {/* cross sine */}
                        <div
                            className="flex w-full items-center justify-between">
                            {/* <div
                                onClick={toggleMenu}
                                className="flex items-starts justify-center col-span-2">
                                <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />

                            </div> */}
                            {/* <div>
                                <Link >
                                    sg
                                </Link>
                            </div> */}
                            {/* <div

                                className="cursor-pointer">
                                <h2>gsc</h2>
                            </div> */}
                        </div>

                        {/* mobile device menu */}
                        <div
                            className="flex-col  font-semibold text-gray-500">
                            <ul className='absolute top-4 left-4'>
                                <li
                                    className="hover:underline">
                                    <Link
                                    >
                                       Post a Free Ad
                                    </Link>
                                   <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                   <div className='flex'>
                                  <div className='flex'>
                                  <Link
                                    >
                                        Buy a Business
                                    </Link>
                                    <MdOutlineKeyboardArrowDown className='mt-1'></MdOutlineKeyboardArrowDown>
                                  </div>
                                   </div>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                   <div className='flex'>
                                   <Link
                                    >
                                        Buy a Franchise
                                    </Link>
                                    <MdOutlineKeyboardArrowDown className='mt-1'></MdOutlineKeyboardArrowDown>
                                   </div>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                   <div className='flex'>
                                   <Link
                                    >
                                        Sell a Business
                                    </Link>
                                    <MdOutlineKeyboardArrowDown className='mt-1'></MdOutlineKeyboardArrowDown>
                                   </div>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex'>
                                    <Link
                                    >
                                        Business Broker
                                    </Link>
                                    <MdOutlineKeyboardArrowDown className='mt-1'></MdOutlineKeyboardArrowDown>
                                    </div>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                   <div className='flex'>
                                   <Link
                                    >
                                       Franchisors
                                    </Link>
                                    <MdOutlineKeyboardArrowDown className='mt-1'></MdOutlineKeyboardArrowDown>
                                   </div>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    >
                                        Business Wanted
                                    </Link>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    >
                                        Login/Register
                                    </Link>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    >
                                        Logout
                                    </Link>
                                    <hr  style={{border: '1px solid black', marginTop: '6px'}} className='w-52'/>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;