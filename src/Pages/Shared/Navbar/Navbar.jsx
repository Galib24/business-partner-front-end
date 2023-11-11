import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div
            className="bg-gradient-to-r from-cyan-50 to-blue-100 w-full fixed z-30 top-0 py-1 lg:py-0">
            <header
                className="container mx-auto">
                <nav
                    className="py-1 max-w-screen-3xl">
                    {/* Desktop part */}
                    <div
                        className="lg:flex items-center justify-between h-full lg:px-4 w-full">
                        <Link
                        >
                            ga

                        </Link>
                        <div
                            className="text-white hidden sm:flex">
                            <ul className="hidden sm:flex text-black items-center">
                                <li

                                >
                                    <Link

                                        className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:font-bold">
                                        Home
                                    </Link>
                                </li>
                                <li

                                >
                                    <Link

                                        className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:font-bold">
                                        Find A Job
                                    </Link>
                                </li>
                                <li

                                >
                                    <Link

                                        className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:font-bold">
                                        Find A Seekers
                                    </Link>
                                </li>
                                <li
                                >
                                    <Link

                                        className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:font-bold">
                                        Blogs
                                    </Link>
                                </li>
                                <li

                                >
                                    <Link

                                        className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:font-bold">
                                        About
                                    </Link>
                                </li>







                                {/* lg */}
                                <li
                                    className="flex items-center space-x-5 text-[#F68519]ml-10">

                                </li>
                            </ul>
                        </div>

                        {/* sm */}
                        <div
                            className="sm:hidden cursor-pointer grid grid-cols-12 items-center">
                            <div
                                onClick={toggleMenu}
                                className="flex items-starts justify-center col-span-2">
                                <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />
                            </div>
                            <Link
                                className="col-span-8 flex items-center justify-center"
                            >
                                ggf
                            </Link>

                        </div>
                    </div>

                    {/* dashboard for small device interface */}
                    <div
                        className={`fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-indigo-50 p-10 transition-transform duration-500 ease-in-out ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                            }`}
                    >
                        {/* cross sine */}
                        <div
                            className="flex w-full items-center justify-between">
                            <div
                                onClick={toggleMenu}
                                className="flex items-starts justify-center col-span-2">
                                <HiMenuAlt2 className="w-9 h-9 text-black ms-1" />
                            </div>
                            <div>
                                <Link >
                                    sg
                                </Link>
                            </div>
                            <div

                                className="cursor-pointer">
                                <h2>gsc</h2>
                            </div>
                        </div>

                        {/* mobile device menu */}
                        <div
                            className="flex-col py-4 font-semibold text-gray-500">
                            <ul>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Find A Job
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Find A Seekers
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        About
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        HR
                                    </Link>
                                </li>
                                <li
                                    className="py-4 hover:underline">
                                    <Link
                                    >
                                        Seekers
                                    </Link>
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