import React, { useState } from 'react';

const SecondSection = () => {
    const [itemsToShow, setItemsToShow] = useState(3);
    const [showViewMore, setShowViewMore] = useState(true);

    const handleViewMoreClick = () => {
        setItemsToShow(itemsToShow + 3);

        // Check if there are more items to show
        if (itemsToShow + 3 >= 6) {
            setShowViewMore(false); // Hide "View More" button
        }
    };

    const handleViewLessClick = () => {
        setItemsToShow(3); // Reset the number of items to show
        setShowViewMore(true); // Show "View More" button again
    };


    const [itemsToShow2, setItemsToShow2] = useState(3);
    const [showViewMore2, setShowViewMore2] = useState(true);

    const handleViewMoreClick2 = () => {
        setItemsToShow2(itemsToShow2 + 3);

        // Check if there are more items to show
        if (itemsToShow2 + 3 >= 6) {
            setShowViewMore2(false); // Hide "View More" button
        }
    };

    const handleViewLessClick2 = () => {
        setItemsToShow2(3); // Reset the number of items to show
        setShowViewMore2(true); // Show "View More" button again
    };


    const [itemsToShow3, setItemsToShow3] = useState(3);
    const [showViewMore3, setShowViewMore3] = useState(true);

    const handleViewMoreClick3 = () => {
        setItemsToShow3(itemsToShow + 3);

        // Check if there are more items to show
        if (itemsToShow3 + 3 >= 6) {
            setShowViewMore3(false); // Hide "View More" button
        }
    };

    const handleViewLessClick3 = () => {
        setItemsToShow3(3); // Reset the number of items to show
        setShowViewMore3(true); // Show "View More" button again
    };



    const [itemsToShow4, setItemsToSho4] = useState(3);
    const [showViewMore4, setShowViewMore4] = useState(true);

    const handleViewMoreClick4 = () => {
        setItemsToSho4(itemsToShow4 + 3);

        // Check if there are more items to show
        if (itemsToShow4 + 3 >= 6) {
            setShowViewMore4(false); // Hide "View More" button
        }
    };

    const handleViewLessClick4 = () => {
        setItemsToSho4(3); // Reset the number of items to show
        setShowViewMore4(true); // Show "View More" button again
    };


    const [itemsToShow5, setItemsToSho5] = useState(3);
    const [showViewMore5, setShowViewMore5] = useState(true);

    const handleViewMoreClick5 = () => {
        setItemsToSho5(itemsToShow5 + 3);

        // Check if there are more items to show
        if (itemsToShow5 + 3 >= 6) {
            setShowViewMore5(false); // Hide "View More" button
        }
    };

    const handleViewLessClick5 = () => {
        setItemsToSho5(3); // Reset the number of items to show
        setShowViewMore5(true); // Show "View More" button again
    };


    const [itemsToShow6, setItemsToSho6] = useState(3);
    const [showViewMore6, setShowViewMore6] = useState(true);

    const handleViewMoreClick6 = () => {
        setItemsToSho6(itemsToShow6 + 3);

        // Check if there are more items to show
        if (itemsToShow6 + 3 >= 6) {
            setShowViewMore6(false); // Hide "View More" button
        }
    };

    const handleViewLessClick6 = () => {
        setItemsToSho6(3); // Reset the number of items to show
        setShowViewMore6(true); // Show "View More" button again
    };

    

    return (
        <>
            <footer className="footer container xl:px-12 mx-auto md:bg-[#6f42c1] xl:bg-[#291958] bg-[#291958] text-neutral-content ">

                <div className='flex flex-wrap gap-6 justify-center mt-10 ml-10 mb-14 md:grid md:grid-cols-4 xl:grid-cols-6  xl:gap-28 '>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Business Markets</li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow >= 4 && (
                            <>

                                {itemsToShow >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick}>View More</li>
                        )}
                        {!showViewMore && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick}>View Less</li>
                        )}
                    </ul>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Franchise Markets
                        </li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow2 >= 4 && (
                            <>

                                {itemsToShow2 >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore2 && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick2}>View More</li>
                        )}
                        {!showViewMore2 && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick2}>View Less</li>
                        )}
                    </ul>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Franchise Markets
                        </li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow3 >= 4 && (
                            <>

                                {itemsToShow3 >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore3 && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick3}>View More</li>
                        )}
                        {!showViewMore3 && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick3}>View Less</li>
                        )}
                    </ul>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Franchise Markets
                        </li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow4 >= 4 && (
                            <>

                                {itemsToShow4 >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore4 && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick4}>View More</li>
                        )}
                        {!showViewMore4 && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick4}>View Less</li>
                        )}
                    </ul>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Franchise Markets
                        </li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow5 >= 4 && (
                            <>

                                {itemsToShow5 >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore5 && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick5}>View More</li>
                        )}
                        {!showViewMore5 && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick5}>View Less</li>
                        )}
                    </ul>
                    <ul>
                        <li style={{ fontSize: '14px' }} className="text-white">Franchise Markets
                        </li>
                        <div style={{ border: '1px solid #83c3f0' }} class="border-b  border-gray-500 my-2"></div>

                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Australian Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NSW Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">QLD Business Sales</li>
                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0]  text-white">VIC Business Sales</li>
                        {itemsToShow6 >= 4 && (
                            <>

                                {itemsToShow6 >= 6 && (
                                    <>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">WA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">NT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">ACT Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">TAS Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">SA Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Sydney Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Brisbane Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Melbourne Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Perth Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Adelaide Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Hobart Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Darwin Business Sales</li>
                                        <li style={{ fontSize: '12px' }} className="cursor-pointer hover:text-[#83c3f0] my-2 text-white">Canberra Business Sales
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                        {showViewMore6 && (
                            <li className="link link-hover bg-[#774e88] text-center h-8  my-4 w-4/6 text-white " onClick={handleViewMoreClick6}>View More</li>
                        )}
                        {!showViewMore6 && (
                            <li className="link link-hover  bg-[#774e88] text-center h-8  my-4 w-4/6 text-white  " onClick={handleViewLessClick6}>View Less</li>
                        )}
                    </ul>
                </div>

            </footer>
        </>
    );
};

export default SecondSection;