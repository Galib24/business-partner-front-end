import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import img1 from './../../../assets/images/logoname.png';
import img5 from './../../../assets/images/logonamewhite.png';
import img2 from './../../../assets/images/profile-setting-icon.png';
import img3 from './../../../assets/images/whish-list-icon.png';
import img4 from './../../../assets/images/ads-icon-img.png';
import menu from './../../../assets/images/menu-color.png';
import leftArrow from './../../../assets/images/menu-color2.png';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
'./Navbar.css'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const imageToShow = menuOpen ? leftArrow : menu;

    // logo
    const logoImage = scrolled ? img1 : img5;



    return (
        <div
            className={`fixed  z-10  xl:bg-opacity-100 ${scrolled ? 'bg-white xl:opacity-100  text-black ease-in-out transition-all duration-300 ' : 'xl:bg-black xl:bg-opacity-25 bg-white  text-white'} w-full bg-white top-0 py-2 lg:py-0`}>
            <header
                className="container mx-auto">
                <nav
                    className="xl:py-2 navbar mx-auto max-w-screen-3xl">
                    {/* Desktop part */}
                    <div
                        className="lg:flex lg:ml-36 md:ml-0 sm:ml-0 lg:items-center lg:justify-between  h-full lg:px-4  w-full">
                        <Link className="hidden lg:flex">
                            <img  style={{ width: '150px' }}  src={logoImage} alt="" />
                        </Link>
                        <div className='xl:ml-16 '>
                            <ul className="hidden md:hidden lg:flex  items-center">
                                <li>

                                    <div className="dropdown   dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Buy a Business <MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link to={'/businessList'} className='text-black'>Search For Business</Link></li>
                                        </ul>
                                    </div>

                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Buy a Franchise<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link to={'/businessList'} className='text-black'>Search For Franchise</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Sell a Business<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <Link to={'/price'} className='text-black'><a>Sell For free</a></Link>
                                        </ul>
                                    </div>

                                </li>
                                <li>



                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Business Brokers<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link className='text-black'>Brokers Directory</Link></li>
                                            <li>
                                                <Link to={'/login'} className='text-black'><a>Business sales Promo</a></Link>
                                            </li>
                                            <li><Link to={'/login'} className='text-black'>Brokers Directory Promo</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>

                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="flex justify-center items-center cursor-pointer">Franchisor<MdOutlineKeyboardArrowDown className='mr-2 ml-1'></MdOutlineKeyboardArrowDown> </label>

                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56">
                                            <li><Link to={'/franchise'} className='text-black'>Franchisors Directory</Link></li>
                                            <li><Link to={'/login'} className='text-black'>Franchisors Sales Promo</Link></li>
                                            <li><Link to={'/login'} className='text-black'>Franchisors Directory Promo</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="w-fit">
                                        <Link to={'/businessWanted'}>Business Wanted</Link>
                                    </div>
                                </li>

                            </ul>

                        </div>

                        <div className={`hidden md:hidden lg:flex ${scrolled ? "  bg-[#774e88] translate-y-1 hidden sm:flex  translate-x-10 -skew-x-12 origin-left xl:py-4 px-12  ease-in-out transition-all duration-300   " : ''}`}>

                            <div style={{ border: '1px solid white' }}  className={`dropdown hidden ${scrolled ? 'transform skew-x-12 bg-[#774e88] text-white ' : 'border-1 border-white text-white'} sm:block hover:bg-[#774e88]   ease-in-out  text-black dropdown-bottom dropdown-end xl:mr-20 transition-all duration-500 `}>
                                <label tabIndex={0} className="flex  justify-center items-center cursor-pointer hover:text-white   xl:m-1">
                                    <img width={20} className='mr-1' src={img2} alt="" />
                                    My Business  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></label>

                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                                    <li>
                                        <div className='flex'>
                                            <img width={16} src={img4} alt="" />
                                            <Link to={'/login'} className='text-black'>

                                                <h2>Post a Free Ad</h2>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex'>
                                            <img width={16} src={img4} alt="" />
                                            <Link to={'/login'} className='text-black'>

                                                <h2>Manage Ads</h2>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex'>
                                            <img width={16} src={img3} alt="" />
                                            <Link to={'/login'} className='text-black'>My Watchlist</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex'>
                                            <img width={16} className='mr-1' src={img2} alt="" />
                                            <Link to={'/login'} className='text-black'>

                                                <h2>Profile Setting</h2>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>




                        {/* sm */}
                        <div
                            className="lg:hidden  md:flex md:justify-between  cursor-pointer  grid grid-cols-12 gap-5 w-full  items-center">
                            <div
                                onClick={toggleMenu}
                                className="flex items-starts justify-center col-span-2 md:ml-6">
                                {/* <HiMenuAlt2 className="w-9 h-9 text-black ms-1" /> */}
                                <img src={imageToShow} alt="" />
                            </div>
                            <Link
                                className="col-span-5  flex items-center justify-center"
                            >
                                <img style={{ width: '150px' }} src={img1} alt="" />
                            </Link>
                            <div style={{ border: '1px solid black' }} className="dropdown mr-3  col-span-5  bg-[#774e88]  duration-300 ease-in-out  text-white dropdown-bottom dropdown-end">
                                <label tabIndex={0} className="flex  justify-center items-center cursor-pointer text-white">
                                    <img width={18} className='mr-1' src={img2} alt="" />
                                    My Business  <MdOutlineKeyboardArrowDown className='text-white'></MdOutlineKeyboardArrowDown></label>

                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 text-black">
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
                        className={`fixed top-20 left-0 w-[60%] md:w-[30%] lg:hidden  h-screen bg-[#774e88] p-10  transition-transform duration-500 ease-in-out ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
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
                            className="flex-col   font-semibold bg-[#774e88]  text-white">
                            <ul className='absolute flex flex-col gap-1  top-4 left-4'>
                                <li
                                    className="hover:underline">
                                    <Link
                                    >
                                        Post a Free Ad
                                    </Link>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex'>
                                        <div className='flex items-center'>
                                            <Link
                                            >
                                                Buy a Business
                                            </Link>
                                            <MdOutlineKeyboardArrowDown className='mt-1 ml-1'></MdOutlineKeyboardArrowDown>
                                        </div>
                                    </div>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex items-center'>
                                        <Link
                                        >
                                            Buy a Franchise
                                        </Link>
                                        <MdOutlineKeyboardArrowDown className='mt-1 ml-1'></MdOutlineKeyboardArrowDown>
                                    </div>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex items-center'>
                                        <Link
                                        >
                                            Sell a Business
                                        </Link>
                                        <MdOutlineKeyboardArrowDown className='mt-1 ml-1 '></MdOutlineKeyboardArrowDown>
                                    </div>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex items-center'>
                                        <Link
                                        >
                                            Business Broker
                                        </Link>
                                        <MdOutlineKeyboardArrowDown className='mt-1 ml-1'></MdOutlineKeyboardArrowDown>
                                    </div>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <div className='flex items-center'>
                                        <Link
                                        >
                                            Franchisors
                                        </Link>
                                        <MdOutlineKeyboardArrowDown className='mt-1 ml-1'></MdOutlineKeyboardArrowDown>
                                    </div>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    className='text-white'>
                                        Business Wanted
                                    </Link>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    className='text-white'>
                                        Login/Register
                                    </Link>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
                                </li>
                                <li
                                    className="hover:underline">
                                    <Link
                                    className='text-white'>
                                        Logout
                                    </Link>
                                    <hr style={{ border: '.5px solid white', marginTop: '6px' }} className='w-40 my-1' />
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