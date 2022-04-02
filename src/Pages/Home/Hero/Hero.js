import React from "react";
import nft from "../../../images/nft.png";
import nftsm from "../../../images/small-nft.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="flex flex-col mt-24 md:mt-36 items-center">
            <span className="text-5xl leading-normal text-white max-w-lg md:text-6xl font-bold text-center md:leading-normal">
                Welcome to <span>LunarSwap.</span>
            </span>
            <span className="font-medium opacity-70 max-w-xs mx-4 md:max-w-sm mt-4 text-xl text-center text-white">
                Innovative, decentralized yield farming token which
                automatically rewards both BNB and LUNAR.
            </span>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center w-full mt-5">
                <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full text-xl font-bold ml-8 mr-8 w-full md:w-48 md:px-10 py-4 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    WhitePaper
                </button>
                <button
                    type="button"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-xl font-bold ml-8 mr-8 w-full md:w-48 md:px-10 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Buy
                </button>
            </div>
            <div className="nft_img">
                <img className="hidden md:block" src={nft} alt="" />
                <img className="md:hidden" src={nftsm} alt="" />
            </div>
        </div>
    );
};

export default Hero;
