import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { useContext } from "react";

import { DarkModeTheme } from "../context/DarkModeContext";
import { MenuMobile } from "./MenuMobile";

import beer_bg from "../assets/img/Header.jpg";
import beer_bg_bn from "../assets/img/Header_darkMode.jpg";
import logo_app from "../assets/img/logo.png";

export const Header = () => {
    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div
            className="flex flex-col px-4 pt-4 pb-8 sm:pb-20 bg-cover border-b-2 border-beigeBrown"
            style={{
                backgroundImage: darkMode
                    ? `url(${beer_bg_bn})`
                    : `url(${beer_bg})`,
            }}
        >
            <div className="flex justify-between">
                <div className="hidden sm:inline-block">
                    <NavBar />
                </div>
                <div className="sm:hidden">
                    <MenuMobile />
                </div>
                <div>
                    <img
                        src={logo_app}
                        alt="Logo of the webiste cheers to beers"
                        className=" w-14 sm:w-16"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <h1
                    className={`${
                        darkMode ? "bg-grey" : "bg-darkBrown"
                    } mt-10 text-center text-white text-4xl sm:text-5xl font-bold font-Aboreto bg-opacity-50 py-2 w-72  sm:w-auto sm:px-6 sm:mx-72`}
                >
                    Cheers To Beers
                </h1>
            </div>
        </div>
    );
};
