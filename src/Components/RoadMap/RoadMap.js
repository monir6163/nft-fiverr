import React from "react";
import img1 from "../../images/roadmap/svgviewer-output-1.svg";
import img2 from "../../images/roadmap/svgviewer-output-2.svg";
import img3 from "../../images/roadmap/svgviewer-output-3.svg";
import img4 from "../../images/roadmap/svgviewer-output-4.svg";
import Classes from "./RoadMap.module.css";

const Colors = [
    {
        id: 1,
        title: "Preperation",
        date: "May 2021",
        img: img1,
        desc: "Market research, concept planning, website design and token development",
    },
    {
        id: 2,
        title: "Preper",
        date: "May 2021",
        img: img2,
        desc: "Audit by Solid Group followed by a presale and listings on PCS, CMC/GC",
    },
    {
        id: 3,
        title: "Marketing",
        date: "July 2021",
        img: img3,
        desc: "Constant marketing while preparing release of Lunar Bot for pending orders and listing on CEX.",
    },
    {
        id: 4,
        title: "Upcoming",
        date: "August 2021",
        img: img4,
        desc: "Release of Lunar Sniper bot, a merchandise store and community contests",
    },
];

const RoadMap = () => {
    return (
        <div className="py-20 relative z-[4]">
            <div className="my-container">
                <div>
                    <h1 className="text-center text-[54px] text-white font-bold">
                        Roadmap
                    </h1>
                    <p className="text-center text-[20px] text-[#a7a1aa] font-bold">
                        Join LunarSwap on our journey to the moon!
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-16 text-white">
                    {Colors.map((color) => (
                        <div
                            key={color.id}
                            className={`${Classes.Card} m-auto h-auto rounded-3xl hover:rounded-3xl w-72 md:w-full md:m-0 py-4 md:py-6 relative`}
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                        >
                            <div className=" md:px-6 ">
                                <div className="flex items-center justify-around">
                                    <img
                                        className={`${Classes.road_img} text-center w-6 h-auto mr-1.5 road_img`}
                                        src={color.img}
                                        alt=""
                                    />
                                    <div>
                                        <h1 className="text-[20px] font-extrabold">
                                            {color.title}
                                        </h1>
                                        <h3>{color.date}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="md:text-left text-center text-base md:text-2xl px-4 md:px-6 mt-6 md:mt-8 font-semibold">
                                <span className="2xl:text-2xl text-base">
                                    {color.desc}
                                </span>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
