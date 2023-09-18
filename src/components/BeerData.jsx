import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import { DarkModeTheme } from "../context/DarkModeContext";

export const BeerData = () => {
    const location = useLocation();
    const data = location.state;

    const { darkMode } = useContext(DarkModeTheme);

    // console.log(data);

    return (
        <>
            {data && (
                <div className="flex flex-col">
                    <section
                        className={`${
                            darkMode ? "text-white" : "text-darkBrown"
                        } mb-6 mt-3 mx-8 text-4xl text-center font-bold uppercase`}
                    >
                        <h1>{data.name}</h1>
                    </section>
                    <section className="flex flex-col sm:flex-row">
                        <div className="flex justify-center">
                            <img
                                src={data.image_url}
                                alt=""
                                className={`${
                                    darkMode
                                        ? "border-DarkGrey border-solid border-2"
                                        : "border-darkBrown border-solid border-2"
                                } w-72`}
                            />
                        </div>
                        <div className="mx-10 mt-10">
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                }`}
                            >
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Brewers tips
                                </p>
                                <p className="text-center sm:text-justify text-lg">
                                    {data.brewers_tips}
                                </p>
                            </div>
                            <hr
                                className={`${
                                    darkMode
                                        ? "border-DarkGrey border-solid border-2"
                                        : "border-darkBrown border-solid border-2"
                                } my-8`}
                            />
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } mb-10`}
                            >
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Description
                                </p>
                                <p className="text-center sm:text-justify text-lg">
                                    {data.description}
                                </p>
                            </div>
                            <hr
                                className={`${
                                    darkMode
                                        ? "border-DarkGrey border-solid border-2"
                                        : "border-darkBrown border-solid border-2"
                                } my-8`}
                            />
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } mb-10`}
                            >
                                <p className="text-center font-semibold uppercase text-2xl mb-3">
                                    Food pairing
                                </p>
                                <ul className="text-center sm:text-left text-lg">
                                    <li className="sm:list-disc">
                                        {data.food_pairing[0]}
                                    </li>
                                    <li className="sm:list-disc">
                                        {data.food_pairing[1]}
                                    </li>
                                    <li className="sm:list-disc">
                                        {data.food_pairing[2]}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};
