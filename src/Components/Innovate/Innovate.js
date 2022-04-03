import React from "react";
import img3 from "../../images/lunar.svg";
import img2 from "../../images/pending.svg";
import img1 from "../../images/staking.svg";
import img4 from "../../images/swap.svg";
import Classes from "./Innovate.module.css";

const Colors = [
    {
        id: 1,
        title: "Staking Rewards",
        img: img1,
        desc: "Earn $ILX and BNB automatically over time, paid out on our dApp or after every transaction.",
    },
    {
        id: 2,
        title: "Pending Orders",
        img: img2,
        desc: "No more sleepless nights with PancakeSwap. Set your Take Profit, Stop Loss, and Entry soon.",
    },
    {
        id: 3,
        title: "ILXSniper",
        img: img3,
        desc: "Never miss a potential gem again once ILXSnipes releases to secure your entry spot.",
    },
    {
        id: 4,
        title: "Swap Platform",
        img: img4,
        desc: "Getting tired of errors or lag from PancakeSwap? ILXSwap will save you from that trouble.",
    },
];

const Innovate = () => {
    return (
        <div className="bg-[#1D0B25] text-white py-20">
            <div className="my-container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6 content-center items-center flex flex-col  lg:border-r-2 lg:border-b-0 border-b-2 border-slate-600 border-opacity-25">
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <h1
                                className={`${Classes.innovate_title} text-[2rem] md:text-[60px] font-bold md:leading-tight text-center lg:text-left`}
                            >
                                Innovative auto farming token.
                            </h1>
                            <p className="mt-10 text-[18px] font-bold text-slate-400 text-center lg:text-left px-4 lg:px-0">
                                With ILXSwap's innovative code, all of your
                                ILXSwap tokens will be automatically staked for
                                you to be rewarded in BNB and ILXSwap tokens!
                                <p className="mt-[15px] text-base font-bold text-slate-400">
                                    ILXSwap Token will be the only token
                                    accepted in our ecosystem.
                                </p>
                                <p className="mt-[15px] text-base font-bold text-slate-400">
                                    Our ecosystem will consist of the following:
                                </p>
                                <p className="mt-[15px] text-base font-bold text-slate-400">
                                    - Pending orders for Pancakeswap Trading
                                </p>
                                <p className="mt-[15px] text-base font-bold text-slate-400">
                                    - PancakeSwap / Unicrypt / DxSale listing
                                    sniper
                                </p>
                                <p className="mt-[15px] text-base font-bold text-slate-400 mb-10 lg:mb-0">
                                    - Our own swap platform based on Pancakeswap
                                    Liquidity
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 content-center items-center">
                        <div className="grid grid-cols-1 gap-y-5 px-5 md:px-0 text-white">
                            {Colors.map((color) => (
                                <div
                                    key={color.id}
                                    className={`${Classes.innovateCard} m-auto h-auto px-5 md:px-0 rounded-3xl hover:rounded-3xl md:w-full md:m-0 py-4 md:py-6`}
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                >
                                    <div className=" md:px-6 ">
                                        <div className="flex items-center justify-around flex-row-reverse">
                                            <img
                                                className={`${Classes.innovate_img} text-center w-6 h-auto mr-1.5 road_img`}
                                                src={color.img}
                                                alt=""
                                            />
                                            <div>
                                                <h1 className="text-[20px] font-extrabold">
                                                    {color.title}
                                                </h1>
                                                <span className="2xl:text-2xl text-base">
                                                    {color.desc}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Innovate;
