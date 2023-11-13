import React from 'react';
import Video from '../Video/Video';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';

const Home = () => {
    return (
        <div>
            {/* <h2>this is home</h2> */}
            <Video></Video>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;