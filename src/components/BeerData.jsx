import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import { DarkModeTheme } from "../context/DarkModeContext";

import beer_picture from "../assets/img/glass_of_beer.jpg";

export const BeerData = () => {
    const location = useLocation();
    const data = location.state;

    const { darkMode } = useContext(DarkModeTheme);

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
                    <section className="flex flex-col sm:mx-20 sm:mt-4">
                        <div className="flex flex-col justify-center sm:flex-row">
                            <div className="flex-col  self-center mb-8 sm:mb-0">
                                <img
                                    // src={data.image_url}
                                    src={beer_picture}
                                    alt=""
                                    className={`${
                                        darkMode
                                            ? "border-DarkGrey border-solid border-2"
                                            : "border-darkBrown border-solid border-2"
                                    } w-72`}
                                />
                                <ul className="flex sm:flex-row justify-between px-2 py-2 bg-darkBrown w-72">
                                    <li className="text-white text-sm">
                                        Abv: {data.abv}
                                    </li>
                                    <li className="text-white text-sm">
                                        Ibu: {data.ibu}
                                    </li>
                                    <li className="text-white text-sm">
                                        pH: {data.ph}
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } sm:w-96 mx-12 self-center`}
                            >
                                <p className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-3">
                                    Brewers tips
                                </p>
                                <p className="text-center sm:text-justify text-lg sm:text-sm italic">
                                    {data.brewers_tips}
                                </p>
                            </div>
                        </div>
                        <hr
                            className={`${
                                darkMode
                                    ? "border-DarkGrey border-solid border-1"
                                    : "border-darkBrown border-solid border-1"
                            } my-8 mx-10 sm:mx-24 sm:hidden`}
                        />
                        <div className="mx-10 sm:mx-10 mt-4">
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } mb-10`}
                            >
                                <p className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-3">
                                    Description
                                </p>
                                <p className="text-center sm:text-justify text-lg sm:text-sm">
                                    {data.description}
                                </p>
                            </div>
                            <hr
                                className={`${
                                    darkMode
                                        ? "border-DarkGrey border-solid border-1"
                                        : "border-darkBrown border-solid border-1"
                                } my-8 sm:mx-24`}
                            />
                            <div
                                className={`${
                                    darkMode ? "text-white" : "text-darkBrown"
                                } mb-10`}
                            >
                                <p className="text-center sm:text-left font-semibold uppercase text-2xl sm:text-lg mb-3">
                                    Food pairing
                                </p>
                                <ul className="text-center sm:text-left text-lg sm:text-sm">
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
