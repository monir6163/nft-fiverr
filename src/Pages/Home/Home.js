import React from "react";
import Featured from "../../Components/Featured/Featured";
import Innovate from "../../Components/Innovate/Innovate";
import RoadMap from "../../Components/RoadMap/RoadMap";
import Nav from "../../Components/Shared/Nav";
import Tokenomics from "../../Components/Tokenomics/Tokenomics";
import Hero from "./Hero/Hero";
import "./Home.css";

const Home = () => {
    return (
        <div className="main_home">
            <div className="hero_bg">
                <Nav />
                <div className="hero_text">
                    <Hero />
                    <Featured />
                    <Innovate />
                    <Tokenomics />
                    <RoadMap />
                </div>
            </div>
        </div>
    );
};

export default Home;
