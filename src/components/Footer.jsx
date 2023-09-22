import React from "react";
import { useContext } from "react";

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

import { DarkModeTheme } from "../context/DarkModeContext";

export const Footer = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div
            className={`${
                darkMode ? "bg-DarkGrey" : "bg-darkBrown"
            } text-white flex flex-col w-full mt-20`}
        >
            <section className="flex justify-center flex-col sm:flex-row">
                <div className="my-6 sm:mx-20">
                    <p className="uppercase text-sm text-center">
                        Social media
                    </p>
                    <ul className="flex flex-row justify-center mt-4">
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1em",
                                }}
                            >
                                <BsLinkedin />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1em",
                                }}
                            >
                                <BsGithub />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1em",
                                }}
                            >
                                <BsFacebook />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1em",
                                }}
                            >
                                <BsInstagram />
                            </IconContext.Provider>
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="border-white border-solid border-1 mx-12 sm:mx-52" />
            <section className="flex flex-col sm:flex-row justify-center sm:justify-between mb-3 mt-10 mx-12 text-xs">
                <div className="mb-8 sm:mb-0">
                    <nav>
                        <ul className="flex flex-row justify-center uppercase">
                            <li className="mx-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mx-2">
                                <Link to="/allbeers">All Beers</Link>
                            </li>
                            <li className="mx-2">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-center sm:text-right">
                    <p>© Copyright all rights reserved</p>
                </div>
            </section>
        </div>
    );
};
