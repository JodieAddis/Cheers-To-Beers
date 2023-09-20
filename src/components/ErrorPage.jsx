import React from "react";
import { Link } from "react-router-dom";

import error from "../assets/img/404.png";

export const ErrorPage = () => {
    const handleClick = () => {};
    return (
        <div className="flex justify-center flex-col bg-beigeBrown">
            <img src={error} alt="Error 404 illustration" />
            <p className="text-white text-center uppercase text-3xl font-semibold">
                page not found
            </p>
            <p className="text-white text-center text-sm my-4">
                The requested page was not found on this server
            </p>

            <div className="flex justify-center my-6 ">
                <button
                    className="mx-2 bg-darkBrown text-lightBeige px-5 py-1 font-semibold hover:cursor-pointer"
                    onClick={handleClick}
                >
                    <Link to="/">Home</Link>
                </button>
                <button
                    className="mx-2 bg-lightBeige text-darkBrown border-darkBrown border-solid border-2 px-5 py-1 font-semibold hover:cursor-pointer"
                    onClick={handleClick}
                >
                    <Link to="/contact">Contact Us</Link>
                </button>
            </div>
        </div>
    );
};
