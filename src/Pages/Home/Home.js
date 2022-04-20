import React from "react";
import According from "../../Components/According/According";
import Featured from "../../Components/Featured/Featured";
import Innovate from "../../Components/Innovate/Innovate";
import Mint from "../../Components/Mint/Mint";
import Footer from "../../Components/Shared/Footer";
import Nav from "../../Components/Shared/Nav";
import Tokenomics from "../../Components/Tokenomics/Tokenomics";
import Hero from "./Hero/Hero";
import "./Home.css";

const Home = () => {
    return (
        <div className="main_home" id="home">
            <div className="hero_bg">
                <Nav />
                <div className="hero_text">
                    <Hero />
                    <Featured />
                    <Innovate />
                    <Mint />
                    <Tokenomics />
                    <According />

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
