import React from "react";
import rocket from "../../images/road-map.svg";
import Image from "../../images/tokeno.svg";
import RoadMap from "../RoadMap/RoadMap";
import "./Tokenomics.css";

const Tokenomics = () => {
    return (
        <div className="bg-[#15051c] text-white py-20 road_map" id="tokenomics">
            <div className="my-container">
                <div className="grid grid-cols-12 gap-4 ">
                    <div
                        className="col-span-12 lg:col-span-6 content-center items-center flex order-last lg:order-first"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <img src={Image} alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 content-center items-center flex">
                        <div
                            className="space-y-4 w-full lg:w-3/4"
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                        >
                            <h1 className="text-[30px] md:text-[54px] text-center lg:text-left font-bold">
                                Tokenomics
                            </h1>
                            <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                                ILX has a fixed total supply of 10 billion
                                (10,000,000,000) tokens. No more tokens can ever
                                be minted and the total supply can only be
                                deflated by sending to the dead address.
                            </p>
                            <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                                The tokens will primarily be distributed to
                                presale buyers and the liquidity pool. Our team
                                holds a small amount of tokens, all of which are
                                locked.
                            </p>
                            <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                                The team-owned tokens and any locked tokens will
                                be excluded from staking rewards. All rewards go
                                to real holders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <RoadMap />
            <img className="road_map_img" src={rocket} alt="" />
        </div>
    );
};

export default Tokenomics;
