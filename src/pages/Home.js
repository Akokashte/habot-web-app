import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Location from "../components/Home/Location";
import VideoGuide from "../components/Home/VideoGuide";
import GetVerified from "../components/Home/GetVerified";
import HowItWorks from "../components/Home/HowItWorks";


const Home = () => {
    return (
        <>
            <HeroSection />
            <Location />
            <VideoGuide />
            <GetVerified />
            <HowItWorks />
        </>
    )
}

export default Home;