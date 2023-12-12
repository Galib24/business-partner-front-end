import React, { useEffect } from 'react';
import Video from '../Video/Video';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';
import ThirdSection from '../Third Section/ThirdSection';

const Home = () => {
    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
      }, []);
    
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