import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { useContext } from "react";

import { DarkModeTheme } from "../context/DarkModeContext";
import { MenuMobile } from "./MenuMobile";

import beer_bg from "../assets/img/Header_desktop.png";
import beer_bg_bn from "../assets/img/Header_desktop_darkmode.png";
import logo_app from "../assets/img/logo.png";

export const Header = () => {
    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div
            className="flex justify-between px-4 pt-4 pb-14 sm:pb-32 bg-cover border-b-2 border-beigeBrown"
            style={{
                backgroundImage: darkMode
                    ? `url(${beer_bg_bn})`
                    : `url(${beer_bg})`,
            }}
        >
            <div className="hidden sm:inline-block">
                <NavBar />
            </div>
            <div className="sm:hidden">
                <MenuMobile />
            </div>
            <div>
                {/* <p className="text-white">Logo</p> */}
                <img
                    src={logo_app}
                    alt="Logo of the webiste cheers to beers"
                    className="w-12"
                />
            </div>
        </div>
    );
};
