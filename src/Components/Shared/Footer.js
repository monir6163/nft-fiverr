import React from "react";
import github from "../../images/github.svg";
import smallview from "../../images/header_bg -mobile.png";
import logo_footer from "../../images/logo_nav.webp";
import teligram from "../../images/teligram.svg";
import twitter from "../../images/twitter.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="h-full relative bg-blue-600">
            <div className="flex flex-col lg:justify-between justify-center items-center mt-56">
                <div className="footer_app bg-purple-700 f_app h-auto md:m-0 m-auto px-4 py-3 md:flex md:h-[250px] justify-between ">
                    <img className="md:m-0 m-auto" src={smallview} alt="" />
                    <div className="text-white font-bold text-3xl md:text-[50px] flex flex-col text-center">
                        Ready to start?
                        <span className="text-base mt-4 text-center md:mt-6">
                            Open the DApp now to get going.
                        </span>
                    </div>
                    <div className="mt-6 md:m-0 m-auto">
                        <button className="f_btn">
                            <span className="text-purple-600">Start DApp</span>
                            <svg
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.0695 1.31105V1.31105C13.6548 1.72579 13.6548 2.39575 14.0695 2.81048L18.1956 6.93657H2.06343C1.47854 6.93657 1 7.41512 1 8V8C1 8.58488 1.47854 9.06343 2.06343 9.06343H18.2062L14.0801 13.1895C13.6654 13.6043 13.6654 14.2742 14.0801 14.6889V14.6889C14.4949 15.1037 15.1648 15.1037 15.5796 14.6889L21.5241 8.7444C21.9389 8.32966 21.9389 7.6597 21.5241 7.24497L15.5689 1.31105C15.1648 0.896316 14.4842 0.896316 14.0695 1.31105Z"
                                    fill="#6a0dad"
                                    stroke="#6a0dad"
                                    strokeWidth="0.25"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full mt-12 md:mt-0 md:px-16 mb-10 items-center">
                <img className="h-4 md:h-8 xl:h-10" src={logo_footer} alt="" />
                <span className="mt-5 text-white font-bold">
                    © {new Date().getFullYear()} iLoopSwap. All rights reserved.
                </span>
                <div className="flex justify-around py-3">
                    <a
                        href="http://twiiter.com"
                        target="_blank"
                        className="hover:scale-75"
                        rel="noreferrer"
                    >
                        <img className="pr-6" src={twitter} alt="" />
                    </a>
                    <a
                        href="http://github.com"
                        target="_blank"
                        className="hover:scale-75"
                        rel="noreferrer"
                    >
                        <img className="pr-6" src={github} alt="" />
                    </a>
                    <a
                        href="http://teligram.com"
                        target="_blank"
                        className="hover:scale-75"
                        rel="noreferrer"
                    >
                        <img className="pr-6" src={teligram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
