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
                <div className="flex justify-center flex-col my-6 sm:mx-20">
                    <p className="uppercase text-sm text-center">Address</p>
                    <ul className="flex self-center flex-col text-xs mt-2 text-center sm:text-left">
                        <li className="mt-1">Avenue de la Tamise, 38</li>
                        <li className="mt-1">1000 Brussels, Belgium</li>
                        <li className="mt-1">Belgium</li>
                    </ul>
                </div>
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
            <section className="flex justify-between mb-3 mt-12 mx-12 text-xs">
                <div>
                    <nav>
                        <ul className="flex flex-row uppercase">
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
                <div>
                    <p>© Copyright all rights reserved</p>
                </div>
            </section>
        </div>
    );
};
