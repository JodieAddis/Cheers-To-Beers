import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

export const NavBar = () => {
    const { darkMode } = useContext(DarkModeTheme);

    return (
        <div>
            <nav>
                <ul className="flex flex-row text-white font-julius font-semibold text-lg sm:text-sm">
                    <li
                        className={`${
                            darkMode
                                ? "bg-white text-grey"
                                : "bg-lightBeige text-darkBrown"
                        } px-3 py-1`}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={`${
                            darkMode
                                ? "bg-white text-grey"
                                : "bg-lightBeige text-darkBrown"
                        } px-3 py-1 sm:ml-5`}
                    >
                        <Link to="/allbeers">All Beers</Link>
                    </li>
                    <li
                        className={`${
                            darkMode
                                ? "bg-white text-grey"
                                : "bg-lightBeige text-darkBrown"
                        } px-3 py-1 sm:ml-5`}
                    >
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
