import React from "react";
import Satellite from "../../images/Satellite.png";
import solar from "../../images/Solarsystem.png";
import sun from "../../images/Sun.png";
import "./Featured.css";

const Featured = () => {
    return (
        <div className=" md:100% lg:h-44 w-full bg-[#15051C]">
            <div className="grid lg:flex justify-center lg:justify-between items-center gap-y-4 featured_content">
                <div className="flex flex-col py-8 items-center lg:flex-row">
                    <img
                        className="object-cover w-16 h-16 "
                        src={Satellite}
                        alt=""
                    />
                    <div className="flex flex-col mx-5 mr-5">
                        <span className="text-xl font-bold text-white text-center md:text-left">
                            Automatic Staking
                        </span>
                        <p className="text-base font-medium md:w-48  w-64 mt-1.5 text-center md:text-left text-slate-400">
                            ILX tokens will be staked automatically by holding
                            it in your wallet.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-8 items-center lg:flex-row">
                    <img className="object-cover w-16 h-16 " src={sun} alt="" />
                    <div className="flex flex-col ml-5">
                        <span className="text-xl font-bold text-white text-center md:text-left">
                            Audited by Solid Group
                        </span>
                        <p className="text-base font-medium md:w-48 w-64 mt-1.5 text-center md:text-left text-slate-400">
                            We are{" "}
                            <a
                                href="https://github.com/solidgroup/Solid-Group-Audits/blob/main/Lunar_final_audit_results.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                audited with zero issues
                            </a>
                            via official auditor group.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-8 items-center lg:flex-row">
                    <img
                        className="object-cover w-16 h-16 "
                        src={solar}
                        alt=""
                    />
                    <div className="flex flex-col ml-5">
                        <span className="text-xl font-bold text-white text-center md:text-left">
                            Reward System
                        </span>
                        <p className="text-base font-medium md:w-48 w-64 mt-1.5 text-center md:text-left text-slate-400">
                            10% of all transactions will be collected and given
                            out as rewards to stakers!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
