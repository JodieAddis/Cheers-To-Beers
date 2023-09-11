import React from "react";
import { Link } from "@mui/material";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";

export const Confirmation = () => {
    const { darkMode } = useContext(DarkModeTheme);
    return (
        <div
            className={`${
                darkMode ? "text-white" : "text-darkBrown"
            } text-center text-lg font-semibold mx-8`}
        >
            <p>Your message has been successfully sent !</p>
        </div>
    );
};
