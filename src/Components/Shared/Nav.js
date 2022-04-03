import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scrollToElement from "scroll-to-element";
import navlogo from "../../images/logo_nav.webp";
import navicon from "../../images/mobile.svg";
import "./Nav.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowHeight, setWindowHeight] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollTo = (selector) => {
        scrollToElement(selector, { offset: 0, ease: "linear", duration: 500 });
    };

    useEffect(() => {
        const handleScroll = () => {
            setWindowHeight(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={`${
                windowHeight ? "fixed top-0" : "absolute lg:top-3"
            }  w-full z-50`}
        >
            <nav
                className={`px-4 ${
                    windowHeight ? "py-4 md:py-3 bg-purple-900" : "py-2 md:py-6"
                }  ${
                    !windowHeight && "lg:rounded-full max-w-[1200px] w-full"
                } mx-auto mb_nav`}
            >
                <div className="my-container flex flex-wrap justify-between items-center">
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="NavBarId"
                        type="button"
                        className="btn-toggle inline-flex items-center p-2 text-base md:text-xl text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="flex items-center"
                    >
                        <img
                            className="h-4 md:w-full md:h-8 xl:h-10"
                            src={navlogo}
                            alt="ILS"
                        />
                    </button>
                    <div className="flex sm:order-last items-center">
                        <button
                            type="button"
                            className="rounded-full text-white mr-2 hidden bg-purple-600 lg:block nav_btn"
                        >
                            <a
                                target="_blank"
                                href="https://whitepaper.soltires.com/"
                                rel="noreferrer"
                            >
                                Open App
                            </a>
                        </button>
                        <a
                            target="_blank"
                            href="https://whitepaper.soltires.com/"
                            rel="noreferrer"
                            className="md:hidden mobile_icon"
                        >
                            <img src={navicon} alt="" />
                        </a>
                    </div>
                    <div
                        className="hidden w-full lg:block md:w-auto"
                        id="NavBarId"
                    >
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 text-base md:text-xl  md:font-medium text-main-white">
                            <li
                                onClick={() => scrollTo("#home")}
                                className="text-white hover:text-orange-600"
                            >
                                <a
                                    href="#home"
                                    className="block py-2 pl-3 "
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li
                                onClick={() => scrollTo("#audit")}
                                className="text-white hover:text-orange-600"
                            >
                                <a
                                    href="#audit"
                                    className="block py-2 pl-3 "
                                    aria-current="page"
                                >
                                    Audit
                                </a>
                            </li>
                            <li
                                onClick={() => scrollTo("#tokenomics")}
                                className="text-white hover:text-orange-600"
                            >
                                <a
                                    href="#tokenomics"
                                    className="block py-2 pl-3 "
                                >
                                    Tokenomics
                                </a>
                            </li>
                            <li
                                onClick={() => scrollTo("#road")}
                                className="text-white hover:text-orange-600"
                            >
                                <a href="#road" className="block py-2 pl-3 ">
                                    Roadmap
                                </a>
                            </li>
                            <li
                                onClick={() => scrollTo("#faq")}
                                className="text-white hover:text-orange-600"
                            >
                                <a href="#faq" className="block py-2 pl-3 ">
                                    Q&A
                                </a>
                            </li>

                            <li className="text-white hover:text-orange-600">
                                <a
                                    href="#contract"
                                    className="block py-2 pl-3 "
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* mobile */}
                <div className="w-full md:w-auto block lg:hidden my_nav ">
                    <ul
                        className={`${
                            isOpen ? "block" : "hidden"
                        } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white `}
                    >
                        <li
                            onClick={() => {
                                scrollTo("#home");
                                setIsOpen(false);
                            }}
                            className="mobile_nav"
                        >
                            <a href="#home" className="block py-2 pl-3 ">
                                Home
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                scrollTo("#audit");
                                setIsOpen(false);
                            }}
                            className="mobile_nav"
                        >
                            <a href="#audit" className="block py-2 pl-3 ">
                                Audit
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                scrollTo("#tokenomics");
                                setIsOpen(false);
                            }}
                            className="mobile_nav"
                        >
                            <a href="#tokenomics" className="block py-2 pl-3 ">
                                Tokenomics
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                scrollTo("#road");
                                setIsOpen(false);
                            }}
                            className="mobile_nav"
                        >
                            <a href="#road" className="block py-2 pl-3 ">
                                Roadmap
                            </a>
                        </li>
                        <li
                            onClick={() => {
                                scrollTo("#contract");
                                setIsOpen(false);
                            }}
                            className="mobile_nav"
                        >
                            <a href="#contract" className="block py-2 pl-3 ">
                                Contract
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
