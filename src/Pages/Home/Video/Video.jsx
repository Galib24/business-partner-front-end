import React from 'react';
import videoBg from '../../../assets/video/header-video1.mp4'
import './Video.css'

const Video = () => {
    return (
        <div className='main max-w-screen-3xl'>
            <video className='video' src={videoBg} autoPlay loop muted></video>
            <div className="overlay"></div>
            {/* input filed  */}
            <div className='container mx-auto'>
                <div
                    style={{ backgroundColor: 'rgba(255,255,255,.2)' }}
                    className="overflow-hidden    shadow-lg absolute top-48 ml-56  py-8 px-28 rounded-full mt-8 lg:mt-16">
                    <div className='flex   gap-3 '>
                        <div style={{ border: '1px solid #ced4da' }} className="w-fit bg-white cursor-pointer">
                            <select style={{ padding: '10px 8px' }} className="bg-transparent cursor-pointer">
                                <option>Opportunity Type</option>
                                <option>Business For Sale</option>

                            </select>
                        </div>
                        <div className="w-fit mathewMan">
                            <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
                                <option>Industry</option>
                                <option>Business For Sale</option>

                            </select>
                        </div>
                        <div className="w-fit mathewMan">
                            <select style={{ padding: '10px 8px' }} className="w-fit bg-white cursor-pointer">
                                <option>Location</option>
                                <option>Business For Sale</option>

                            </select>
                        </div>
                        <div className="bg-[#774e88] px-16 cursor-pointer">
                            <h2 className='mt-2 text-white'>Search</h2>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Video;