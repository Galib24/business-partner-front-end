import React from 'react';
import Video from '../Video/Video';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';
import ThirdSection from '../Third Section/ThirdSection';

const Home = () => {
    return (
        <div>
            {/* <h2>this is home</h2> */}
            <Video></Video>
            <FirstSection></FirstSection>
            <ThirdSection></ThirdSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;