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
                                    size: "1.5em",
                                }}
                            >
                                <BsLinkedin />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1.5em",
                                }}
                            >
                                <BsGithub />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1.5em",
                                }}
                            >
                                <BsFacebook />
                            </IconContext.Provider>
                        </li>
                        <li className="mx-2 hover:cursor-pointer">
                            <IconContext.Provider
                                value={{
                                    size: "1.5em",
                                }}
                            >
                                <BsInstagram />
                            </IconContext.Provider>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center flex-col my-6 sm:mx-20">
                    <p className="uppercase text-sm text-center">Address</p>
                    <ul className="flex self-center flex-col text-xs mt-2 text-center">
                        <li className="my-1">Avenue de la Tamise, 38</li>
                        <li className="my-1">1000 Brussels</li>
                        <li className="my-1">Belgium</li>
                    </ul>
                </div>
            </section>
            <hr className="border-white border-solid border-1 mx-12 sm:mx-52" />
            <section>
                <nav>
                    <ul className="flex flex-row justify-center my-6 uppercase text-xs">
                        <li className="mx-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/allbeers">All Beers</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
};
