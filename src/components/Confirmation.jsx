import React from "react";
import { useContext } from "react";
import { DarkModeTheme } from "../context/DarkModeContext";
import { RiMailSendLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export const Confirmation = () => {
    const { darkMode } = useContext(DarkModeTheme);

    const navigateToHome = useNavigate();
    const returnHome = () => {
        navigateToHome("/");
    };
    return (
        <div
            className={`${
                darkMode ? "text-white" : "text-darkBrown"
            } text-center text-lg font-semibold mx-8`}
        >
            <div className="flex justify-center mb-8">
                <IconContext.Provider
                    value={{
                        size: "3em",
                    }}
                >
                    <RiMailSendLine />
                </IconContext.Provider>
            </div>
            <p
                className={`${
                    darkMode ? "text-white" : "text-darkBrown"
                } text-2xl`}
            >
                Your message has been successfully sent !
            </p>
            <button
                className={`${
                    darkMode
                        ? "bg-white text-DarkGrey"
                        : "bg-darkBrown text-white"
                } px-3 mt-8 hover:cursor-pointer`}
                onClick={returnHome}
            >
                Return to home page
            </button>
        </div>
    );
};
